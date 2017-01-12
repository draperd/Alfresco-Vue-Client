<template>
   <div>
      <span>Hello</span>
      <span @click="logout()">Logout</span>
   </div>
</template>

<script>
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
      }
   };
</script>