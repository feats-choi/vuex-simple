<template>
  <div>
    <button @click="increment">👏</button>
    <span>{{ claps }}</span>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'clap',
    computed: mapState({
      claps: state => state.claps
    }),
    methods: mapMutations([
      'increment'
    ])
  }
</script>

<style scoped>
  span {
    font-size: 25px;
    margin-left: 15px;
  }
  button {
    padding: 10px 15px 5px 15px;
    background: rgba(0,0,0,0);
    font-size: 32px;
    cursor: pointer;
    border: 1px solid #41B883;
    border-radius: 100%;
    transition: box-shadow .5s;
  }
  button:focus{
    outline:none;
  }
  button:hover{
    box-shadow: 0 0 15px #41B883;
  }
</style>
