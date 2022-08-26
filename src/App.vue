<template>
  <div id="app">
    <main>
      <div class="search-box"> 
        <input type="text" class="search-bar" placeholder="Search..."/>
      </div>

      <div class="weather-wrap">
        <div class="location-box">
          <p class="location">Northampton, UK</p>
          <em class="date">Monday, 20 January 2020</em>
        </div>

        <div class="weather-box">
          <p class="temp">9°C</p>
          <em class="weather">Rain</em>
        </div>
     </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      api_key: "e0de73858b1615a63b9ff402184ba1cc",
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  font-family:'Montserrat', sans-serif;
}

#app {
  background-image:url("./assets/cold-bg.jpg");
  background-size:cover;
  background-position:bottom;
  transition:0.4s;
}

main {
  min-height:100vh;
  padding:25px;
  background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}


.search-box {
  width:100%;
  margin-bottom:30px;
}

.search-box .search-bar {
  display:block;
  width:100%;
  padding:50px;

  color:#313131;
  font-size:20px;

  appearance:none;
  border:none;
  outline:none;
  background:none;

  box-shadow:0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.5);
  border-radius:0px 16px 0px 16px;
  transition:0.4s;
}

.search-box .search-bar:focus {
  box-shadow:0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.75);
  border-radius:16px 0px 16px 0px;
}

.location-box {
  display:flex;
  flex-direction:column;
  margin:30px 0px;
}

.location-box .location {
  color:#FFF;
  font-size:32px;
  font-weight:500;
  text-align:center;
  text-shadow:1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color:#FFF;
  font-size:32px;
  font-weight:500;
  text-align:center;
}

.weather-box {
  text-align:center;
}

.weather-box .temp {
  display:flex;
  flex-direction:column;
  padding:10px 25px;
  color:#FFF;
  font-size:102px;
  font-weight:900;

  text-shadow:3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius:16px;
  margin:30px 0px;

  box-shadow:3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color:#FFF;
  font-size:48px;
  font-weight:700;
  text-shadow:3px 6px rgba(0, 0, 0, 0.25);
}

</style>
