const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

// Serve only the eight public pages; never expose Git metadata or local files.
const pages = new Set([
  'index.html', 'product.html', 'verify.html', 'solutions.html',
  'proof.html', 'pricing.html', 'resources.html', 'engineers.html',
]);
http.createServer((request, response) => {
  const name = new URL(request.url, 'http://localhost').pathname.slice(1) || 'index.html';
  if (request.method !== 'GET' || !pages.has(name)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(fs.readFileSync(path.join(__dirname, '..', name)));
}).listen(4173, '127.0.0.1');

