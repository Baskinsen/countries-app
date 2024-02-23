<template>
  <div>
    <div @click="toggle" class="text-white p-[10px] shadow-md cursor-pointer">
      <span>Filter By Region</span>
      <i class="pi pi-angle-down"></i>
    </div>
    <div class="text-[#000] bg-[hsl(209, 23%, 22%)]">
      <ul v-for="(reg, index) in region" :key="index">
        <li>{{ reg }}</li>
        <!-- <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      console.log(this.open);
    },
  },
};
</script>

<style></style>
