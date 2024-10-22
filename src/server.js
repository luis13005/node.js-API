const app = require('./app')

require('dotenv').config();

const port = process.env.port || 3010;
// Inicia o servidor
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));