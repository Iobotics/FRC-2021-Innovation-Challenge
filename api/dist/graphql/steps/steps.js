"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSteps = exports.getSteps = void 0;
let test = 0;
function getSteps() {
    return test;
}
exports.getSteps = getSteps;
function setSteps(data) {
    test = data.amount;
    return test;
}
exports.setSteps = setSteps;
//# sourceMappingURL=steps.js.map