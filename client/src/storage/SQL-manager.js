import SQLite from 'react-native-sqlite-storage';

class SQLManager {
    
    constructor(databaseName) {
        SQLite.enablePromise(true);

        this.databaseName = databaseName;
    }

    open() {
        return SQLite.openDatabase({
            name: `${this.databaseName}.db`,
            location: 'default' /* Not Backed Up */
        }, () => console.log(`Database ${this.databaseName} opened.`), (e) => console.error(`SQL Error ${e}`))
    }
    
}

export default SQLManager;