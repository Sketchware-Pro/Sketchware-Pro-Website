// NOTICE: To compile this file, run `./compile.sh` or `npx rollup -p @rollup/plugin-node-resolve script/index.js -o script/bundle.js` in the terminal, and then minify the generated bundle.js into bundle-min.js
import "@material/web/button/filled-button.js";
import "@material/web/iconbutton/icon-button";
import "@material/web/button/text-button";
import '@material/web/icon/icon';
import "@material/web/divider/divider";
// Get the user's preferred color scheme
let colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Define a function to toggle the body's class
function toggleBodyClass(e) {
  // If the user prefers dark mode, add the 'dark' class to the body
  if (e.matches) {
    document.body.classList.add('dark');
  } else {
    // Otherwise, remove the 'dark' class from the body
    document.body.classList.remove('dark');
  }
}

// Call the function once to set the initial class
toggleBodyClass(colorScheme);

// Add an event listener to the color scheme media query
// This will call the function whenever the user changes their preference
colorScheme.addListener(toggleBodyClass);


// Optional: Event listener for dynamic changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  bodi.classList.remove('light');  // Always remove "light" first
  if (event.matches) {
    bodi.classList.add('dark');
  } else {
    // No need to explicitly remove "dark" here
  }
});



