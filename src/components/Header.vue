<template>
  <header
    class="dark:bg-[#374858] text-[#000] px-5 lg:px-20 py-5 flex justify-between text-[14px] shadow-md mb-10 w-full"
  >
    <h1 class="dark:text-white font-semibold text-[18px]">
      Where in the world?
    </h1>
    <div
      class="cursor-pointer font-semibold flex justify-between items-center"
      @click="darkMode"
    >
      <i :class="dark" class="pi dark:text-white"></i>
      <span v-if="dark === 'pi pi-sun'" class="ml-[10px] dark:text-white"
        >Light Mode</span
      >
      <span v-else class="ml-[10px] dark:text-white">Dark Mode</span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dark: "pi pi-moon",
    };
  },
  methods: {
    darkMode() {
      document.documentElement.classList.toggle("dark");
      this.dark = document.documentElement.classList.contains("dark")
        ? "pi pi-sun"
        : "pi pi-moon";
      localStorage.setItem("dark", document.documentElement.classList);
    },
  },
};
</script>

<style></style>
