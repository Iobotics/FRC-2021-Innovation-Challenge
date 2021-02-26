import fetchGQL from './common/fetch';

export function getMoneyGQL() {
    return fetchGQL({query: "{ getMoney }"})
        .then(data =>  data.data.getMoney)
        .catch(err => console.error(err));
}

export function setMoneyGQL() {
    return fetchGQL({query: "mutation SetMoney($amount: Int) { setMoney(amount: $amount) }", variables: { amount }})
        .then( data => {console.log(data); return data})
        .then(data =>  data.data.setMoney)
        .catch(err => console.error(err));
}