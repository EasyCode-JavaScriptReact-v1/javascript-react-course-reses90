class View{
    constructor(initialState) {
        this.elements = {
            addButton: document.querySelector('#add-btn'),
            listItems: document.querySelector('.list'),
            taskField: document.querySelector('#input-task'),
            removeField: document.querySelector('#remove-field'),
            removeBtn: document.querySelector('#remove-btn'),
            updateOld: document.querySelector('#update-old-item'),
            updateNew: document.querySelector('#update-new-item'),
            updateBtn: document.querySelector('#update-btn')
        };

        this.render(initialState);
    }

    render(newData) {
        const listItems = newData.reduce((colector, item) => {
            return colector + `<li>${item}</li>`;
        }, '');

        this.elements.listItems.innerHTML = listItems;
    }
}