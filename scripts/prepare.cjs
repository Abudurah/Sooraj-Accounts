const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
if (fs.existsSync(path.join(root, 'icon.png'))) {
  fs.copyFileSync(path.join(root, 'icon.png'), path.join(root, 'public', 'icon.png'));
}
