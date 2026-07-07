const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
if (fs.existsSync(path.join(root, 'icon.png'))) {
  fs.copyFileSync(path.join(root, 'icon.png'), path.join(root, 'public', 'icon.png'));
}
const menuCardDist = path.join(root, 'tools', 'menu-card-generator', 'dist');
if (fs.existsSync(menuCardDist)) {
  fs.cpSync(menuCardDist, path.join(root, 'public', 'tools', 'menu-card-generator', 'dist'), { recursive: true });
}
