
window.onload = function() {
  const API_KEY = '1dc69a07c545e83623a0d4ca51096867';
  
  // 날씨 정보 가져오기
  function fetchWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&cnt=5&units=metric`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const city = document.querySelector('.world_loc');
        const temper = document.querySelectorAll('.temper');
        const weather = document.querySelectorAll('.weather_icon > img');
        const apparent = document.querySelector('.apparent > p > .data');
        const humi = document.querySelector('.humidity > p > .data');
        const wind = document.querySelector('.wind > p > .data');
        const weatherGradi = document.querySelector('#weather-gradient');

        let weatherId = data.weather[0].id;
        city.textContent = data.name;
        temper[0].textContent = Math.round(data.main.temp);
        temper[1].textContent = Math.round(data.main.temp);

        weather[0].src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weather[1].src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        apparent.innerHTML = Math.round(data.main.feels_like);
        humi.innerHTML = data.main.humidity;
        wind.innerHTML = data.wind.speed;
        
        // 날씨에 따른 배경색 변경
        weatherGradi.classList.remove('cloudy', 'clean', 'rainy', 'sunny');
        if (weatherId === 800) {
          weatherGradi.classList.add('clean');
        } else if (200 <= weatherId && weatherId < 400 || 600 <= weatherId && weatherId < 799 || 801 <= weatherId && weatherId < 900) {
          weatherGradi.classList.add('cloudy');
        } else if (500 <= weatherId && weatherId < 600) {
          weatherGradi.classList.add('rainy');
        } else {
          weatherGradi.classList.add('sunny');
        }
        
        console.log('데이터 확인!', data);
      });
  }

  // 도시 선택 옵션 변경 시 이벤트 처리
  let select = document.getElementById('cityName');
  select.addEventListener("change", function(e) {
    cityName = e.target.value;
    fetchWeather(cityName);
  });
  
  // 현재 위치의 날씨 정보 가져오기
/*   function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeather("your current location");
  } */

  /* function handleGeoError() {
    console.log('현재 위치를 가져올 수 없습니다.');
  } */
  
  // 현재 위치 정보 가져오기
  // navigator.geolocation.getCurrentPosition(onGeoOk, handleGeoError);

  // 오늘의 날짜 정보 표시
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let week = WEEKDAY[today.getDay()].slice(0, 3);
  console.log(WEEKDAY)
  document.querySelector('.days').textContent = week;
  document.querySelector('.month').textContent = month;
  document.querySelector('.year').textContent = year;

  let select_day = document.querySelectorAll('.select_day .day');
  let select_arr = new Array();
  for (i = 0; i < 4; i++) {
    select_arr.push(WEEKDAY[(today.getDay() + i) % 7]);
    // console.log(select_arr, typeof(select_arr))
    select_day[i].textContent = select_arr[i].slice(0,3)
  }
}