<template>
  <nav class="flex items-center justify-between">
    <div>
      <a
        href="/"
        class="inline-flex items-center space-x-4 text-base font-medium leading-6 text-blue-700"
      >
        <Logo class="w-11 h-11" />
        <span
          class="pb-1 text-2xl font-bold text-gray-600 transition duration-150 ease-in-out border-b border-transparent hover:text-gray-500 hover:border-gray-500"
        >
          Agustín Ortu
        </span>
      </a>
    </div>

    <div class="space-x-2">
      <a
        href="#"
        class="inline-block text-base font-medium leading-6 text-blue-700 transition duration-150 ease-in-out border-b border-transparent hover:text-blue-500 hover:border-blue-500"
      >
        Blog
      </a>

      <a
        href="/resume"
        class="inline-block text-base font-medium leading-6 text-blue-700 transition duration-150 ease-in-out border-b border-transparent hover:text-blue-500 hover:border-blue-500"
      >
        CV
      </a>
    </div>
  </nav>
</template>

<script>
import Logo from '../src/assets/icons/logo.svg'

export default {
  components: { Logo },
}
</script>
