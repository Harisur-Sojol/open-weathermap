
const input = document.getElementById('input');
const loader = document.getElementById('loader');
loader.style.display = 'none'

const loadWeather = () => {
    if(input.value.length == 0){
        alert('You have to search by city name!!!')
    }
    else if(input.value.length > 0){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ef76b89369ed75505fa4bb3a995f48a0&units=metric`
        loader.style.display = 'block'
        fetch(url)
            .then(res => res.json())
            .then(data => {displayWeather(data)
                loader.style.display = 'none'
            })
    }
}

const displayWeather = (data) => {
    console.log(data)
    input.value = '';
    const showResult = document.getElementById('show-result')
    showResult.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="weather-status text-white text-center">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
        </div>
  `
    showResult.appendChild(div)
}
