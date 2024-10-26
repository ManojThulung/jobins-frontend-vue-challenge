<script setup>
import { defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Logo, MenuLeftIcon } from "../../assets/icon";
import NavItems from "./NavItems.vue";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  toggleOpen: Function,
});
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-10" @close="toggleOpen">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-300"
              enter-from="-translate-x-full"
              enter-to="-translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leave-from="-translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel
                transition
                class="pointer-events-auto w-screen max-w-[260px] transform transition duration-300 ease-in-out data-[closed]:-translate-x-full sm:duration-300"
              >
                <div
                  class="flex h-full w-[260px] flex-col overflow-y-auto bg-white shadow-xl p-4 pb-6"
                >
                  <div
                    class="flex items-center justify-between gap-1 pb-2.5 relative"
                  >
                    <div
                      class="flex flex-grow items-center justify-start gap-1.5"
                    >
                      <Logo class="h-8 w-7" />

                      <h1
                        class="font-bold text-xl transition-all duration-300 ease-in opacity-100 w-auto"
                      >
                        JoBins
                      </h1>
                    </div>
                    <button class="btn-ghost" @click="toggleOpen">
                      <MenuLeftIcon
                        class="cursor-pointer text-secondary transition-all ease-in duration-150"
                      />
                    </button>
                  </div>

                  <NavItems :isCollapse="false" :setOpen="toggleOpen" />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
