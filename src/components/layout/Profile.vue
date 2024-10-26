<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { LogoutIcon, ProfileIcon, SettingIcon } from "../../assets/icon";
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="btn-ghost relative bg-[#7367F0] hover:!bg-primary !h-9 !w-9"
      >
        <div
          class="h-3 w-3 bg-[#28C76F] absolute bottom-0 right-0 border-[2px] border-white rounded-full"
        />
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
        class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div class="text-secondary-light text-[13px]">
          <MenuItem
            as="div"
            class="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 class="font-semibold flex items-center gap-2">
              <span>
                <ProfileIcon class="h-[18px] w-auto" />
              </span>
              Profile
            </h2>
          </MenuItem>
          <MenuItem
            as="div"
            class="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 class="font-semibold flex items-center gap-2">
              <span>
                <SettingIcon class="h-[18px] w-auto" />
              </span>
              Setting
            </h2>
          </MenuItem>
          <MenuItem
            as="div"
            onClick="{handleLogout}"
            class="py-2 px-5 hover:bg-secondary-light/5 cursor-pointer"
          >
            <h2 class="font-semibold flex items-center gap-2">
              <span>
                <LogoutIcon class="h-[18px] w-auto" />
              </span>
              Logout
            </h2>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
