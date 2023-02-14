<template>
  <div>
    <div class="movie_card" id="bright" v-for="movieList in list" :key="movieList.item">
      <!-- <router-link v-bind:to="'/movie' + movieList.movieCd"> -->
        <div class="info_section">
          <div class="movie_header">
          <router-link v-bind:to="`/MovieDetailView/${movieList.movieCd}`">
            <!-- <div>{{movieList}}</div> -->
            <!-- <div>{{movieList.imgUrl}}</div> -->
            <img class="locandina" style="height: auto;width: 100%;" :src='`${movieList.imgUrl}`' />
          </router-link>
            <div class="card_title">{{ movieList.movieNm }}</div>
            <div class="card_openDt">{{movieList.openDt}}</div>
            <button @click="onClickLink(movieList.movieCd)">자세한 정보 보러 가기</button>
          </div>
          <!-- <div class="movie_social">
            <ul>
              <li><i class="material-icons">share</i></li>
              <li><i class="material-icons"></i></li>
              <li><i class="material-icons">chat_bubble</i></li>
            </ul>
          </div> -->
        </div>
        
        <div class="blur_back bright_back"></div>
    </div>
    <div v-for="imgUrl in imgList" :key="imgUrl">
      <img class="locandina"  :src='`${imgUrl}`' />
    </div>
    <!-- <ul>
      <li > {{ movieList.movieNm }}</li>
    </ul> -->
  </div>
</template>

<script>
import { boxofficeList,movieSearch } from '../api/index.js'
export default {
  data(){
    return {
      list : []
      ,imgList : []
    }
  },
  created() {
    // var toDay = new Date().toJSON().slice(0,10).replace(/-/g,'');
    var toDay = "20221001"
    var vm = this;
    var movieNmArr = [];
    var movieImgArr = [];
    var cnt = 0;
    boxofficeList(toDay)
    .then(function(response){
      console.log(response);
      var boxOfficeResult = JSON.parse(response.request.response);
      boxOfficeResult = boxOfficeResult['boxOfficeResult'];
      vm.list = boxOfficeResult.dailyBoxOfficeList;
      //asysnc await 처리하기
      for(var i=0;i<vm.list.length; i++){
        movieNmArr.push(vm.list[i].movieNm)
        console.log(vm.list[i].movieNm);
        movieSearch(vm.list[i].movieNm)
        .then(function(response){
            var lastBuildDate = JSON.parse(response.request.response);
            console.log(lastBuildDate);
            movieImgArr.push(lastBuildDate.items[0].image);
            vm.imgList = movieImgArr;
            vm.list[cnt].imgUrl = lastBuildDate.items[0].image;
            cnt++;
            
        })
        .catch(function(error){
          console.log(error);
        });
      }
    })
    .catch(function(error){
      console.log(error);
    })

    // var movieNm = "스파이더맨: 노 웨이 홈";
    // // var movieNm = $(".card_title").text();
    // var vm2 = this;
    // var itemImg = "";
    // movieSearch(movieNm)
    // .then(function(response){
    //     console.log("** movieSearch()**");
    //     var lastBuildDate = JSON.parse(response.request.response);
    //     console.log(JSON.parse(response.request.response));
    //     console.log(lastBuildDate.items[0].image);
    //     itemImg = lastBuildDate.items[0].image;
    //     // vm2.itemImg = lastBuildDate.items[0].image;
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
  },
  methods : {
    onClickLink : function(movieCd){
      window.open('http://kobis.or.kr/kobis/business/mast/mvie/searchMovieList.do?dtTp=movie&dtCd=' + movieCd);
    }
  } 
}
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
}

html, body{
  margin: 0;
  background: white;
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.link{
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}

.movie_card{
  display: inline-block;
  width: 190px;
  height: 392px;
  margin: 2rem;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0,0,0, 0.5);
  &:hover{
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0,0,0, 0.5);
    transition: all 0.4s;
  }
  .info_section{
    position: relative;
    width: 100%;
    height: 100%;
	  background-blend-mode: multiply;
    z-index: 2;
    border-radius: 10px;
    .movie_header{
      position: relative;
      padding: 25px;
      height: 40%;
      h1{
        color: black;
        font-weight: 400;
      }
      h4{
        color: #555;
        font-weight: 400;
      }
      .minutes{
        display: inline-block;
        margin-top: 15px;
        color: #555;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.05);
      }
      .type{
        display: inline-block;
        color: #959595;
        margin-left: 10px;
      }
      .locandina{
        position: relative;
        float: left;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
      }
    }
    .movie_desc{
      padding: 25px;
      height: 50%;
      .text{
        color: #545454;
      }
    }
    .movie_social{
      height: 10%;
      padding-left: 15px;
      padding-bottom: 20px;
      ul{
        list-style: none;
        padding: 0;
        li{
          display: inline-block;
          color: rgba(0,0,0,0.3);
          transition: color 0.3s;
          transition-delay: 0.15s;
          margin: 0 10px;
          &:hover{
            transition: color 0.3s;
            color: rgba(0,0,0,0.7);
          }
          i{
            font-size: 19px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .blur_back{
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%; right: 0;
    background-size: cover;
    border-radius: 11px;
  }
}

.card_title {
  font-size: 1.2rem;
  text-align: center;
}

.card_openDt {
  text-align: right;
}
@media screen and (min-width: 768px) {
  /* .movie_header{
    width: 65%;
  } */
  
  .movie_desc{
    width: 50%;
  }
  
  .info_section{
    height: 100%;
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }
  
  .blur_back{
    width: 80%;
    background-position: -100% 10% !important;  
  }
}

@media screen and (max-width: 768px) {
  .movie_card{
    width: 95%;
    margin: 70px auto; 
    min-height: 350px;
    height: auto;
  }
  
  .blur_back{
    width: 100%;
    background-position: 50% 50% !important;  
  }
  
  .movie_header{
    width: 100%;
    margin-top: 85px;
  }
  
  .movie_desc{
    width: 100%;
  }
  
  .info_section{
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    /* display: inline-grid; */
  }
}


.bright_back{
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}
</style>