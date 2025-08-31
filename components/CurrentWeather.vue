<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-1">
        <div class="mt-2">
            <p v-if="current_weather.loaded" class="m-0 font-light text-xl text-center flex items-center justify-center">
                <img :src="current_weather.now.icon" width="50" alt="Weather Icon"/> {{ current_weather.now.data }}
            </p>
            <p class="m-0 font-light text-sm text-center flex items-center justify-center" v-else>Loading weather data...
            </p>
        </div>
        <div class="h-full w-full absolute inset-0 -z-10">
            <img class="world-img" src="../assets/css/mdrg.jpg" alt="Picture of mountains in Los Angeles">
        </div>
    </Card>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const current_weather = ref({
  now: {
    data: '',
    icon: ''
  },
  loaded: false
});

const api_key = '7b19ea84dfa6a542b7c4ae1f3d13ac1b'; //public API key for OpenWeatherMap 

const getCurrentWeather = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&appid=${api_key}&units=imperial`)
    .then((response) => {
      const weather = response.data;
      const fahrenheit = weather.main.temp.toFixed(1);
      current_weather.value.now.data = `${fahrenheit} \xB0F | Los Angeles`;
      current_weather.value.now.icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
      current_weather.value.loaded = true;
    })
    .catch(error => {
      console.log('Error during the weather API call', error);
    });
};

onMounted(() => {
  getCurrentWeather();
});

</script>