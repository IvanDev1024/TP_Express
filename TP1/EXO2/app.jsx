const express = require ('express');
const appli = express();
const port = 3003;

appli.get('/',(req,res) => {
    res.send('Page principale');
})

appli.listen(port, () => {
    console.log(`Notre server est démarré sur https://localhost:${port}`)
})