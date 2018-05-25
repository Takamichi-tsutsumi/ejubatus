<template>
  <ul>
    <li v-for="item in items" :key="item.content">{{ item.content }}</li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>
