export function getSteps(setSteps) {
    fetch('localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{ getSteps }"})
      })
        .then(r => r.json())
        .then(data => setSteps(data.getSteps));
}

export function setSteps(setSteps) {
    fetch('localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: "mutation { setSteps }"})
      })
        .then(r => r.json())
        .then(data => setSteps(data.setSteps));
}