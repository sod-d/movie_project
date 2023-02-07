<template>
  <div>
    <section>
		<div>
			<!-- <div> {{ detailList }}</div> -->
			<h1> {{detailList.movieNm}} </h1>
			<h3> {{detailList.audits[0].watchGradeNm}} </h3>
			<h3>장르</h3>
			<!-- <div id="bright" v-for="genresList in genres" :key="genresList.item"> -->
				|<span v-for="genresList in genres" :key="genresList.item">{{genresList.genreNm}} | </span>
			<!-- </div> -->
			<h3> 출연 배우</h3>
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
			genres : []
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
			vm.genres = movieInfoResult.genres;
		})
		.catch(function(error){
		console.log(error);
		})
  }
}
</script>

<style>

</style>