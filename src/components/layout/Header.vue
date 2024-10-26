<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { MenuIcon } from "../../assets/icon";
import { formatHeaderText } from "../../lib/helper";
import MobileSidebar from "./MobileSidebar.vue";
import Profile from "./Profile.vue";
import Notification from "./Notification.vue";

const showSidebar = ref(false);
const route = useRoute();

const headerTitle = formatHeaderText(route.path);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>

<template>
  <header class="flex justify-between items-center pb-3">
    <h1 class="text-2xl font-bold items-center flex gap-2">
      <button
        @click="toggleSidebar"
        class="btn-ghost bg-white shadow-sm block xl:hidden"
      >
        <MenuIcon class="scale-x-[-1]" />
      </button>
      {{ headerTitle }}
    </h1>
    <div class="flex gap-4 items-center">
      <Notification />
      <Profile />
    </div>

    <MobileSidebar :isOpen="showSidebar" :toggleOpen="toggleSidebar" />
  </header>
</template>
