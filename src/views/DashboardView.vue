<script setup>
import { onMounted, ref, watch } from "vue";
import CountryListCard from "../components/dashboardLayout/CountryListCard.vue";
import CustomerDetailCard from "../components/dashboardLayout/CustomerDetailCard.vue";
import TotalProfitCard from "../components/dashboardLayout/TotalProfitCard.vue";
import TotalSalesCard from "../components/dashboardLayout/TotalSalesCard.vue";
import {
  CountriesReport,
  CustomerDetail,
  OrderTableHeader,
  StatusOptions,
  TotalProfitReprot,
  TotalSalesReprot,
} from "../constant";
import CustomTable from "../components/common/CustomTable.vue";
import { getOrderList } from "../lib/dataService";
import CustomDropdown from "../components/common/CustomDropdown.vue";
import CustomDatepicker from "../components/common/CustomDatepicker.vue";
import { SearchIcon } from "../assets/icon";

const activeFilter = ref("All Orders");
const searchOrder = ref("");
const orderList = ref([]);

const updateActiveFilter = (data) => {
  activeFilter.value = data;
};

// get table list data
const fetchOrderList = () => {
  const response = getOrderList(activeFilter.value, searchOrder.value);
  orderList.value = response;
};

onMounted(fetchOrderList);

//updates when activeFilter and searchOrder gets change
watch([activeFilter, searchOrder], fetchOrderList);
</script>

<template>
  <div class="animate-slide-up relative flex flex-col gap-4 w-full">
    <!-- TOP Statistic sections ---------------->
    <section class="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-8 gap-4">
      <div class="col-span-1 sm:col-span-3">
        <TotalSalesCard :sales="TotalSalesReprot[0]" />
      </div>
      <div class="col-span-1 sm:col-span-2">
        <TotalProfitCard :profit="TotalProfitReprot[0]" />
      </div>
      <div class="col-span-1 sm:col-span-5 lg:col-span-3">
        <CountryListCard :countries="CountriesReport" />
      </div>
    </section>

    <!-- CUSTOMER DETAIL & SHIPPING INFO section ------------------------------- -->
    <section>
      <CustomerDetailCard
        :customer="CustomerDetail"
        :activeFilter="activeFilter"
        :updateActiveFilter="updateActiveFilter"
      />
    </section>

    <!-- Total Order Products Table list ------------------------------------------------ -->
    <section class="flex flex-col gap-4">
      <!-- FILTER SECTION ------------------------------------------  -->
      <div class="w-full flex gap-4 flex-wrap justify-between">
        <div class="flex gap-4">
          <CustomDropdown
            :options="StatusOptions"
            :selected="activeFilter"
            :setSelected="updateActiveFilter"
          />

          <div class="relative">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              v-model="searchOrder"
              class="w-full xs:w-[250px] text-secondary-light outline-none pl-3 py-2 text-[15px] pr-7 rounded-[6px] shadow-sm duration-150 ease-in transition-all hover:border-secondary-light/30 border-[2px] border-white"
            />
            <SearchIcon
              class="absolute top-[50%] right-[6px] translate-y-[-50%] cursor-pointer duration-150 ease-in text-secondary-light hover:text-secondary"
            />
          </div>
        </div>
        <div>
          <CustomDatepicker placeHolder="Filter by date range" />
        </div>
      </div>

      <!-- TABLE Section ------------------------------------------------ -->
      <div>
        <CustomTable :tableHeader="OrderTableHeader">
          <template v-if="orderList.length >= 1">
            <tr
              v-for="row in orderList"
              :key="row.id"
              class="border-b-[1px] border-b-primary-light transition-all ease-in duration-150 hover:bg-secondary-light/5"
            >
              <template
                v-for="(cell, index) in Object.values(row)"
                :key="index"
              >
                <td
                  v-if="index === 5"
                  :class="[
                    'p-3 text-[13px]',
                    cell === 'Completed' ? 'text-[#28C76F]' : 'text-[#FFC600]',
                  ]"
                >
                  {{ cell }}
                </td>
                <td
                  v-else-if="index === 6"
                  class="p-3 text-[13px] text-primary cursor-pointer duration-150 ease-in transition-all hover:text-primary/70"
                >
                  {{ cell }}
                </td>
                <td
                  v-else
                  :class="[
                    'p-3 text-[13px]',
                    index === 0 ? 'pl-6' : '',
                    index === Object.values(row).length - 1 ? 'pr-6' : '',
                  ]"
                >
                  {{ cell }}
                </td>
              </template>
            </tr>
          </template>
          <template v-else>
            <tr
              class="border-b-[1px] border-b-primary-light transition-all ease-in duration-150 hover:bg-secondary-light/5"
            >
              <td
                colspan="6"
                class="p-3 text-[13px] text-center text-secondary-light"
              >
                No data found
              </td>
            </tr>
          </template>
        </CustomTable>
      </div>
    </section>
  </div>
</template>
