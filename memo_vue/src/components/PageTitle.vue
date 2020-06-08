<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style>
  h1{
    margin: 20px;
  }
</style>

