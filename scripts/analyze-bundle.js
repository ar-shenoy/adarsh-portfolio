import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔍 Analyzing bundle size...\n');

try {
  // Run build with analysis
  execSync('npm run build', { stdio: 'inherit' });

  // Read dist directory
  const distPath = './dist';
  const files = fs.readdirSync(distPath, { recursive: true });

  let totalSize = 0;
  const fileSizes = [];

  files.forEach(file => {
    if (typeof file === 'string' && file.includes('.')) {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      const sizeInKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;

      fileSizes.push({
        name: file,
        size: sizeInKB,
        path: filePath
      });
    }
  });

  // Sort by size
  fileSizes.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));

  console.log('📊 Bundle Analysis Results:');
  console.log('============================\n');

  fileSizes.forEach(file => {
    console.log(`${file.name.padEnd(40)} ${file.size} KB`);
  });

  console.log('\n' + '='.repeat(50));
  console.log(`Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`Gzipped Estimate: ${(totalSize / 1024 * 0.3).toFixed(2)} KB`);

  // Performance recommendations
  console.log('\n🚀 Performance Recommendations:');
  console.log('================================');

  const largeFiles = fileSizes.filter(f => parseFloat(f.size) > 50);
  if (largeFiles.length > 0) {
    console.log('⚠️  Large files detected:');
    largeFiles.forEach(file => {
      console.log(`   - ${file.name}: ${file.size} KB`);
    });
    console.log('   Consider code splitting or lazy loading for these files.');
  }

  if (totalSize / 1024 > 500) {
    console.log('⚠️  Bundle size is large (>500KB). Consider:');
    console.log('   - Further code splitting');
    console.log('   - Tree shaking unused code');
    console.log('   - Optimizing images and assets');
  }

  console.log('\n✅ Bundle analysis complete!');

} catch (error) {
  console.error('❌ Error analyzing bundle:', error.message);
  process.exit(1);
} 