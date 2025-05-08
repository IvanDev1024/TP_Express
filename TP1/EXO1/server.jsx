const express = require ('express');
const app = express();
const port = 3001;

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/date',(req,res) => {
    const now = new Date();
  res.send(`Date et heure actuelles : ${now.toLocaleString()}`);
})

app.listen(port, () => {
    console.log(`Notre serveur écoute sur http://localhost:${port}`);
});