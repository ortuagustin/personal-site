<template>
  <div class="flex flex-col h-screen font-sans antialiased bg-cool-gray-100 ">
    <div class="space-y-5">
      <div class="px-16 py-5 border-b ">
        <Navbar />
      </div>

      <div class="mx-auto max-w-7xl">
        <div class="prose max-w-none">
          <slot name="default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>
