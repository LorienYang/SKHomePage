<template>
  <div class="Card-CopyRight">
    <span>CopyRight &copy; {{ currentYear }} {{webConfig.COPYRIGHT_NAME}}.</span>
    <span>Powered by <a href="https://github.com/LorienYang/SKHomePage">SkHomePage</a></span>
    <Beian/>
  </div>
</template>
<script setup>
import {webConfig} from "/src/web.config.js";
import {ref} from "vue";
const currentYear = ref(new Date().getFullYear())
import Beian from "./Beian.vue";
</script>

<style scoped>
.Card-CopyRight {
  @apply
  text-[#9ca3af]
  pt-[1rem]
  text-[0.75rem]
  flex
  flex-col
}
.Card-CopyRight {
  @media (width >= 48rem /* 768px */) {
    text-align: left;
  }
}
</style>