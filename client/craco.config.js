const fs = require('fs');

module.exports = {

    devServer: {

        /*
        https: {

            //key: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/privkey.pem'),
            //cert: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/fullchain.pem'),

            key: fs.readFileSync("//wsl.localhost/Ubuntu/home/thund/.local/share/mkcert/rootCA-key.pem"),
            cert: fs.readFileSync("//wsl.localhost/Ubuntu/home/thund/.local/share/mkcert/rootCA.pem"),
        },
        */

        host: "jamshare.ddns.net",
        //host: "192.168.1.11",
        port: 80,
    }

};