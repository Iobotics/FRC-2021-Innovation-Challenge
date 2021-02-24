import fetchGQL from './common/fetch';

export function getStepsGQL() {
    return fetchGQL({query: "{ getSteps }"})
        .then(data =>  data.data.getSteps)
}

export function setStepsGQL(amount) {
  return fetchGQL({query: "mutation SetSteps($amount: Int!) { setSteps(amount: $amount) }", variables: { amount }})
      .then( data => {console.log(data); return data})
      .then(data =>  data.data.setSteps)
}