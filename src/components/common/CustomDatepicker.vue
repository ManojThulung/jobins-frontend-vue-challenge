<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

const dateRange = ref("");

const props = defineProps({
  placeHolder: {
    type: String,
    default: "Pick date range",
  },
});
</script>

<template>
  <div class="relative w-full xs:w-[260px] custom-datepicker">
    <VueDatePicker
      v-model="dateRange"
      range
      :enable-time-picker="false"
      :placeholder="placeHolder"
      :action-row="{
        showSelect: true,
        showCancel: true,
        showNow: false,
        showPreview: false,
      }"
    />
  </div>
</template>

<style scoped>
.custom-datepicker {
  --dp-font-family: "Public Sans", sans-serif;
  --dp-border-radius: 6px;
  --dp-input-padding: 8px 30px 8px 12px;
  --dp-action-buttons-padding: 3px 5px;
  --dp-cell-padding: 4px;
  --dp-cell-size: 30px;

  --dp-font-size: 15px;
  --dp-preview-font-size: 0.8rem;
  --dp-time-font-size: 0.3rem;
}
</style>

<style>
.custom-datepicker .dp__calendar {
  @apply text-[13px];
}

.custom-datepicker .dp__pointer {
  @apply w-full border-2 border-transparent hover:border-secondary-light/50 outline-[2px] duration-150 ease-in shadow-sm rounded-[5px] text-secondary/80;
}
</style>
