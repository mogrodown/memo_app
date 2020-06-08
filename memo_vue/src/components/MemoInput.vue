<template>
  <div>
    <textarea v-model="memo" placeholder="input memo"></textarea>
    <button v-on:click="save">保存</button>
    <p>Memo:{{memo}}</p>
  </div>
</template>

<script>
export default {
  name: 'MemoInput',
  data: () => {
    return {
      memo:''
    }
  },
  methods: {
    save: () => {
      console.log(this.memo)
    }
  }
}
</script>

