<template>
  <div v-if="page.posts">
    <div class="pt-2 pb-6 space-y-4 bg-white lg:pb-10">
      <div class="relative max-w-lg mx-auto lg:px-6 xl:px-0 lg:max-w-7xl">
        <div class="grid gap-5 divide-y-2 divide-gray-200 lg:divide-y-0 lg:gap-16 lg:grid-cols-2">
          <article
            v-for="(post, i) in page.posts"
            class="flex flex-col justify-between space-y-3 bg-white"
            :class="{ 'pt-5 lg:pt-0': i > 0 }"
            :key="i"
          >
            <div class="space-y-1">
              <p class="text-xs leading-4 text-gray-500 md:text-sm md:leading-5">
                {{ post.createdAt | date }}
              </p>

              <a
                :href="post.permalink"
                class="inline-block text-gray-900 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                <h3 class="text-base font-semibold leading-6 md:text-xl md:leading-7">
                  {{ post.title }}
                </h3>
              </a>
            </div>

            <div class="flex flex-col flex-1">
              <p class="prose" v-html="post.excerpt"></p>
            </div>

            <div>
              <a
                :href="post.permalink"
                class="text-base font-semibold leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              >
                Ver post
              </a>
            </div>
          </article>
        </div>
      </div>

      <nav
        class="flex items-center justify-between px-4 space-y-4 sm:px-0"
        :class="{ 'border-t border-gray-200': page.pagination.hasPrev || page.pagination.hasNext }"
      >
        <a
          v-if="page.pagination.hasPrev"
          :href="page.pagination.prevLink"
          class="inline-flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          <ArrowNarrowLeft class="w-5 h-5 mr-3 text-gray-400" />
          <span>Anterior</span>
        </a>

        <a
          v-if="page.pagination.hasNext"
          :href="page.pagination.nextLink"
          class="inline-flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-400"
        >
          <span>Siguiente</span>
          <ArrowNarrowRight class="w-5 h-5 ml-3 text-gray-400" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import ArrowNarrowLeft from 'heroicons/solid/arrow-narrow-left.svg'
import ArrowNarrowRight from 'heroicons/solid/arrow-narrow-right.svg'

export const data = {
  layout: 'page',
  injectAllPosts: true,
}

export default {
  props: ['page'],

  components: { ArrowNarrowLeft, ArrowNarrowRight },
}
</script>
