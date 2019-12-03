<template>
  <a class="border border-red-800 rounded-full px-10 inline-block py-2 text-black hover:text-white hover:border-white">
    <button>
      <slot />
    </button>
  </a>
</template>

<script>
export default {
  name: 'SottileButton',
}
</script>

<style lang="scss" scoped>
  a{
    transition: all 0.3s ease;
  }
</style>