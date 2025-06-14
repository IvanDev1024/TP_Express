let tasks = [];
let currentId = 1;

exports.getAll = () => tasks;

exports.getById = (id) => tasks.find(t => t.id === id);

exports.create = (titre, completée) => {
    const task = { id: currentId++, titre, completée };
    tasks.push(task);
    return task;
};

exports.update = (id, titre, completée) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    if (titre !== undefined) task.titre = titre;
    if (completée !== undefined) task.completée = completée;
    return task;
};

exports.delete = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    const [deleted] = tasks.splice(index, 1);
    return deleted;
};
