<script setup>
import { ref } from "vue";
import { Logo, MenuLeftIcon } from "../../assets/icon";
import NavItems from "./NavItems.vue";

const isCollapse = ref(false);
const bgCollapse = ref(false);

// display full navbar on mouse hover
const handleMouseOver = (state) => {
  if (bgCollapse.value) isCollapse.value = state;
};

// collapse navbar on menu click
const updateCollapse = () => {
  bgCollapse.value = !bgCollapse.value;
};
</script>

<template>
  <div
    :class="`bg-white h-screen relative hidden xl:block w-[260px] flex-shrink-0 transition-all duration-300 ease-in ${
      bgCollapse ? 'w-[70px]' : 'w-[260px]'
    }`"
  >
    <aside
      @mouseover="handleMouseOver(false)"
      @mouseout="handleMouseOver(true)"
      :class="[
        'fixed z-50 h-screen bg-white border transition-all duration-300 ease-in',
        isCollapse ? 'w-[70px]' : 'w-[260px]',
      ]"
    >
      <nav class="xl:block p-4 w-full pb-6">
        <div class="flex items-center justify-between gap-1 pb-2.5 relative">
          <div class="flex flex-grow items-center justify-start gap-1.5">
            <Logo :class="`h-8 w-7 ${isCollapse ? 'translate-x-1' : ''}`" />

            <h1
              :class="[
                'font-bold text-xl transition-all duration-300 ease-in',
                isCollapse ? 'opacity-0 w-0' : 'opacity-100 w-auto',
              ]"
            >
              JoBins
            </h1>
          </div>
          <button class="btn-ghost" @click="updateCollapse">
            <MenuLeftIcon
              :class="[
                'cursor-pointer text-secondary transition-all ease-in duration-150',
                isCollapse ? 'rotate-180 hidden' : '',
                bgCollapse ? 'rotate-180' : '',
              ]"
            />
          </button>
        </div>
        <NavItems :isCollapse="isCollapse" />
      </nav>
    </aside>
  </div>
</template>
