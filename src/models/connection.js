const postgres = require('postgres');

require('dotenv').config();

const connection = postgres({
host:       process.env.postgres_host,
username:   process.env.postgres_username,
password:   process.env.postgres_password,
database:   process.env.postgres_database
});

module.exports = connection;