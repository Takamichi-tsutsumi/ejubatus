<template>
  <div class="container">
    <form v-on:submit="onSubmit" id="form">
      <input type="text" name="todo" />
    </form>
    <primary-button type="submit" form="form" class="submit-button">Add</primary-button>
  </div>
</template>

<script>
import PrimaryButton from '~/components/atoms/PrimaryButton.vue'

export default {
  components: {
    PrimaryButton
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$emit('submit', e)
    }
  }
}
</script>


<style>
.container {
  display: flex;
}

.submit-button {
  text-transform: uppercase;
}
</style>
