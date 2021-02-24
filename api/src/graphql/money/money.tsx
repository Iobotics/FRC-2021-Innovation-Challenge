let test = 0;

export function getMoney() {
    return test;
}

export function setMoney(data: any) {
    test = data.amount;
    return test;
}