<template>
  <div>
    <section>
		<div>
			<div> {{ detailList }}</div>
			<h1> {{detailList.movieNm}} </h1>
			<div id="bright" v-for="actorsList in actors" :key="actorsList.item">
			<h4> {{actorsList.cast}} | {{actorsList.peopleNm}} </h4>
			</div>			
		</div>
	</section>
  </div>
</template>

<script>
import { movieDetail } from '../api/index.js'

export default {
	data(){
		return {
			detailList : [],
			actors : [],
		}
	},
	created(){
		console.log(this.$route.params.id);
		// var toDay = new Date().toJSON().slice(0,10).replace(/-/g,'');
		var movieCd = this.$route.params.id;
		var vm = this;
		movieDetail(movieCd)
		.then(function(response){
			console.log(response);
			var movieInfoResult = JSON.parse(response.request.response);
			console.log(movieInfoResult);
			movieInfoResult = movieInfoResult['movieInfoResult'].movieInfo;
			console.log(movieInfoResult);
			vm.detailList = movieInfoResult;
			vm.actors = movieInfoResult.actors;
		})
		.catch(function(error){
		console.log(error);
		})
  }
}
</script>

<style>

</style>