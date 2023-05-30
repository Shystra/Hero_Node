import express, { Application } from 'express';


const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /old?text=Olá%20Mundo

app.listen(3000, () => console.log( 'Server is running' ))