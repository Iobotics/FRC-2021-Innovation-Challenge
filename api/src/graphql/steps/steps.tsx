let test = 0;

export function getSteps() {
    return test;
}

export function setSteps(data: any) {
    test = data.amount;
    return test;
}