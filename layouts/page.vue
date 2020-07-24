<template>
  <div>
    <div class="space-y-5">
      <div class="px-16 py-3 bg-white shadow">
        <Navbar />
      </div>

      <div class="px-4 mx-auto md:px-0 max-w-7xl">
        <slot name="default" :page="page"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  props: ['page'],

  components: { Navbar },
}
</script>
