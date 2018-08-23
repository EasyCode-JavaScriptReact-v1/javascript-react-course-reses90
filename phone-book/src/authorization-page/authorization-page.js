class AuthorizationPage{
    constructor(store) {
        this.setStateAuthorization = (listeners) => {
            const {setState} = store;
            const initializeState = {
                stateName: 'AUTHORIZATION',
                activePage: this.render()
            };
            setState(initializeState);
            window.history.pushState(initializeState.activePage, initializeState.stateName);
        }
    }

    render() {
        return /*html*/`
        <div class="authorization-block">
            <h1 class="au-title">Authorization</h1>
            <div class="wraper-for-authorization-inputs">
                <input class="au-input" type="text" placeholder="Login">
                <button id="log-in" class="au-btn btn btn-primary">Log in</button>
            </div>
        </div>
        `;
    }
}

export {AuthorizationPage};