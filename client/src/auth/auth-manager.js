class UserManager {
    constructor() {
        this.user = null;
    }

    setUser(user) {
        this.user = user;
        this.render.callback();
    }

    addRender(render) {
        this.render = render;
    }
}

const manager = new UserManager();

export default manager;