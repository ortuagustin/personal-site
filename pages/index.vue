<template>
  <div class="flex flex-col h-screen antialiased bg-gray-50 ">
    <div class="container py-5 mx-auto space-y-5 divide-y-2">
      <Navbar />

      <div class="px-10 py-5">
        <h1 class="text-3xl text-gray-900">Blog</h1>
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
