echo 'Please ensure that you are in the root of the repository before running this!'
npx rollup -p @rollup/plugin-node-resolve script/index.js -o script/bundle.js
npx rollup -p @rollup/plugin-node-resolve script/team.js -o script/team-bundle.js