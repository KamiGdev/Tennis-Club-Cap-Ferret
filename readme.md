# Tennis club Cap-Ferret
A french fictitious tennis club website created for my studies. The very first one! (by coding).
This is a responsive application, in portrait and landscape mode, coded in mobile first with ui/ux experience respected.
The website contains 5 pages. All rights reserved, just ask for use.

# Design and content
## Graphic chart, fonts & medias
A cheerful color modern palette with pale and yet acidic tones. The color scheme remains tennis-like, with both the ochre of clay and the hard court (green or blue).  
Inspiration source: coolors.co  
Fonts: inspiration from fontjoy.com

Medias : royalty-free sources from Shutterstock, Pexels and Unsplash.  
Graphic design with image creations.

## Editorial content
Work on titles, subtitles and some paragraphs. The rest of the content is in lorem, bearing in mind that the site is fictitious and the evaluation is technical. The site is not referenced by bots, so there's no risk of duplicate content.

# Code
## Syntax, language and framework
HTML 5, CSS 3, JS and BOOTSTRAP V5.0 installed locally with SASS for site customization.  
No existing backend in this project.

## Installations and development
### Bootstrap in cli
Before running :  
Make sure you have installed node.js to have all dependencies.

Command:
```bash 
npm init (tap "enter" until you get the package.json file)
npm install bootstrap (you have now 2 files, node_modules and package-lock.json)
```

Notes :  You can also install bootstrap in cdn by copying links of css and js components.
https://getbootstrap.com/docs/5.0/getting-started/download/  


### SASS installation  

**Step 1: Enter command**
```bash
npm install -g sass (g for global to install sass on your computer, not only for the project)
```  


**Step 2: Folder and file creations**  
Create a global.scss file within a sass folder. Then import bootstrap scripts and personal components. In my case study, I have targeted the color palette, custom, utilities and components:

```
@use "sass:map";
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/utilities";

@import "./palette";
@import "./custom";
@import "./utilities";
@import "./components";

@import "../node_modules/bootstrap/scss/bootstrap.scss"
```  


**Step 3: SASS compilation and CSS link to HTML**  
In your terminal, type the command :
```bash
sass sass/global.scss styles/raw/style.css --watch ("watch" enables to register the changes and automatic compilation of scss/sass to css)
```

This action will generate 2 files style.css and style.css.map. Create a folder "styles" and subfolder "raw" and add these css files in the "raw" subfolder.


<span style="color:green">*Tips to avoid retyping the automatic sass command with watch:*</span>  
In the package.json file under "scripts", type:
```
"sass": "sass scss/global.scss styles/raw/style.css --watch "
```

Then, in the terminal of the json file, type the command:
 ```bash 
 npm run sass
 ```

In the html file, we link the compilation file :
```<link rel="stylesheet" href="styles/raw/style.css">```  



**Step 4: Preparing css purge**  
Create a "cleaned" subfolder in the styles folder to purge css in the final phase of the project.  


## CSS Purge
### Purge
Go on the raw/style.css file. On you terminal type the command :
```bash 
 npm i -g purgecss
 ```

Then, in the package.json file, under "scripts" and under "sass", enter the command:
```bash
"purgecss":  "purgecss -css styles/raw/style.css --content index.html -o s--content index.html scripts/*.js -o styles/cleaned/home.css"
 ```
Go on the "cleaned" folder. In your terminal enter the command:
```bash
npm run purge
```

Now in your terminal, enter the css purging from other pages:
```bash
purgecss -css styles/raw/style.css --content evenements.html -o s--content evenements.html scripts/*.js -o styles/cleaned/evenements.css
purgecss -css styles/raw/style.css --content tarifs.html -o s--content tarifs.html scripts/*.js -o styles/cleaned/tarifs.css
purgecss -css styles/raw/style.css --content contact.html -o s--content contact.html scripts/*.js -o styles/cleaned/contact.css
purgecss -css styles/raw/style.css —content mentions-legales.html -o s--content mentions-legales.html scripts/*.js -o styles/cleaned/mentions-legales.css
```

These command lines generate 5 style.css files in the "cleaned" folder.  



### CSS files link to HTML pages
```
<link rel="stylesheet" href="styles/cleaned/home.css">

<link rel="stylesheet" href="styles/cleaned/evenements.css">

<link rel="stylesheet" href="styles/cleaned/tarifs.css">

<link rel="stylesheet" href="styles/cleaned/contact.css">

<link rel="stylesheet" href="styles/cleaned/mentions-legales.css">
```

<span style="color:red">*Warning with js properties link to classes (e.g. hidden) which are not specified in the html files:*</span>

For instance in my project, i have added the comment lines below to make the css purge correctly.

```
/*! purgecss start ignore */
.loader.hidden {
  animation: fadeOut 1s forwards;
  /* Pour faire disparaître le loader au chargement de page, incluant la ligne de code ci-dessous avec keyframes fadeout */
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
/*! purgecss end ignore */
```


## Production folder
Create a new "Production" folder in your project wich contains :
 * The 5 html pages in the production folder root
 * A ressources folder (images, logo, icons and so on)
 * A script folder (bootstrap js folder)
 * The css styles folder (including the 5 cleaned css pages)

 ## Commits
I've made regular commits by working by page and by feature:
- 1 branch per page, then i've merged it with the "main" branch when work deemed complete
- The "main" branch was initialized with the document body (basic tags)
- At the end of the project, following commits has been added to the "main" branch as:
* SEO (meta tags)
* Cookies
* Preload
* Favicon 
* Code and editorial content optimizations
* CSS purge
* Production folder creation
* Readme (added file)

# Production deployment
With netlify.com  

<span class="text-warning">**SEO notes**</span>  
As the site is fictitious, no sitemap file exists, just a robots.txt file specifying that all search engine robots are prohibited from crawling the site and referencing pages.

robots.txt file :
```
User-agent: *
Disallow: /
```