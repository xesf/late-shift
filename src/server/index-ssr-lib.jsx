/* eslint-disable react/no-danger */
const React = require('react');

module.exports = () => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            {/* <link rel="manifest" href="manifest.json" /> */}
            {/* <link rel="shortcut icon" href="favicon.ico" /> */}
            <title>Late Shift for the Web</title>
            <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
            />
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root" className="ui canvas-container" />
            <script crossOrigin="true" src="https://unpkg.com/react@16/umd/react.development.js" />
            <script crossOrigin="true" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
            <script src="https://ajax.googleapis.com/ajax/libs/shaka-player/2.5.2/shaka-player.compiled.js" />
            <script type="text/javascript" src="palanca-studio.js "/>
            <script type="text/javascript" src="bundle.js" />
        </body>
    </html>
);
