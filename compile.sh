echo 'If you see an error, please ensure that you have the necessary dependencies installed.'
echo 'Please ensure that you are in the root of the repository before running this!'
npx rollup -p @rollup/plugin-node-resolve script/index.js -o script/bundle.js
npx rollup -p @rollup/plugin-node-resolve script/team.js -o script/team-bundle.js
npx rollup -p @rollup/plugin-node-resolve script/download.js -o script/download-bundle.js