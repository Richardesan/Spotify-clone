const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(express.json());  // To parse JSON bodies

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'https://localhost:5173',
        clientId: '9326937498b54140bf913f826a728f2f',
        clientSecret: '449fae03864a4d0d8fbaef419e4f0ccd',
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    }).catch((err) => {
        console.error('Error in authorizationCodeGrant:', err);
        res.sendStatus(400);
    });
});

