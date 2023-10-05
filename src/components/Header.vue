<template>
  <div class="w-full bg-gray-100">
    <div class="flex justify-between items-center h-[50px]">
      <div class="p-3 hover:bg-gray-50 cursor-pointer">
        <i class="pi pi-bars"></i>
      </div>

      <InputText
        type="text"
        v-model="value"
        placeholder="Search..."
        class="h-[30px] px-2 outline-none rounded-md text-xs"
      />
      <div class="flex items-center gap-2 px-4">
        <div class="font-medium text-md">Admin</div>
        <Avatar
          icon="pi pi-user"
          style="background-color: #9c27b0; color: #ffffff"
          shape="circle"
        />
        <div class="card flex justify-content-center">
          <Button
            type="button"
            label="Toggle"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          <Toast />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
