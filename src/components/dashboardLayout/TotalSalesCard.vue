<script setup>
import { ArrowUpIcon, BusinessFianceIcon } from "../../assets/icon";

defineProps({
  sales: Object,
});
</script>

<template>
  <div class="card p-5 flex gap-x-3 justify-between h-full flex-nowrap">
    <div class="w-[38%] flex justify-center items-center">
      <BusinessFianceIcon />
    </div>

    <!------ Vertical line -------------------------------->
    <div class="h-full w-[1px] bg-secondary-light/50 rounded-[2px]" />

    <div class="w-[59%] flex flex-col items-center justify-center">
      <div>
        <h1 class="font-semibold text-lg">{{ sales.title }}</h1>
        <p class="text-secondary-light text-sm">{{ sales.period }}</p>
        <h1 class="font-bold text-3xl pt-4">{{ sales.cost }}</h1>
        <p class="text-sm text-[#1EB564] flex flex-nowrap pt-1">
          <span class="mt-[1px] flex-shrink-0 pr-1"> <ArrowUpIcon /> </span>
          {{ sales?.rate }}
          <span class="text-secondary-light pl-1"> vs last 7 days</span>
        </p>
      </div>
    </div>
  </div>
</template>
