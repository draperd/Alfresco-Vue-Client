<template>
   <!-- <nav class="navbar navbar-default">
      <div class="container">
         <ul class="nav navbar-nav">
            <li><a v-link="'home'">Home</a></li>
            <li><a v-link="'login'">Login</a></li>
            <li><a v-link="'login'">Logout</a></li>
         </ul>
      </div>
   </nav> -->
   <div class="container">
      <router-view></router-view>
   </div>
</template>

<script>
import Hello from './components/Hello';

export default {
   name: 'app',
   components: {
      Hello
   }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
