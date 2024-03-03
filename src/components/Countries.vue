<template>
  <div
    v-for="(country, index) in countries"
    :key="index"
    class="w-full text-[#000000] dark:text-white dark:bg-[#374858] rounded-md shadow-md relative mb-10 md:mb-0"
  >
    <router-link
      :to="'/' + country.alpha3Code"
      class="h-full grid grid-rows-[50%_50%] pb-10 grid-cols-none gap-5 bg-[#ffffff] dark:bg-[#374858] rounded-md"
    >
      <img
        :src="country.flags.svg"
        :alt="country.name"
        class="w-full h-full m-0 p-0 rounded-t-md object-cover object-center"
      />
      <div class="px-5">
        <h2 class="font-semibold text-[18px] mb-[10px]">{{ country.name }}</h2>
        <ul class="text-[16px] font-semibold">
          <li>
            Population:
            <span class="dark:text-slate-300 font-[200]">{{
              country.population
            }}</span>
          </li>
          <li>
            Region:
            <span class="dark:text-slate-300 font-[200]">{{
              country.region
            }}</span>
          </li>
          <li>
            Capital:
            <span class="dark:text-slate-300 font-[200]">{{
              country.capital ? country.capital : "none"
            }}</span>
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import data from "../assets/data";
const countries = ref(null);
// export default {
//   data() {
//     return {
//       countries: null,
//     };
//   },
//   beforeMount() {
//     this.countries = data;
//   },

onBeforeMount(() => {
  countries.value = data;
});
</script>

<style></style>
