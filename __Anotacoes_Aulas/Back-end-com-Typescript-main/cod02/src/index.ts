import app from './app';

const port: number = 3000;

app.listen(port, (error) => {
    console.log(`Serviço executando na porta ${port}`);
});
