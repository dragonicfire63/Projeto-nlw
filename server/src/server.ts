// GET - Buscar informações
// POST - Cadastrar informações
// PUT - Atualizar informações de uma entidade
// PATCH - Atualizar uma informação única de uma entidade
// DELETE - Deletar uma informação

import express from 'express'
import { routes } from './routes';
import cors from 'cors'

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log('HTTP server running!');
});