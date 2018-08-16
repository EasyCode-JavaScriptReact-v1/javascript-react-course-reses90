class Model{
    constructor(initialState) {
        this.data = initialState;
    }

    addTodoItem(newItem) {
        if(!newItem) return;

        this.data.push(newItem);
    }

    rempveItem(itemToRemove) {
        const itemInData = this.data.indexOf(itemToRemove);
        if(itemInData === -1) return alert('Such item is not defined');

        this.data = this.data.filter(task => task !== itemToRemove);
    }

    updateItem(oldItem, newItem) {
        const itemInData = this.data.indexOf(oldItem);

        if(itemInData !== -1) {
            this.data[itemInData] = newItem;
        }

    }
}