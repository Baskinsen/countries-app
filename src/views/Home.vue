<template>
  <div class="dark:bg-[#202C37] px-20 w-full">
    <div class="flex justify-between">
      <SearchBar />
      <Filter />
    </div>

    <Countries class="grid grid-cols-4" />
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
