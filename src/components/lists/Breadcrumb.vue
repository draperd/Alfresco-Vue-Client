<style>
   .components-lists-Breadcrumb {

   }

</style>

<template>
   <nav class='components-lists-Breadcrumb' role='navigation'>
       <p id='breadcrumblabel'>You are here: {{relativePath}}</p>
       <ol id='breadcrumb' aria-labelledby='breadcrumblabel'>
           <li role='link' 
               v-for='breadcrumb in breadcrumbs' 
               @click='navigate(breadcrumb, $event)'>{{breadcrumb.label}}</li>
       </ol>
   </nav>
</template>

<script>
   import BreadcrumbUtil from 'alfresco-js-utils/lib/utils/navigation/Breadcrumbs';
   
   export default {
      props: ['relativePath'],
      beforeMount() {
         this.breadcrumbs = [{
            label: 'Home',
            relativePath: '/'
         }];
      },
      watch: {
         relativePath: function() {
            let breadcrumbData = BreadcrumbUtil.createBreadcrumbs({
               relativePath: this.relativePath
            });
            this.breadcrumbs = breadcrumbData.breadcrumbs;
         }
      },
      methods: {
         navigate: function(breadcrumb, evt) {
            this.$emit('setRelativePath', breadcrumb.relativePath);
         }
      }
   };
</script>