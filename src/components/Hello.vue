<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>{{hello}}</h2>
		
		<input v-model="newText">
		<button @click="$store.dispatch('dispatchAction', newText)">Dispatch</button>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
  name: 'hello',
	computed:mapState({
		hello: state => state.hello.world,
	}),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			newText: ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
		color:red;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>