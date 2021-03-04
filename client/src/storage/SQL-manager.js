import SQLite from 'react-native-sqlite-storage';

class SQLManager {

    open() {
        SQLite.enablePromise(true);

        SQLite.openDatabase({
            name: 'data.db',
            location: 'default' /* Not Backed Up */
        }, () => console.log("success"), (e) => console.error(e))
    }
}

const manager = new SQLManager();
export default manager;