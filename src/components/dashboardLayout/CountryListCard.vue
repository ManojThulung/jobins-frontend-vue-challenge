<script setup>
import CountUp from "vue-countup-v3";
import { ChevronUpIcon } from "../../assets/icon";

defineProps({
  countries: Object,
});
</script>

<template>
  <div class="card p-5 flex flex-col gap-2 flex-nowrap h-full justify-center">
    <div
      v-for="country in countries"
      :key="country.name"
      class="flex items-center gap-2"
    >
      <div class="flex items-center gap-3">
        <img
          :src="country.image"
          alt="country.name"
          class="h-8 w-8 rounded-full object-cover"
        />
        <div class="w-24">
          <h2 class="font-semibold text-[15px]">
            {{ country.totalNumber }}
          </h2>
          <h2 class="text-[13px] text-secondary-light">
            {{ country.name }}
          </h2>
        </div>
      </div>
      <div
        class="flex-grow relative bg-green-400 rounded-[6px] overflow-hidden"
      >
        <div class="h-[6px] rounded-[6px] w-full bg-primary-light" />
        <div
          class="animate-slide-right h-[6px] rounded-[6px] bg-primary absolute top-[50%] translate-y-[-50%]"
          :style="{ width: country.rate + '%' }"
        />
      </div>
      <div
        :class="[
          'flex w-[76px] justify-end items-center text-[15px] font-semibold',
          country.isIncrease ? 'text-[#EA5455]' : 'text-[#28C76F]',
        ]"
      >
        <ChevronUpIcon
          :class="[country.isIncrease ? '' : 'rotate-180', 'mr-1']"
        />
        <p class="flex flex-nowrap flex-shrink-0 gap-1">
          <count-up
            :startVal="0"
            :duration="2"
            :scrollSpyOnce="true"
            :decimalPlaces="1"
            :endVal="country.rate"
          />
          %
        </p>
      </div>
    </div>
  </div>
</template>
