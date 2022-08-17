/* DEPENDENCIES

    npm install
    npm i vin-validator
    npx eslint --init


*/


const server = require('./api/server')

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
