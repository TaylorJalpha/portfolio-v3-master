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
import { reactive } from 'vue';
import axios from 'axios';

const api_key = 'd1e5357880543038d80b7e2f285f5796';

const current_weather = reactive({
    loaded: false,
    now: {
        data: '',
        icon: ''
    }
})

const getCurrentWeather = () => {
    axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=36.92727&lon=14.71445&appid=' + api_key + '&units=imperial')
        .then((weather) => {
            const fahrenheit = weather.data.current.temp.toFixed(1);
            current_weather.now.data = `${fahrenheit} \xB0F | Los Angeles`;
            current_weather.now.icon = `https://openweathermap.org/img/wn/${weather.data.current.weather[0].icon}@2x.png`;
            current_weather.loaded = true
        })
        .catch(error => {
            console.log('Errore durante la chiamata', error);
        });
}

onMounted(getCurrentWeather)


</script>