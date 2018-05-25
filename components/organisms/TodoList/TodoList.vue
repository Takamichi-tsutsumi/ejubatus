<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.content }}</li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>
