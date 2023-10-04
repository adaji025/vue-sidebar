<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import cars from "../data.json";

const route = useRoute();
const { id } = route.params;

const car = ref(null);
onBeforeMount(() => {
  car.value = cars.find((c) => c.id === parseInt(id));
});
</script>

<template>
  <div class="container">
    <h1>The Car</h1>
    <div class="flex gap-2">
      <div class="font-bold">Make:</div>
      <div>{{ car.make }}</div>
    </div>
    <div class="flex gap-2">
      <div class="font-bold">Body:</div>
      <div>{{ car.body }}</div>
    </div>
    <div class="flex gap-2">
      <div class="font-bold">price:</div>
      <div>{{ car.price }}</div>
    </div>
    <div class="flex gap-2">
      <div class="font-bold">year:</div>
      <div>{{ car.year }}</div>
    </div>
  </div>
</template>

<style></style>
