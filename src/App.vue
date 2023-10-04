<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
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
