<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/layout/Sidebar.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <div
    class="relative min-h-screen flex flex-row bg-light text-secondary overflow-hidden"
  >
    <Sidebar />
    <div class="flex-1 w-full px-6 py-4 pb-10 overflow-hidden">
      <Header />
      <RouterView />
    </div>
  </div>
</template>
