# STARZPLAY Javascript developer challenge

So you made it up to this step. Welcome to the STARZPLAY coding challenge. Good Luck!

## STARZPLAY Landing page

This project is about the new landing page STARZPLAY wants to show to their customers. It's actually the real design
with the same technologies used in the real word landing page. The idea with this is that you get a realistic picture
of the designs and development tools you will use if you finally join us. Maybe you have never used some of the tools
we are using in this project, so just take into account that you will have to read some docs before telling us how much
time you will need to complete the challenge.

Unfortunately, our developers couldn't complete it and that's why we need your help here.

## Your tasks

- The What's Trending image is not properly implemented. Currently the image URL from which the browser should download
and paint it is not provided to the component. There is a super primitive server in this project that returns the URL to
the caller. The app should make a call to get the image and use it so that the What's Trending part is displayed as
expected. The problem is that the server is too slow so the app will have to wait until the response is ready. Do
whatever you think it's needed to ensure a proper user experience for this.
- In general we want to try to make the page fast. For example, in the Tabs component there is a computation need when
clicking each tab. In this project this computation is simulated with a timer. Given that the computation can't be
removed, think on a way to improve the user experience as much as possible from both UI feedback and speed perspectives.
The only requirement for this point is that you can't just remove the call to the `calculateTabToShow` function when a
tab is clicked.
- We want to implement a limited version of the landing page with less features that normal. We call this the Mini
Mode. In the header the is a link with the text 'Toggle Mini Mode'. When clicking on this, the landing page should stop
showing the following components, and when clicking back they should appear again:
    - Explore link in the header
    - Language selector in the header
    - Facebook button in the sticky banner
    - Devices tab in the Tabs component, but not the others
    - Apple App Store and Google Play icons in the footer.

## Time

We understand that you are currently working and you have your life. We don't want to be a problem for that so once
you have read this README and you think you have all the tasks clear, please let us know how long it will take for you
to complete them and send the challenge back to us. Just tell us one date and we will wait until then.

## Development

### Setting up the development environment

This project requires Node.js to be installed, any not-too-old version should work. Once you satisfy this requirement,
you can run the app by running:

```
npm install
npm start
```

If you want to build the app for production, you can do:

```
npm run build
```

For the part that requires the simple server, run the following in a separate terminal:
```
node server.js
```

### Some tips around the implementation

- You can find a storybook documentation for a list of components in .out/index.html. If you open it in a browser, you
will be able to know about them.
ignore it even if it appears in the docs.
- As a rule of thumb, it's better to limit the amount of third party libraries we add to our projects. However for this
challenge it's fine if you think you need some. Just use the ones you think you need but please justify our decision. 
    
### Process

- The final deliverable should be one of these:
    - A zip file with your results.
    - (Preferred but won't negatively evaluate if not done this way) A link to a git repo with one or more pull requests
    in the repository.
- If you have any questions, let us know, we'd be happy to help you as you need.

### Tools used in the challenge

- [Create React App](https://create-react-app.dev/): An app bootstrapper that makes it much easier to start creating React apps.
- [Styled Components](https://www.styled-components.com/): Library used to style our React components.
- [Storybook](https://storybook.js.org/): You shouldn't need to know anything about it, but present here for reference.

## What to pay attention to besides the tasks

- You have received an existing project. Try to follow the file organization and code style that is present on it.

# What not to pay too much attention to

- In the project you will find several links without a valid href. These, in the real word landing page, are meant to
link to external websites. Just leave those links as you find them (and ignore the linter warnings), we won't need any
functional link in this challenge.
- We know browser support is something to be taken into account. For this challenge, feel free to use any new technology
you find appropriate, but please let us know if you use anything that requires certain version of a given browser.
