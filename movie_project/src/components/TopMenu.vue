<template>
  <div class="header">
    <ul>
      <li><router-link to="/home">boxOffice List</router-link></li>
      <li><router-link to="/movie">Movie List</router-link></li>
      <li><router-link to="/actor">search</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped> 
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
  .router-link-exact-active {
    background-color: #04AA6D;
  }
</style>