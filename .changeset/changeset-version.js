const { exec } = require('child_process');
exec('npx changeset version');
exec('npm install');