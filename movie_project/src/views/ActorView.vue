<template>
  <div>
    <input type="text" class="inp-type" v-model="searchText" placeholder="검색어를 입력하세요">
    <button class="seh-btn" @click="searchBtn(searchText)" @keyup.enter="searchBtn(searchText)"></button>
    <div>
      <ul v-for="searchList in list" :key="searchList.items">
        <li>{{searchList.title}} ( {{searchList.subtitle}} )</li>
        <img :src='`${searchList.image}`'>
      </ul>
    </div>
  </div>
</template>

<script>
import { movieSearch } from '../api/index.js'


export default {
  data(){
    return {
      searchText : ""
      ,list : []
    }
  },
  methods : {
    searchBtn : function(){
      //네이버 API 호출
      var vm = this;
      movieSearch(this.searchText)
      .then(function(response){
          var searchList = JSON.parse(response.request.response);
          console.log(searchList);
          vm.list = searchList.items;
          
      })
      .catch(function(error){
        console.log(error);
      });
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

.inp-type{
    height: 3.5rem;
    padding: 0 1.5rem;
    border: 1px solid #afb5bb;
    border-radius: 1.2rem;
    flex: 1;
    color: #222429;
    opacity: 1;
    adding-left: 4.2rem;
    background-size: 1.8rem auto;
    background: url("../assets/ico-search-list.png") no-repeat 56.2rem center;
    width: 97%;
    margin: 1rem;
}

.seh-btn{
    position: absolute;
    top: 4rem;
    right: 11px;
    width: 4.8rem;
    height: 4.3rem;
    margin-left: 0;
    background-size: 2rem;
    font-size: 0;
    background-color: transparent;
    opacity: 0;
}
</style>