<template>
  <div class="grid gap-2">
    <div
      @click="toggle"
      class="dark:text-white p-[10px] shadow-md cursor-pointer dark:bg-[#374858] rounded-md"
    >
      <span>Filter By Region</span>
      <i class="pi pi-angle-down"></i>
    </div>
    <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-to-class="opacity-0"
      leave-from-class="opacity-1"
    >
      <div v-show="open" class="dark:text-[#000] dark:bg-[#374858] rounded-md">
        <ul v-for="(region, index) in regions" :key="index">
          <li>{{ region }}</li>
        </ul>
      </div>
    </transition>
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
