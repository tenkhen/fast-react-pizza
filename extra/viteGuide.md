# PREPARATION

INSTALLING VITE WITH REACT

1. Go to the folder where you want to initialize vite.
2. In terminal, `npm create vite@latest` (for specific verion, use vite@)
3. Type project name
4. Select React from framework list
5. Select JavaScript from variant list

That's it folks

---

INSTALLING NODE MODULES

As Vite doesn't come with node_modules installed, we need to install it manually

1. `npm i`

---

INSTALLING AND CONFIGURE ESLINT

1. `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`
2. Add 'react-app' to .eslintrc.cjs in extends array
3. Import eslint from 'vite-plugin-eslint' to vite.config.js and add eslint function in plugins array under defineConfig function

---

CLEAN UP FILES AND FOLDERS

1. Delete App.css, index.css and assets folder.
2. Delete "import './index.css'" from main.jsx

==============================================

SETUP GIT

1. Check if there is .git file by `ls -a`
2. If there is already .git, delete it by `rm -rf .git`
3. If you are working on full-stack, don't forget to put .gitignore file to root folder
4. Configuring .gitignore file:
   Add files you don't want to upload on git repository. If there is backslash in front of it, just remove it. Here usually we add node_modules and .env (just make .example_env and put some guides in there)
5. Initialize git repository in the root with `git init`
6. Commit:
   1. `git add .` (add all)
   2. `git commit -m 'Initial commit'` (first commit)
7. Create new git repository. Preferebly GitHub:
   1. New repository
   2. Repository name (your project name)
   3. Set Private (my preference)
   4. Click on Create repository button
8. Push:
   1. Copy `git remote add origin https://github.com/your-github-name/fast-react-pizza.git` and run it in VScode built-in terminal. (Don't forget to replace your github name)
   2. Copy `git branch -M main` and run it
   3. Copy `git push -u origin main` and it as well
9. Push modified files in two ways:
   1. Option 1. Using integrated source control of VScode (automatically):
      1. Click on Source Control icon on the left
      2. Write commit message in the message input on the top
      3. Click on Commit
      4. Click on Sync Changes
   2. Option 2. Using git commands (manually):
      1. `git add .` (add all)
      2. `git commit -m 'Your message'`
      3. `git push -u origin main`

==============================================

INSTALLING REACT ROUTER DOM

1. `npm i react-router-dom` (or choose your version by react-router.dom@6)

==============================================

TAILWIND CSS

1. `npm install -D tailwindcss postcss autoprefixer` (use tailwindcss@ for specific version)
2. `npx tailwindcss init -p` (initialize post css config file)

3. Configure template paths
   In tailwind.config.js add following codes
   content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ],

   To add your own breakpoints add following in theme in tailwind.config.js

   theme: {
   screens: {
   'tablet': '640px',
   => @media (min-width: 640px) { ... }

   'laptop': '1024px',
   => @media (min-width: 1024px) { ... }

   'desktop': '1280px',
   => @media (min-width: 1280px) { ... }
   },
   }

   To change default font, add following code in theme in railwind.config.js
   fontFamily: {
   sans: "Roboto Mono, monospace",
   }

   To add custom colors, fontSize etc, add in extend

4. Configure index.css
   Add follow three lines at the beginning in the index.css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. Install Tailwind CSS IntelliSense VScode extension from Tailwind Labs
   In order to make it work, add following code to settings.json
   "editor.quickSuggestions": {
   "strings": true
   },
   "css.validate": false,
   "editor.inlineSuggest.enabled": true

6. Install Prettier plugin for Tailwind CSS
   `npm install -D prettier prettier-plugin-tailwindcss`
7. Create prettier.config.cjs and add following code in it
   module.exports = { plugins: ['prettier-plugin-tailwindcss'], }
