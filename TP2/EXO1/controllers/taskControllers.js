const taskModel = require('../Models/taskModels');

exports.getAllTasks = (req, res) => {
    res.json(taskModel.getAll());
};

exports.getTaskById = (req, res) => {
    const task = taskModel.getById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
};

exports.createTask = (req, res) => {
    const { titre, completée = false } = req.body;
    const task = taskModel.create(titre, completée);
    res.status(201).json(task);
};

exports.updateTask = (req, res) => {
    const { titre, completée } = req.body;
    const updatedTask = taskModel.update(parseInt(req.params.id), titre, completée);
    if (!updatedTask) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(updatedTask);
};

exports.deleteTask = (req, res) => {
    const deleted = taskModel.delete(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(deleted);
};
