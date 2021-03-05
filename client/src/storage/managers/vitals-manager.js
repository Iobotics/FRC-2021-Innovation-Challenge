import { Systrace } from 'react-native';
import { FileSystem } from 'react-native-unimodules';
import SQLManager from '../SQL-manager';

class VitalsManager extends SQLManager {

    constructor() {
        super("vitals");
        this.createStepsTable();
    }

    async createStepsTable() {
        let database = await this.open();

        if (database) {
            database.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS Vitals (
                    id INT PRIMARY KEY,
                    steps INT,
                    timestamp BIGINT 
                );`)
            }).catch(err => console.warn(err));
        }
    }

    getSteps() {
        let promise = new Promise((resolve, reject) => {
            this.open.then(database => {
                database.transaction((tx) => {
                    tx.executeSql(`SELECT steps FROM Vitals SORT BY timestamp;`, [], (tx, results) => {
                        console.log(results.rows.length);
                        return results.rows.length > 0 ? resolve(results.rows.item(0)) : reject("No data in SQL Database!");
                    })
                }).catch(err => console.warn(err));
            })
        });

        return promise;
    }

    async inputSteps(steps) {
        let database = await this.open();

        if (database) {
            database.transaction((tx) => {
                tx.executeSql(`INSERT INTO Vitals (steps, timestamp) VALUES (${steps}, ${Date.now()});`)
            }).catch(err => console.warn(err));
        }
    }

}

const vitalsManager = new VitalsManager();

export default vitalsManager;