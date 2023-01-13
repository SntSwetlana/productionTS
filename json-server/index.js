const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }
    return res.status(403).json({ message: 'AUTH ERROR 2' });
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
    console.log('we are here');
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR 1' });
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
