class Controller{
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.init();
    }

    init() {
        this.applyListenersForInput();
        this.applyListenersForTaskBlock();
    }

    applyListenersForInput() {
        const input = this.view.elements.inputTodo;

        const handlerForInput = (e) => {
            if(e.keyCode == 13) {
                const valueLenght = input.value.length;
                const VALUE = input.value;

                if(valueLenght < 3) {
                    alert('So short task name, please text real task');
                    return;
                }

                input.value = '';
                this.model.setTask(VALUE);
                this.view.render();
            }    
        }

        input.addEventListener('keydown', handlerForInput);
    }

    applyListenersForTaskBlock() {
        const tasksBlock = this.view.elements.tasksBlock;

        const handlerForTasksBlock = (e) => {
            if(e.target.classList.contains('mark-done')) {
                const value = e.target.nextElementSibling.textContent;
                const span = e.target.nextElementSibling;

                e.target.checked === true 
                    ? span.outerHTML = /*html*/`<strike class="task-name">${value}</strike>`
                    : span.outerHTML = /*html*/`<span class="task-name">${value}</span>`
            }

            if(e.target.classList.contains('fa-edit')) {
                const ID = e.target.parentElement.parentElement.id;
                
                const NEW_VALUE = prompt('New task name', '');

                if(NEW_VALUE.length < 3) {
                    alert('So short task name, please text real task');
                    return;
                }

                this.model.editTask(ID, NEW_VALUE);
                this.view.render();
            }

            if(e.target.classList.contains('fa-times')) {
                const ID = e.target.parentElement.parentElement.id;
                this.model.removeTask(ID);
                this.view.render();
            }
        }
        
        tasksBlock.addEventListener('click', handlerForTasksBlock);
    }
}