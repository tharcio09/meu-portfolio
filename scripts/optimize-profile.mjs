/**
 * Script de otimização da imagem de perfil — versão final.
 * Usa Sharp para recomprimir profile.png preservando qualidade visual suficiente
 * para o layout (tamanho exibido máximo: 320px no About.tsx).
 *
 * Execução: node scripts/optimize-profile.mjs
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backupPath = path.join(__dirname, '..', 'public', 'images', 'profile.original.png');
const outputPath = path.join(__dirname, '..', 'public', 'images', 'profile.png');

// Usar o backup original como fonte para não re-comprimir o já comprimido
const inputPath = fs.existsSync(backupPath) ? backupPath : outputPath;
const inputStat = fs.statSync(inputPath);
console.log(`\n📸 Imagem fonte: ${(inputStat.size / 1024 / 1024).toFixed(2)} MB`);

// O layout exibe a imagem em no máximo 320px.
// 480px dá 1.5x de resolução para telas retina/HiDPI — ideal.
const result = await sharp(inputPath)
  .resize(480, 480, {
    fit: 'inside',
    withoutEnlargement: true,
  })
  .png({
    compressionLevel: 9,
    quality: 85,
    effort: 10,
  })
  .toBuffer();

fs.writeFileSync(outputPath, result);

const outputStat = fs.statSync(outputPath);
const reduction = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);

console.log(`✅ Imagem otimizada: ${(outputStat.size / 1024).toFixed(0)} KB`);
console.log(`📉 Redução: ${reduction}% menor`);
console.log(`📐 Resolução: 480×480px (suficiente para 320px exibidos + retina)\n`);
