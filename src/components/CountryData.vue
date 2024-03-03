<template>
  <div v-if="countryData" class="dark:bg-[#202C37] px-5 md:px-20 lg:px-20">
    <button
      @click="goBack"
      class="dark:bg-[#374858] dark:text-white shadow-sm shadow-slate-700 rounded-md py-2 px-10 flex gap-3 justify-between items-center"
    >
      <i class="pi pi-arrow-left"></i>
      <span>Back</span>
    </button>
    <div class="dark:text-white mt-10 grid lg:grid-cols-[40%_60%] gap-10">
      <img
        :src="countryData.flags.svg"
        :alt="countryData.name + 'Flag'"
        class="w-full h-full m-0 p-0 object-center object-cover"
      />
      <div class="grid gap-5">
        <h1 class="text-xl font-bold">{{ countryData.name }}</h1>
        <div class="flex flex-col md:flex-row lg:flex-row gap-10">
          <ul class="grid gap-3 font-semibold">
            <li>
              Native Name:
              <span class="font-normal dark:text-slate-300">{{
                countryData.nativeName
              }}</span>
            </li>
            <li>
              Population:
              <span class="font-normal dark:text-slate-300">{{
                countryData.population
              }}</span>
            </li>
            <li>
              Region:
              <span class="font-normal dark:text-slate-300">{{
                countryData.region
              }}</span>
            </li>
            <li>
              Sub Region:
              <span class="font-normal dark:text-slate-300">{{
                countryData.subregion
              }}</span>
            </li>
            <li>
              Capital:
              <span class="font-normal dark:text-slate-300">{{
                countryData.capital
              }}</span>
            </li>
          </ul>
          <ul class="grid gap-2 font-semibold">
            <li
              v-for="(domain, index) in countryData.topLevelDomain"
              :key="index"
              class="p-0"
            >
              Top Level Domain:
              <span class="p-0 font-normal dark:text-slate-300">{{
                domain
              }}</span>
            </li>
            <li
              v-for="(currency, index) in countryData.currencies"
              :key="index"
              class="p-0"
            >
              Currencies:
              <span class="p-0 font-normal dark:text-slate-300">{{
                currency.name
              }}</span>
            </li>
            <li class="p-0">
              Languages:
              <span
                v-for="(language, index) in countryData.languages"
                :key="index"
              >
                <span class="p-0 font-normal dark:text-slate-300">
                  {{ language.name }}</span
                >
                <span v-if="index !== countryData.languages.length - 1"
                  >,
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div class="lg:mt-10 md:flex lg:flex gap-2">
          <span class="font-semibold">Border Countries: </span>
          <ul v-for="(border, index) in neighbs" :key="index" class="flex">
            <li
              class="py-1 px-3 dark:bg-[#374858] dark:text-slate-300 rounded-sm shadow-sm shadow-slate-400 text-sm"
            >
              {{ border }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import getNeigbs from "@/composables";
import data from "../assets/data";
import { useRouter } from "vue-router";

const router = useRouter();
const countries = ref(null);
const countryData = ref(null);
const neighbs = ref([]);
const goBack = () => {
  router.go(-1); // Go back to the previous page
};

onMounted(() => {
  countries.value = data;
  countries.value.forEach((country) => {
    if (router.currentRoute.value.params.id == country.alpha3Code) {
      countryData.value = country;
    }
  });
  getNeigbs(countryData.value); // Call the function to populate `neighbs`
});

function getNeigbs(countryData) {
  neighbs.value = [];
  for (let countries of data) {
    if (countryData.borders.includes(countries.alpha3Code)) {
      neighbs.value.push(countries.name);
    }
  }
  return neighbs.value;
}
</script>

<style></style>
