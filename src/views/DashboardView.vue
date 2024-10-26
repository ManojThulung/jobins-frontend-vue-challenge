<script setup>
import { ref } from "vue";
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

const activeFilter = ref("All Orders");

const updateActiveFilter = (data) => {
  activeFilter.value = data;
};
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
  </div>
</template>
