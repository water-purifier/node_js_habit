const db = require("../models");

module.exports = (app)=>{
    app.get('/', (req, res) => {
        res.redirect('/users');
        // return res.send('good choice!');
    });

    app.post('/users', async (req, res) => {
        const {username, password} = req.body;
        const user = await db['user'].create({
            username: username,
            password: password,
        });
        if (!user) {
            return res.status(404).json({"error": "error for create user"})
        }
        return res.json(user);
    })

    app.get('/users', async (req, res) => {
        const users = await db['user'].findAll();
        return res.json(users);
    });

    app.get('/users/:id', async (req, res) => {
        const id = req.params.id;
        const user = await db['user'].findByPk(id);
        return res.json(user);
    })
}