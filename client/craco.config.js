const fs = require('fs');

module.exports = {

    devServer: {

        https: {

            //key: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/privkey.pem'),
            //cert: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/fullchain.pem'),

            key: fs.readFileSync("/etc/letsencrypt/live/jamshare.ddns.net/privkey.pem"),
            cert: fs.readFileSync("/etc/letsencrypt/live/jamshare.ddns.net/fullchain.pem"),
            ca: fs.readFileSync('/etc/letsencrypt/live/jamshare.ddns.net/chain.pem'),
        },

        host: "0.0.0.0",
        port: 3000,
    }

};