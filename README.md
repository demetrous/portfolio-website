# My Portfolio — Software Engineer

A simple, fast, single-page portfolio built with HTML, CSS, and vanilla JavaScript. Ready to deploy on AWS Amplify.

## Preview locally

Open `index.html` directly in your browser, or serve the folder:

```bash
# Python 3
python -m http.server 5500
# or Node (if installed)
npx serve . -l 5500
```

Visit `http://localhost:5500`.

## Deploy to AWS Amplify

1. Push this repository to GitHub.
2. In the AWS console, open Amplify Hosting and choose "Connect app".
3. Select your repository and main branch.
4. Amplify uses `amplify.yml` and will deploy as a static site. No build needed.

## Customize

- Update your name, description, and links in `index.html`.
- Tweak colors and layout in `styles.css`.
- The theme toggle and smooth scrolling are in `script.js`.

## Project structure

```
index.html
styles.css
script.js
amplify.yml
favicon.svg
.gitignore
README.md
```

## License

MIT
