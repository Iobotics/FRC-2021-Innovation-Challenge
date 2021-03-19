import { FirebaseAuthTypes } from '@react-native-firebase/auth'

class UserManager {
    user: FirebaseAuthTypes.User | null;
    render: (() => any) | undefined;

    constructor() {
        this.user = null;
    }

    setUser(user: FirebaseAuthTypes.User) {
        this.user = user;
        if (this.render)
            this.render();
    }

    addRender(render: () => any) {
        this.render = render;
    }
}

const manager = new UserManager();

export default manager;