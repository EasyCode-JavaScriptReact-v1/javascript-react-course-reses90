class Model{
    constructor() {}

    id() {
        const order = localStorage.length;
        return order + '_' + Math.random().toString(36).substr(2, 9);
    }

    setTask(taskName) {
        localStorage.setItem(`${this.id()}`, taskName);
    }

    removeTask(taskId) {
        localStorage.removeItem(taskId);
    }

    editTask(taskId, newValue) {
        localStorage[taskId] = newValue;
    }
}