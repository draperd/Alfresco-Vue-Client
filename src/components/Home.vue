<template>
   <div>
      <span>Hello</span>
      <span @click="logout()">Logout</span>
      <list></list>
   </div>
</template>

<script>
   import List from './lists/List.vue';
   import auth from 'alfresco-js-utils/lib/Authentication';
   export default {
      data() {
         return {
         };
      },
      methods: {
         logout() {
            auth.logout().then((loggedIn) => {
               this.$router.push('/login');
            });
         }
      },
      components: {
         List
      }
   };
</script>