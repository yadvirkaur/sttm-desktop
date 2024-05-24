require('dotenv').config();
const fs = require('fs');
const packageJson = require('../package.json');

const teamId = process.env.APPLE_TEAM_ID;

if (!teamId) {
  console.error('TEAM_ID is not defined in the environment variables');
  process.exit(1);
}

packageJson.build.mac.notarize.teamId = teamId;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf-8');
console.log('package.json has been updated with the APPLE_TEAM_ID');
