<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>

    <div class="p-6">
        <div class="flex space-x-4 mb-4">
            <Link
                :href="route('home')"
                class="text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Homepage</Link
            >
            <Link
                :href="route('about')"
                class="text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About</Link
            >
            <Link
                :href="route('contact')"
                class="text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Contact</Link
            >
        </div>

        <h1>This is: {{ $page.props.title }}</h1>
        <button @click="increment()" class="bg-blue-300 px-3 py-2 cursor-pointer rounded shadow-sm">Count is {{ count }}</button>
        <table v-if="posts.data.length > 0" class="mt-3 table-fixed">
          <thead>
            <tr>
              <th class="border-gray-400 border text-left px-2 font-bold">#</th>
              <th class="border-gray-400 border text-left px-2 font-bold">User Id</th>
              <th class="border-gray-400 border text-left px-2 font-bold">Title</th>
              <th class="border-gray-400 border text-left px-2 font-bold">Body</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts.data" :key="post.id">
              <td class="border-gray-400 border text-left px-2">{{ post.id }}.</td>
              <td class="border-gray-400 border text-left px-2">{{ post.user_id }}</td>
              <td class="border-gray-400 border text-left px-2">{{ post.title }}</td>
              <td class="border-gray-400 border text-left px-2">{{ post.body }}</td>
            </tr>
          </tbody>
        </table>
        <VueTailwindPagination
        :current="posts.current_page"
        :total="posts.total"
        :per-page="per_page"
        @page-changed="posts.current_page = $event"

        text-before-input="Go to page"
        text-after-input="Go"/>
    </div>
</template>
<script>
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

export default {
  components: {
    VueTailwindPagination,
  },

  props: {
    posts: Object,
  },
  
  data() {
    return {
      count: 0,
    }
  },

 
  methods: {
    increment() {
      this.count++
    }
  },

 
  mounted() {
    console.log(this.posts);
    console.log(`The initial count is ${this.count}.`);
  }
}
</script>