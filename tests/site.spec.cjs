const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  page: async ({ page }, use) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await use(page);
    expect(errors, 'No uncaught browser JavaScript errors').toEqual([]);
  },
});
const pages = [
  'index.html', 'product.html', 'verify.html', 'solutions.html',
  'proof.html', 'pricing.html', 'resources.html', 'engineers.html',
];

async function open(page, file) {
  const response = await page.goto('/' + file);
  expect(response.status()).toBe(200);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page).toHaveTitle(/Lightyear/);
}

async function noHorizontalScroll(page) {
  const result = await page.evaluate(() => {
    const outside = [];
    const scrollers = [];
    for (const element of document.querySelectorAll('body *')) {
      // These table headings are deliberately visually clipped, but retained
      // for screen readers while mobile cells show their column labels.
      const heading = element.closest('.mobile-card-table thead');
      if (heading && getComputedStyle(heading).clipPath === 'inset(50%)') continue;
      const box = element.getBoundingClientRect();
      // SVG drawing coordinates can extend beyond their clipped viewport.
      // Check that viewport itself, plus document and nested scrolling below.
      const svg = element.ownerSVGElement;
      if (svg && ['hidden', 'clip'].includes(getComputedStyle(svg).overflow)) continue;
      if (box.width > 0 && (box.left < -1 || box.right > innerWidth + 1)) {
        outside.push(element.tagName + '#' + element.id);
      }
      if (element.clientWidth > 0 &&
          element.scrollWidth > element.clientWidth + 1 &&
          ['auto', 'scroll'].includes(getComputedStyle(element).overflowX)) {
        scrollers.push(element.tagName + '#' + element.id);
      }
    }
    return {
      viewport: innerWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      outside,
      scrollers,
    };
  });
  expect(result.document, 'Document must fit viewport').toBeLessThanOrEqual(result.viewport);
  expect(result.body, 'Body must fit viewport').toBeLessThanOrEqual(result.viewport);
  expect(result.outside, 'Visible content must fit viewport').toEqual([]);
  expect(result.scrollers, 'No nested horizontal scrolling').toEqual([]);
}

for (const file of pages) {
  test(file + ' renders without horizontal scrolling', async ({ page }, testInfo) => {
    await open(page, file);
    await noHorizontalScroll(page);
    await testInfo.attach('full-page', {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  });
}

test('one cent toggles MATCH -> NOT EQUIVALENT -> MATCH', async ({ page }) => {
  await open(page, 'index.html');
  const button = page.locator('#cent-btn');
  const verdict = page.locator('#cent-chip');
  const amount = page.locator('#cent-new');
  await expect(verdict).toHaveText('MATCH');
  await expect(amount).toHaveText('18.27');
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  await button.click();
  await expect(verdict).toHaveText('NOT EQUIVALENT');
  await expect(amount).toHaveText('18.28');
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(button).toHaveText('Undo the difference');
  await noHorizontalScroll(page);
  await button.click();
  await expect(verdict).toHaveText('MATCH');
  await expect(amount).toHaveText('18.27');
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  await expect(button).toHaveText('Introduce a 1¢ difference');
  await noHorizontalScroll(page);
});

for (const [file, playerId, controlId, suffix = ''] of [
  ['product.html', 'loopPlayer', 'loopPause'],
  ['proof.html', 'fxPlayer', 'fxPause'],
  ['verify.html', 'vfPlayer', 'vfPause'],
  ['index.html', 'prismPlayer', 'prismPause', ' animation'],
  ['index.html', 'apPlayer', 'apPause', ' animation'],
]) {
  test(file + ' ' + playerId + ' animation advances, freezes on pause, and resumes', async ({ page }) => {
    await open(page, file);
    const player = page.locator('#' + playerId);
    const control = page.locator('#' + controlId);
    await player.scrollIntoViewIfNeeded();
    const snapshot = () => player.evaluate(element =>
      element.getAnimations({ subtree: true }).map(animation => ({
        time: animation.currentTime,
        state: animation.playState,
      })));
    const initial = await snapshot();
    expect(initial.length, 'The animation must exist, not just a button').toBeGreaterThan(0);
    await expect.poll(async () => {
      const current = await snapshot();
      return current.length === initial.length &&
        current.every((item, i) => item.state === 'running' && item.time > initial[i].time);
    }).toBe(true);

    await control.click();
    await expect(control).toHaveText('Play' + suffix);
    await expect(control).toHaveAttribute('aria-pressed', 'true');
    await expect.poll(async () => (await snapshot()).every(item => item.state === 'paused')).toBe(true);
    const paused = await snapshot();
    // A real interval is necessary to prove timelines stop, rather than
    // merely asserting a label or CSS class changed.
    await page.waitForTimeout(300);
    const frozen = await snapshot();
    expect(frozen.length).toBe(initial.length);
    frozen.forEach((item, i) => {
      expect(item.state).toBe('paused');
      expect(item.time).toBe(paused[i].time);
    });

    await control.click();
    await expect(control).toHaveText('Pause' + suffix);
    await expect(control).toHaveAttribute('aria-pressed', 'false');
    await expect.poll(async () => {
      const current = await snapshot();
      return current.length === frozen.length &&
        current.every((item, i) => item.state === 'running' && item.time > frozen[i].time);
    }).toBe(true);
    if (file === 'proof.html') {
      await control.click();
      await page.locator('#fxReplay').click();
      await expect(control).toHaveText('Pause');
      await expect(control).toHaveAttribute('aria-pressed', 'false');
      await expect(page.locator('#fxOld')).toHaveText('Oracle');
      await expect.poll(async () => (await snapshot()).every(item => item.state === 'running')).toBe(true);
    }
    await noHorizontalScroll(page);
  });
}
