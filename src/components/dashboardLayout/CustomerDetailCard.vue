<script setup>
import CountUp from "vue-countup-v3";

defineProps({
  customer: Object,
  activeFilter: String,
  updateActiveFilter: Function,
});
</script>

<template>
  <div class="card h-full md:grid">
    <div class="flex justify-between flex-wrap gap-x-3 gap-y-4 p-5 h-full">
      <div
        class="flex h-full items-center justify-center w-full sm:w-[45%] md:w-[30%] gap-3 flex-shrink-0"
      >
        <div
          class="aspect-square h-16 w-auto rounded-full border-[6px] border-[#7367F0] bg-[#B0A9F7]"
        ></div>
        <div>
          <h1 class="text-lg font-semibold leading-tight">
            {{ customer.name }}
          </h1>
          <p class="text-[15px] text-secondary-light leading-tight">
            {{ customer.email }}
          </p>
        </div>
      </div>

      <!-- Vertical line ----------  -->
      <div
        class="hidden md:block h-full w-[1px] bg-secondary-light/50 rounded-[2px]"
      />

      <div
        class="w-full sm:w-[50%] md:w-[32%] text-[13px] flex sm:justify-center"
      >
        <div>
          <h2 class="font-[500] uppercase text-secondary-light pb-1.5">
            PERSONAL INFORMATION
          </h2>
          <div
            class="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1.5"
          >
            <p class="w-28">Contact Number</p>
            <p class="flex-grow font-semibold">
              {{ customer.personal_info.contact_no }}
            </p>
          </div>
          <div
            class="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1.5"
          >
            <p class="w-28">Date of Birth</p>
            <p class="flex-grow font-semibold">
              {{ customer.personal_info.dob }}
            </p>
          </div>
          <div
            class="flex flex-wrap gap-x-2 sm:gap-x-0 lg:gap-x-2 items-center py-1.5"
          >
            <p class="w-28">Member Since</p>
            <p class="flex-grow font-semibold">
              {{ customer.personal_info.join_member_date }}
            </p>
          </div>
        </div>
      </div>

      <!-- Vertical line ----------  -->
      <div
        class="hidden md:block h-full w-[1px] bg-secondary-light/50 rounded-[2px]"
      />

      <div
        class="w-full md:w-[30%] text-[13px] max-w-[800px] border-t-[1px] border-t-secondary-light/50 md:border-none pt-3 md:pt-0"
      >
        <div class="flex justify-between flex-col sm:flex-row md:flex-col">
          <div class="">
            <h2 class="font-[500] uppercase text-secondary-light pb-1.5">
              SHIPPING ADDRESS
            </h2>
            <div class="flexitems-center">
              <p class="py-1.5">{{ customer.shipping_address }}</p>
            </div>
          </div>
          <div class="py-3 flex gap-6 justify-between md:max-w-[320px]">
            <div>
              <h2 class="text-2xl font-bold">
                <count-up
                  :startVal="0"
                  :duration="2"
                  :scrollSpyOnce="true"
                  :endVal="customer.order_detail.total_order"
                />
              </h2>
              <p class="text-secondary-light">Total Order</p>
            </div>
            <div>
              <h2 class="text-2xl font-bold">
                <count-up
                  :startVal="0"
                  :duration="2"
                  :scrollSpyOnce="true"
                  :endVal="customer.order_detail.completed"
                />
              </h2>
              <p class="text-secondary-light">Completed</p>
            </div>
            <div>
              <h2 class="text-2xl font-bold">
                <count-up
                  :startVal="0"
                  :duration="2"
                  :scrollSpyOnce="true"
                  :endVal="customer.order_detail.canceled"
                />
              </h2>
              <p class="text-secondary-light">Canceled</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul
      class="flex px-5 items-baseline justify-start text-[15px] text-secondary-light"
    >
      <li
        @click="updateActiveFilter('All Orders')"
        :class="[
          'px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary',
          activeFilter === 'All Orders'
            ? 'text-primary border-b-[2px] border-b-primary'
            : '',
        ]"
      >
        All Orders
      </li>
      <li
        @click="updateActiveFilter('Completed')"
        :class="[
          'px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary',
          activeFilter === 'Completed'
            ? 'text-primary border-b-[2px] border-b-primary'
            : '',
        ]"
      >
        Completed
      </li>
      <li
        @click="updateActiveFilter('Canceled')"
        :class="[
          'px-5 pb-4 cursor-pointer duration-150 ease-in hover:text-primary',
          activeFilter === 'Canceled'
            ? 'text-primary border-b-[2px] border-b-primary'
            : '',
        ]"
      >
        Canceled
      </li>
    </ul>
  </div>
</template>
