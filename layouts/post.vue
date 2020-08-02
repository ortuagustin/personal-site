<template>
  <div>
    <div class="space-y-5">
      <div class="px-16 py-3 bg-white shadow">
        <Navbar />
      </div>

      <div class="px-4 mx-auto md:px-0 max-w-7xl">
        <article class="pb-20 mx-auto prose xl:prose-lg">
          <slot name="default" />
        </article>
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
