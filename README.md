# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My process

- Iterative trial-and-error for the markup that satisfies the layout changes from mobile to desktop screen. Back and forth tweaking of the text content to align properly as per design. Similar process for the email form-input field and active states and error message functionality.

### Built with

- HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow (needed to put in 768px breakpoint as the divide between column to row based layout)

### What I learned / need to keep practicing

Became more familiar with Tailwind setup. Previously, I was using the CDN, but with help of a video tutorial with the docs, the CLI approach was used which allowed me to add config.js style properties.
The challenge was another good chance to practice DOM manipulation (switching between turning on and off styles) and email address validation (client-side).
There are some tricky styling / positioning aspects namely making the arrow button icon responsively positioned.

### Continued development

Highlighted above:

- DOM manip: how to get the red alert icon and alert message to show for say 3seconds, then disappear, prompting the user to re-type a valid email address.
- Email validation: still not sure how to do this. Need to revisit this, perhaps additional php scripts are required? Or look into some tutorials on JS form validation (regex check).
- The SVG background doesn't quite line up with the jpeg design- will need to look into making this better.
- The form field doesn't look great at <375px, maybe the button icon could break to a new line?
- General laying out- there is noticeable whitespace at large screen widths, set height: 100%?

### Useful resources

- [Brad Traversy's video](https://www.youtube.com/watch?v=dFgzHOX84xQ&t=101s&ab_channel=TraversyMedia) - This showed me how to use Tailwind CLI method to import tailwind classes and local env setup.

1. Navigate to proj root and in terminal: `npm init -y` to create template json file.
2. `npm install -D tailwindcss` (-D for dependency)
3. `npx tailwindcss init`
   Add your custom breakpoints and css properties in tailwind.config.js
4. Create input.css file which will require all of the base tailwind classes: base / components / utilities. This is step 3 in the [docs](https://tailwindcss.com/docs/installation) (at the time of this markup preparation).
5. Start the build process by adding these lines to package.json:
   "scripts": {
   "build": "tailwindcss -i ./input.css -o ./css/main.css",
   "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
   Build command to first build the styling, the second to rebuild the styling as changes are made live.

- Stack Overflow for everything else (layout, dealing with SVGs etc.)
- Had a look at Shabari02's code which was a nice way of implementing the email field feature. The script was straightforward to follow: https://github.com/Shabari02/Base-Apparel-coming-soon-page-Frontend-Mentor

## Author

wkan17012021

## Acknowledgments

- Thanks goes out to Brad Traversy for his video on TW css.
- Also, requested suggestions from FEM Slack Channel, Grace replied with some helpful comments- namely 375px listed in the style guide means make the mobile-firest-responsive design styling from this breakpoint to the next (1440px).
- Shabari02 code for the email functionality.
