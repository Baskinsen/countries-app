<template>
  <div class="dark:bg-[#202C37] px-10 w-full grid gap-10 overflow">
    <div class="flex flex-col lg:flex-row gap-10 justify-between w-full">
      <SearchBar />
      <Filter />
    </div>
    <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-20 grid-cols-1 w-full">
      <Countries />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Filter from "@/components/Filter.vue";
import SearchBar from "@/components/SearchBar.vue";
import Countries from "@/components/Countries.vue";
export default {
  components: {
    Header,
    Filter,
    SearchBar,
    Countries,
  },
};
</script>

<style></style>
