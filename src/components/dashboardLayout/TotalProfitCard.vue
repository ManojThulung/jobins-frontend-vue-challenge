<script setup>
import { ArrowUpIcon, YenIcon } from "../../assets/icon";

defineProps({
  profit: Object,
});
</script>

<template>
  <div class="card p-5 flex flex-col items-center h-full justify-center">
    <div>
      <div class="flex gap-5">
        <div class="flex-shrink-0">
          <YenIcon />
        </div>
        <div class="flex-grow">
          <h1 class="font-semibold text-lg">{{ profit.title }}</h1>
          <p class="text-secondary-light text-sm">{{ profit.period }}</p>
        </div>
      </div>
      <h2 class="font-bold text-3xl pt-4">{{ profit.cost }}</h2>
      <p class="text-sm text-[#1EB564] flex flex-nowrap pt-1">
        <span class="mt-[1px] flex-shrink-0 pr-1"> <ArrowUpIcon /> </span>
        {{ profit.rate }}
        <span class="text-secondary-light pl-1"> vs last 7 days</span>
      </p>
    </div>
  </div>
</template>
