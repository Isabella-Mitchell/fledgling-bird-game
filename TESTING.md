# Testing

The Row Gallery website has been tested using the following methods:
- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator) 
        -
        -
        -
    - [W3C CSS Validator](#w3c-css-validator)
    - [JSHINT Javascript Code Quality Tool](#jshint-javascript-code-quality-tool)
- [Lighthouse](#lighthouse)
- [Responsiveness](#responsiveness)
- [A11y Color Contrast Accessibility Checker](#a11y-color-contrast-accessibility-checker)
- [Browser Compatibility](#browser-compatibility)
- [Testing User Stories](#testing-user-stories)
        -
        -
        -
- [Manual Testing](#manual-testing)
- [Peer Review](#peer-review)
- [Bugs](#bugs)
    - [Resolved](#resolved)
    - [Unresolved](#unresolved)

# Code Validation

## W3C HTML Validator

The Fledgling website passed all tests using the [W3C HTML](https://validator.w3.org/) Validator tool

### Landing Page
<h2 align="center"><img src="assets/readme/html-validation-home.jpg"></h2>

### Game Page
<h2 align="center"><img src="assets/readme/html-validation-game.jpg"></h2>

### Sightings Page
<h2 align="center"><img src="assets/readme/html-validation-sightings.jpg"></h2>

## W3C CSS Validator

The Fledgling website passed all tests using the [W3C CSS](https://jigsaw.w3.org/css-validator/) Validator tool
<h2 align="center"><img src="assets/readme/css-validation.jpg"></h2>

## JSHINT Javascript Code Quality Tool

The Fledgling website showed some errors using the [JSHint](https://jshint.com/) Javascript validation tool. See unresolved bugs.

### eBird.js
<h2 align="center"><img src="assets/readme/eBird-validation.jpg"></h2>

### script.js
<h2 align="center"><img src="assets/readme/script-validation.jpg"></h2>

# Lighthouse

### Lighthouse Report for Landing Page (Desktop)
<h2 align="center"><img src="assets/readme.home-page-desktop-lighthouse.jpg"></h2>

### Lighthouse Report for Landing Page (Mobile)
<h2 align="center"><img src="assets/readme.home-page-mobile-lighthouse.jpg"></h2>

I used the Lighthouse reports in Google Developer Tools to examine the pages of the website for the following
- Performace
- Accessibility
- Best Practices 
- SEO

All Pages performed well (scored 95 and above) in:
- Performance, Accessibility, Best Practices and SEO on Desktop
- Accessibility, Best Practices and SEO on Mobile

In some tests the game page did not perform as well (scored 79 and above) in:
- Performance on mobile

Lighthouse recommends eliminating render-blocking resources to improve performance on mobile. (Detailed in [Unresolved Bugs](#unresolved) section)

# A11y Color Contrast Accessibility Checker

All website pages were tested using the A11y Color Contrast Accessibility Checker and no automated colour contrast issues were found.

<h2 align="center"><img src="assets/readme/colour-contrast-index.jpg"></h2>

<h2 align="center"><img src="assets/readme/colour-contrast-game.jpg"></h2>

<h2 align="center"><img src="assets/readme/colour-contrast-sightings.jpg"></h2>

# Browser Compatibility

The site was tested in Google Chrome, Microsoft Edge and Mozilla Firefox on desktop.

The site was tested in Google Chrome and Safari on mobile and tablet.

No issues arose during browser testing. CSS transitions worked on all browsers tested. 

Appearance, functionality and responsiveness were largely consistent across browsers and devices. Exceptions include:
- Image stretching on Ipad (see Resolved Bugs)
- ...EDIT

# Responsiveness

Responsivity tests were carried out using Google Chrome DevTools. Device screen sizes covered include:
- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Mini
- iPad Air
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max

I also personally tested the website on iPhone 12, iPad Pro 2nd Generation, Dell XPS 15 laptop and a Dell widescreen monitor.

# Testing User Stories

# Manual Testing

## All Pages

## Game Page
 
## Sightings Page