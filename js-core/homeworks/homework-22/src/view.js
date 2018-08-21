class View{
    constructor() {
        this.elements = {
            tasksBlock: document.querySelector('#tasks-block'),
            inputTodo: document.querySelector('#add-task')
        };

        this.render();
    }

    render() {
        const tasksLenght = localStorage.length;
        const tasks = Object.values({...localStorage});
        const identificators = Object.keys({...localStorage});

        if(tasksLenght === 0) {
            this.elements.tasksBlock.innerHTML = ``;
            return;
        }

        const tasksHtmlElements = tasks.reduce((collector, task, i) => {
            const id = identificators[i];
            const elem = /*html*/`
                <div id="${id}" class="task">
                    <div class="wraper-for-task">
                        <input class="mark-done" type="checkbox">
                        <span class="task-name">${task}</span>
                    </div>
                    
                    <div class="wraper-for-btns">
                        <span class="fas fa-edit"></span>
                        <span class="fas fa-times"></span>
                    </div>
                </div>
            `;

            return collector + elem;
        }, '');

        this.elements.tasksBlock.innerHTML = tasksHtmlElements;
    }
}