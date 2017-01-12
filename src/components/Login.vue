<template>
   <div >
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your username"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="password"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Login</button>
   </div>
</template>

<script>
   import auth from 'alfresco-js-utils/lib/Authentication';
   export default {
      data() {
         return {
            username: '',
            password: '',
            error: ''
         };
      },
      methods: {
         submit() {
            auth.login(this.username, this.password).then((loggedIn) => {
               this.$router.push('/home');
            });
         }
      }
   };
</script>