class Controller{
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.addHandlerForTask();
        this.addHandlerForRemove();
        this.addHandlerForUpdate();
    }

    addHandlerForTask() {
        const input = this.view.elements.taskField;
        const addButton = this.view.elements.addButton;

        const handlerForAddButton = () => {
            if(input.value.length < 3) {
                alert('Your length of input is so short');
            }

            this.model.addTodoItem(input.value);
            this.view.render(this.model.data);

            input.value = '';
        }

        addButton.addEventListener('click', handlerForAddButton);
    }

    addHandlerForRemove() {
        const input = this.view.elements.removeField;
        const removeBtn = this.view.elements.removeBtn;

        const handlerForRemoveButton = () => {
            this.model.rempveItem(input.value);
            this.view.render(this.model.data);

            input.value = '';
        };

        removeBtn.addEventListener('click', handlerForRemoveButton)
    }

    addHandlerForUpdate() {
        const oldInput = this.view.elements.updateOld;
        const newInput = this.view.elements.updateNew;
        const updateBtn = this.view.elements.updateBtn;

        const handlerForUpdateButton = () => {
            this.model.updateItem(oldInput.value, newInput.value);
            this.view.render(this.model.data);

            oldInput.value = '';
            newInput.value = '';
        };

        updateBtn.addEventListener('click', handlerForUpdateButton)
    }
}