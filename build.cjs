const fs = require('node:fs');
fs.mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'laboratorio.html', 'laboratorio.css', 'laboratorio.js']) {
  fs.copyFileSync(file, 'dist/' + file);
}
fs.cpSync('assets', 'dist/assets', { recursive: true });
