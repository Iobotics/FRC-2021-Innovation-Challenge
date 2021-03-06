import SQLManager from '../SQL-manager';

class VitalsManager extends SQLManager {

    constructor() {
        super("vitals");

        //this.deleteTable();

        this.createStepsTable();
    }

    async deleteTable() {
        let database = await this.open();

        if (database) {
            database.transaction((tx) => {
                tx.executeSql(`DROP TABLE Vitals;`);
            })
        }
    }

    async createStepsTable() {
        let database = await this.open();

        if (database) {
            database.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS Vitals (
                    id INT PRIMARY KEY,
                    steps INT,
                    money INT,
                    timestamp BIGINT 
                );`)
            }).catch(err => console.warn(err));
        }
    }

    async getSteps(setSteps) {
        let database = await this.open();

        console.log("Test");
        database.transaction((tx) => {
            tx.executeSql(`SELECT * FROM Vitals ORDER BY timestamp DESC;`, [], (tx, results) => {
                console.log(results.rows.item(0));
                setSteps(results.rows.length > 0 ? results.rows.item(0).steps: 0);
            })
        }).catch(err => console.warn(err));
    }

    async getMoney(setSteps) {
        let database = await this.open();

        console.log("Test");
        database.transaction((tx) => {
            tx.executeSql(`SELECT money FROM Vitals ORDER BY timestamp DESC;`, [], (tx, results) => {
                console.log(results.rows.item(0).steps);
                setSteps(results.rows.length > 0 ? results.rows.item(0).steps: 0);
            })
        }).catch(err => console.warn(err));
    }

    async inputValues(steps, money) {
        let database = await this.open();

        console.log(steps)

        if (database) {
            database.transaction((tx) => {
                tx.executeSql(`INSERT INTO Vitals (steps, money, timestamp) VALUES (${steps}, ${money}, ${Date.now()});`)
            }).catch(err => console.warn(err));
        }
    }

}

const vitalsManager = new VitalsManager();

export default vitalsManager;