const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3005;

app.use(bodyParser.json());

let tasks = []; // Stockage temporaire en mémoire
let currentId = 1;

app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API des tâches !');
});


// GET /tasks - Récupérer toutes les tâches
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/:id - Récupérer une tâche spécifique
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
});

// POST /tasks - Créer une nouvelle tâche
app.post('/tasks', (req, res) => {
    const { title, completed = false } = req.body;
    const task = { id: currentId++, title, completed };
    tasks.push(task);
    res.status(201).json(task);
});

// PUT /tasks/:id - Mettre à jour une tâche existante
app.put('/tasks/:id', (req, res) => {
    const { title, completed } = req.body;
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
    
    res.json(task);
});

// DELETE /tasks/:id - Supprimer une tâche
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: "Tâche non trouvée" });

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
