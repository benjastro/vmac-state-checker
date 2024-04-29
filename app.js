green_states = ["AZ",
    "CA",
    "CO",
    "CT",
    "FL",
    "GA",
    "IA",
    "IN",
    "KY",
    "LA",
    "ME",
    "MO",
    "NH",
    "NJ",
    "NV",
    "NY",
    "OH",
    "TN",
    "TX",
    "VA",
    "WA",
    "WI",]
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!green_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"

    if (green_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED"
        return
    }
    
}