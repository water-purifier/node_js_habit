const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const Router = require('./routes');

async function launchServer() {
    const app = express();

    await db.sequelize.sync();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    Router(app);

    app.listen(3000);
}

launchServer();