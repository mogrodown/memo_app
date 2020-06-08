<template>
  <div>
    <textarea v-model="memo2" placeholder="input memo"></textarea>
    <!-- <button v-on:click="save">保存</button> -->
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    memo2: String
  }
  /*,
  methods: {
    save() {
      //console.log('memo = ', this.memo);
    }
  }
  */
}
</script>

<style>
  textarea{
    width:30%;
    height:20%;
  }
</style>

