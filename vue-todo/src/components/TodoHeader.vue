<template>
    <header>
      <!-- <h1>TODO it!</h1> -->
      <h1>{{ this.headerText }}</h1>
    </header>
  </template>
  
  <script>
  import { mapState } from 'vuex'

  export default {
    computed : {
      ...mapState("todoApp", ["headerText"])
    }
  }
  </script>
    

  <style scoped>
    h1 {
      color: #2F3B52;
      font-weight: 900;
      margin: 2.5rem 0 1.5rem;
    }
  </style>