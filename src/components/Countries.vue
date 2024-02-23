<template>
  <div
    v-for="(country, index) in countries"
    :key="index"
    class="w-full gird grid-cols-[25%_25%_25%_25%] text-white"
  >
    <router-link to="/:id">
      <div class="cursor-pointer">
        <img :src="country.flags.svg" :alt="country.name" />
        <div>
          <h2>{{ country.name }}</h2>
          <ul>
            <li>population: {{ country.population }}</li>
            <li>Region: {{ country.region }}</li>
            <li>Capital: {{ country.capital }}</li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import data from "../assets/data";
export default {
  data() {
    return {
      countries: null,
    };
  },
  beforeMount() {
    this.countries = data;
    console.log(this.countries[0]);
  },
};
</script>

<style></style>
../assets/data.js
