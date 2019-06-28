<template>
  <section class="post-content">
    <section v-html="post.body" />
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
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
    color: var(--v-accent-base)
  p code 
    padding: 2px 4px
    font-size: 90%
    color: var(--v-accent-base)
    background-color: #000000
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
