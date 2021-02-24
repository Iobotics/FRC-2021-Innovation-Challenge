export default (params) => fetch('http://10.0.2.2:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(params)
  })
.then(r => r.json())
.catch(err => console.error(err));