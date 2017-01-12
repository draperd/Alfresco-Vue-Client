<style></style>

<template>
   <span>
      <button v-on:click="back()">Page Back</button>
      <span>{{ list.pagination.skipCount / list.pagination.maxItems + 1}}
      <button v-on:click="forward()">Page Forward</button>
   </span>
</template>

<script>
   export default {
      props: ['list'],
      methods: {
         back: function() {
            this.$emit('pageBack');
         },
         forward: function() {
            this.$emit('pageForward');
         }
      }
   };
</script>