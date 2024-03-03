<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    scrollBarColorClass() {
      return this.isDarkMode ? "darkScrollBar" : "lightScrollBar";
    },
  },
  beforeMount() {
    // if (localStorage.getItem("dark") == 'dark') {
    //   this.isDarkMode
    // }
    localStorage.getItem("dark") == "dark" ? this.DarkMode == true : false;
  },
};
</script>

<template
  :class="{
    dark: isDarkMode,
    'light:bg-[#fafafa] dark:bg-[#202C37]': true,
  }"
  class="scrollbar"
>
  <div :class="[scrollBarColorClass]" class="bg-[#fafafa] dark:bg-[#202C37]">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 12px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent; /* You can customize this if needed */
}

.dark .scrollbar-dark::-webkit-scrollbar-thumb {
  background-color: #374858;
  border-radius: 30px;
}

.light .scrollbar-light::-webkit-scrollbar-thumb {
  background-color: var(--color-lightScrollbar);
}
</style>
