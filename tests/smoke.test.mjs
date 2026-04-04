import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
}

test('landing page composes the expected sections', () => {
  const pageSource = readProjectFile('app/page.js');

  const expectedSections = [
    '<Header />',
    '<HeroSection />',
    '<ScalabilitySection />',
    '<AISection />',
    '<InvoicingSection />',
    '<PricingSection />',
    '<CTASection />',
    '<Footer />',
  ];

  for (const section of expectedSections) {
    assert.match(pageSource, new RegExp(section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('layout exposes Spanish metadata and document language', () => {
  const layoutSource = readProjectFile('app/layout.js');

  assert.match(layoutSource, /title:\s*'BeautyFlow - El Sistema Operativo para Imperios de Belleza'/);
  assert.match(layoutSource, /description:/);
  assert.match(layoutSource, /<html lang="es">/);
  assert.doesNotMatch(layoutSource, /ALLOWALL|frame-ancestors \*/);
});

test('security headers stay hardened', async () => {
  const nextConfig = require(path.join(projectRoot, 'next.config.js'));
  const headersConfig = await nextConfig.headers();
  const headerMap = new Map(headersConfig[0].headers.map((header) => [header.key, header.value]));

  assert.equal(headerMap.get('X-Frame-Options'), 'DENY');
  assert.equal(headerMap.get('X-Content-Type-Options'), 'nosniff');
  assert.equal(headerMap.get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.equal(headerMap.get('Permissions-Policy'), 'camera=(), microphone=(), geolocation=()');
  assert.match(headerMap.get('Content-Security-Policy'), /frame-ancestors 'none'/);
  assert.doesNotMatch(headerMap.get('Content-Security-Policy'), /frame-ancestors \*/);
});
