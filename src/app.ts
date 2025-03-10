
import express, { Request, Response } from 'express';
import router from './modules/task/http/routes';


const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota GET para a raiz
app.use('/api/v1', router);

// Defina a porta onde o servidor Express vai rodar
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
