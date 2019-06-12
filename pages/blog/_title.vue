<template>
  <v-container>
    <v-layout>
      <section class="post-content">
        <h1>{{ post.title }}</h1>
        <section v-html="post.body" />
      </section>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  asyncData({ params, error, store, payload }) {
    if (payload) {
      // eslint-disable-next-line no-console
      console.log(payload)
      return { post: payload }
    } else {
      // eslint-disable-next-line no-console
      console.log(params)
      return { post: store.getters['blog/blogPostBySlug'](params.title) }
    }
  }
}
</script>

<style lang="stylus">
.post-content
  color: var(--v-secondary-base)
  h1,h2,h3,h4,h5
    color: var(--v-secondary-darken1)
    font-weight: 600
    margin-top: 1.5em
    margin-bottom: 1em
  ul, ol
    margin-bottom: 1.25em
    li
      margin-bottom: 0.25em
  p
    font-size: 1.25em
    line-height: 1.5
    margin-bottom: 1.25em
    font-weight: 400
  img
    max-width: 100%
    height: auto
  figcaption 
    font-style: italic
    text-align: center
    color: #ccc
  p code 
    padding: 2px 4px
    font-size: 90%
    color: #c7254e
    background-color: #f9f2f4
    border-radius: 4px
  pre
    display: block
    padding: 1em
    margin: 0 0 2em
    font-size: 1em
    line-height: 1.4
    word-break: break-all
    word-wrap: break-word
    color: #333333
    background-color: #f5f5f5
  a
    color: var(--v-secondary-darken3)
  a:hover,a:visited
    color: var(--v-secondary-darken1)
</style>
