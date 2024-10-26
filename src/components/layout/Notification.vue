<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { BellIcon } from "../../assets/icon";
import { NotificationList } from "../../constant";

const notificationNumber = NotificationList.length;
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="btn-ghost relative">
        <p
          class="bg-[#EA5455] text-[13px] h-[18px] w-[18px] flex items-center justify-center rounded-full absolute font-semibold text-white top-0 right-0"
        >
          {{ notificationNumber }}
        </p>
        <BellIcon />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div
          class="px-5 py-3 flex text-[15px] items-center justify-between flex-nowrap border-[1px] border-b-secondary-light/5"
        >
          <h2 class="text-secondary">Notifications</h2>
          <p
            class="text-secondary-light duration-150 ease-in transition-all hover:text-secondary underline text-[11px] cursor-pointer"
          >
            View all
          </p>
        </div>
        <div
          v-for="notify in NotificationList"
          :key="notify.title"
          class="text-secondary-light text-[13px]"
        >
          <MenuItem
            as="div"
            class="py-1.5 px-5 hover:bg-secondary-light/5 cursor-pointer border-[1px] border-b-secondary-light/5"
          >
            <h2
              class="font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {{ notify.title }}
            </h2>
            <p class="block whitespace-nowrap overflow-hidden text-ellipsis">
              {{ notify.description }}
            </p>
            <p class="pt-[2px] text-secondary-light/70">{{ notify.time }}</p>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
