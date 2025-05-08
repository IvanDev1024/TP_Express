const express = require ('express');
const path = require('path');
 const indexRouter = require('./routes/index');
 const usersRouter = require('./routes/users');
 const timeRouter = require('./routes/time');



const appli = express();
const port = 3003;

appli.set('view engine', 'ejs');

appli.use(express.static(path.join(__dirname, 'public')));

// Routes
appli.use('/', indexRouter);
appli.use('/users', usersRouter)
appli.use('/time', timeRouter);


appli.get('/',(req,res) => {
    res.send('Page principale');
})

appli.listen(port, () => {
    console.log(`Notre server est démarré sur http://localhost:${port}`)
})