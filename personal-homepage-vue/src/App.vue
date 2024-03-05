<script setup lang="ts" name="BasicLayoutPage"></script>

<template>
  <RouterView v-if="$route.meta.keepAlive" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path"></component>
    </keep-alive>
  </RouterView>
  <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
</template>

<style scoped></style>
