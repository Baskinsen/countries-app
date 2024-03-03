<template>
  <div class="grid gap-2 w-fit lg:w-[20%] xl:w-[14%]">
    <div
      @click="toggle"
      class="dark:text-white px-[20px] py-[10px] shadow-md cursor-pointer dark:bg-[#374858] rounded-md flex gap-5 justify-between items-center"
    >
      <span>Filter By Region</span>
      <i class="pi pi-angle-down"></i>
    </div>
    <transition name="fade">
      <div
        v-show="open"
        class="bg-[#fff] dark:text-white p-5 dark:bg-[#374858] rounded-md absolute translate-y-12 z-10 w-[187px] shadow-md"
      >
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
