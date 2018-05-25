<template>
  <button v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style>
button {
  text-transform: uppercase;
  padding: 0.4rem;
}
</style>

