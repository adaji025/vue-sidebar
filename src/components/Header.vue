<script>
import { RouterLink } from "vue-router";
</script>

<template>
 <div class="w-full bg-gray-100">
  <div class="flex justify-between items-center h-[50px]">
    header
  </div>
 </div>
</template>

<style>
.links {
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
}

.links a {
  margin: 0 5px;
}
.active {
  font-weight: bold;
  color: green;
  border-bottom: 2px solid green;
}
</style>
