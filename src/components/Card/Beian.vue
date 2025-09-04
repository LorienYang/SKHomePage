<script setup>
import {Beian} from "/src/web.config.js";
</script>

<template>
  <div class="Beian" v-if="Beian.BEIAN_STATUS">
    <span class="ICP" v-if="Beian.ICP"><a href="https://beian.miit.gov.cn/">{{Beian.ICP_TEXT}}</a></span>
    <span class="GWAB flex-row justify-center items-center flex" v-if="Beian.GA">
      <img src="/pic/img/GWAB.png" alt="公安备案图标" class="gongan-icon" /><a :href="`https://beian.mps.gov.cn/#/query/webSearch?code=${Beian.GA_NUM}`">{{Beian.GA_TEXT}}</a></span>
    <span class="MOE-ICP" v-if="Beian.MOE_ICP"><a :href="`https://icp.gov.moe/?keyword=${Beian.MOE_ICP_NUM}`">{{Beian.MOE_ICP_TEXT}} </a></span>
  </div>
  
</template>

<style>
.Beian {
  @apply
  flex
  justify-center
  items-center
  gap-[5px]
  text-[0.7rem]
}
.Beian {
  @media (max-width: 639px) {
    flex-direction: column;
  }
}
.gongan-icon {
  @apply
  w-[15px]
  h-[16px]
}
</style>