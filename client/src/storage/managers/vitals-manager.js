import SQLManager from '../SQL-manager';

class VitalsManager extends SQLManager {

    constructor() {
        super("vitals");
    }

}

const vitalsManager = new VitalsManager();

export default vitalsManager;