#!/usr/bin/env node
/**
 * Script para gerar ícones PWA a partir de um logo base.
 * Requer: npm i sharp (adicione ao projeto) ou execute via npx sharp
 * Uso: node scripts/generate-icons.js ./src/assets/images/logo.png
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const input = process.argv[2];
if (!input) {
  console.error('Informe o caminho do arquivo fonte (ex: src/assets/images/logo.png)');
  process.exit(1);
}

const sizes = [192, 256, 512];
const outDir = 'public';

(async () => {
  try {
    await Promise.all(sizes.map(async (size) => {
      const out = path.join(outDir, `icon-${size}.png`);
      await sharp(input).resize(size, size, { fit: 'contain', background: { r:255, g:255, b:255, alpha:0 } }).png().toFile(out);
      console.log('Gerado:', out);
    }));
    // Maskable: adiciona padding 12% para evitar cortes
    const maskableSize = 512;
    const padding = Math.round(maskableSize * 0.12);
    const outMask = path.join(outDir, 'icon-maskable-512.png');
    const base = await sharp(input).resize(maskableSize - padding*2, maskableSize - padding*2, { fit:'contain', background:{ r:255,g:255,b:255,alpha:0 } }).png().toBuffer();
    // cria canvas transparente e compõe
    const canvas = await sharp({ create: { width: maskableSize, height: maskableSize, channels: 4, background: { r:255,g:255,b:255,alpha:0 } } })
      .composite([{ input: base, top: padding, left: padding }])
      .png()
      .toFile(outMask);
    console.log('Gerado:', outMask);
  } catch (e) {
    console.error('Erro gerando ícones:', e);
    process.exit(1);
  }
})();
