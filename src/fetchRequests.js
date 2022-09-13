const marioData = fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/daily_selects', {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" }
})
    .then(response => response.json())
    .then(data => console.log('onfetch', data))

export default { marioData }