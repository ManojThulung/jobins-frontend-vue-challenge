<script setup>
import { ref } from "vue";
// import CustomDropDown from '../dashboardLayout/CustomDropDown.vue';
import Pagination from "./Pagination.vue";
import CustomDropdown from "./CustomDropdown.vue";
import Test from "./Test.vue";
import Notification from "../layout/Notification.vue";

const perPageOptions = [
  { id: 10, name: 10 },
  { id: 20, name: 20 },
  { id: 50, name: 50 },
];

const perPage = ref(10);

const props = defineProps({
  tableHeader: {
    type: Array,
    required: true,
  },
});

const setPerPage = (value) => {
  perPage.value = value;
};
</script>

<template>
  <div class="card py-2">
    <div class="card relative overflow-x-auto text-[13px] sm:text-[15px]">
      <table class="min-w-[1080px] w-full bg-white">
        <thead>
          <tr class="border-b-[1px] border-b-primary-light">
            <th
              v-for="(header, index) in tableHeader"
              :key="header"
              :class="[
                'py-3 px-3 text-[13px] font-[500] uppercase text-start text-secondary-light',
                index === 0 ? 'pl-6' : '',
                index === tableHeader.length - 1 ? 'pr-6' : '',
              ]"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <slot></slot>
        </tbody>
      </table>
    </div>

    <!-- TABLE FOOTER -------------------------------------------------------- -->
    <div class="p-4 text-secondary-light flex justify-between flex-wrap gap-2">
      <div class="hidden sm:flex items-center gap-2">
        <p>Showing</p>
        <CustomDropdown
          :options="perPageOptions"
          :selected="perPage"
          :setSelected="setPerPage"
          className="w-20 border-[2px] !border-primary-light !shadow-none"
        />
        <p>of 50</p>
      </div>

      <div class="flex-1">
        <Pagination />
      </div>
    </div>
  </div>
</template>
