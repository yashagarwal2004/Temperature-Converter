let input = document.getElementById('formGroupExampleInput');
let option = document.getElementById('option-choosed');
let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click',()=>{
    if(option.value == 1)
    {
        let ans = ((input.value - 32) * 5) / 9;
        result.textContent = "The temperature in Degree Celsius is " + ans + " °C."
    }
    else if(option.value == 2)
    {
        let ans = (input.value * 1.8) + 32;
        result.textContent = "The temperature in Degree Fahrenheit is " + ans + " °F."
    }
    else
    {
        result.textContent = "Please select an option."
    }
})