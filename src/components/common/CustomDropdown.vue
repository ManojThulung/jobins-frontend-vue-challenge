<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { ChevronUpIcon } from "../../assets/icon";

const props = defineProps({
  options: Array,
  selected: [String, Number],
  setSelected: Function,
  className: {
    type: String,
    default: "w-44",
  },
});
</script>

<template>
  <div
    :class="`rounded-[5px] shadow-sm h-11 bg-white ${props.class} relative text-[13px] sm:text-[15px] border-[2px] border-transparent hover:border-secondary-light/40 duration-150 ease-in`"
  >
    <Listbox v-model="props.selected">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full text-secondary-light rounded-[5px] cursor-pointer bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ selected }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 z-20 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="option in options"
              :key="option.id"
              :value="option"
              as="div"
              @click="setSelected(option.name)"
              class="group duration-150 ease-in mx-1 flex hover:bg-[#F3F4F8] cursor-pointer items-center gap-1.5 rounded-[5px] py-1.5 px-3 select-none data-[focus]:bg-[#F3F4F8]"
            >
              <div class="text-[13px] sm:text-sm text-secondary-light">
                {{ option.name }}
              </div>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
