(() => {
    const initializeState = [
        'learn JS',
        'learn MVC',
        'read book OOP'
    ];

    const model = new Model(initializeState);
    const view = new View(initializeState);
    const controller = new Controller(model, view);
})()