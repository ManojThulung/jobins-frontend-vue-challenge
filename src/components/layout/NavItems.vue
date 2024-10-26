<script setup>
import { defineProps } from "vue";
import { NavbarData } from "../../constant/navigation";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
  setOpen: {
    type: Function,
    default: null,
  },
});
</script>

<template>
  <div
    v-for="navbar in NavbarData"
    :key="navbar.section"
    class="text-secondary-light"
  >
    <div>
      <h2
        :class="[
          'uppercase transition-all text-nowrap',
          isCollapse
            ? 'w-0 h-0 p-0 text-[0px]'
            : 'opacity-100 w-auto h-auto pb-2 pt-4 px-2.5 text-[11px]',
        ]"
      >
        {{ navbar.section }}
      </h2>
      <ul v-for="nav in navbar.child" :key="nav.name">
        <RouterLink :to="nav.path">
          <li
            :class="[
              'flex flex-nowrap gap-2 items-center py-2 text-[15px] px-2 rounded-[6px] transition-all ease-in-out duration-300 hover:bg-[#F3F4F8]/60 text-ellipsis',
              nav.path === route.path ? 'text-secondary bg-[#F3F4F8]' : '',
            ]"
          >
            <component :is="nav.icon" class="flex-shrink-0" />
            <span
              :class="[
                'mt-[2px] duration-300 ease-in transition-all whitespace-nowrap overflow-hidden text-ellipsis',
                isCollapse ? 'opacity-0 w-0' : 'opacity-100 w-auto',
              ]"
            >
              {{ nav.name }}
            </span>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
