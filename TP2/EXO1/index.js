const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');
const path = require('path');

const app = express();
const PORT = 3005;

app.use(bodyParser.json());

// Servir les fichiers statiques dans le dossier public
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('Page d\'Accueil')
})

// Routes de l’API
app.use('/tasks', tasksRoutes);

// Page HTML quand on visite /tasks
app.get('/tasks', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tasks.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
