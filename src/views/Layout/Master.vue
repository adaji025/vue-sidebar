<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
      <Header />
      <div class="h-[calc(100vh-50px)] bg-blue-200">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";
</script>
<style></style>
