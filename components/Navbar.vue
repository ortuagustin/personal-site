<template>
  <nav class="flex items-center justify-between">
    <div>
      <a href="/" class="inline-flex items-center space-x-4">
        <img class="w-10 h-10 rounded-full" :src="require('../src/assets/images/profile.png')" />
        <span
          class="text-2xl font-bold text-gray-600 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-400 hover:border-gray-400"
        >
          Agustín Ortu
        </span>
      </a>
    </div>

    <div class="space-x-2">
      <a
        href="/"
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
