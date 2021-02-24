"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMoney = exports.getMoney = void 0;
let test = 0;
function getMoney() {
    return test;
}
exports.getMoney = getMoney;
function setMoney(data) {
    test = data.amount;
    return test;
}
exports.setMoney = setMoney;
//# sourceMappingURL=money.js.map