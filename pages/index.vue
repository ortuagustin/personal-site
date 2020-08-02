<template>
  <div v-if="page.posts">
    <ul class="divide-y-2 divide-blue-500">
      <li v-for="post in page.posts" :key="post.permalink">
        <p>
          <span>{{ post.createdAt | date }} -</span>
          <a :href="post.permalink">{{ post.title }}</a>
        </p>
      </li>
    </ul>

    <a :href="page.pagination.prevLink" v-if="page.pagination.hasPrev">
      ← Prev Page
    </a>
    <a :href="page.pagination.nextLink" v-if="page.pagination.hasNext">
      Next Page →
    </a>
  </div>
</template>

<script>
export const data = {
  layout: 'page',
  injectAllPosts: true,
}

export default {
  props: ['page'],
}
</script>
