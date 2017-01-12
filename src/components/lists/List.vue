<style>

</style>

<template>
   <div>
      <Breadcrumb :relativePath="relativePath"
                  @setRelativePath="setRelativePath"></Breadcrumb>
      <Toolbar :list="list" 
               @pageForward="pageForward" 
               @pageBack="pageBack"></Toolbar>
      <List-View :list="list"
                 @navigate="navigate"></List-View>
   </div>
</template>

<script>
   import NodeService from 'alfresco-js-utils/lib/services/NodeService';
   import ListView from './ListView.vue';
   import Toolbar from './Toolbar.vue';
   import Breadcrumb from './Breadcrumb.vue';

   export default {
      data: () => ({
         skipCount: 0,
         maxItems: 3,
         relativePath: '/',
         list: {
            pagination: {
               skipCount: 0,
               maxItems: 3
            }
         }
      }),
      beforeMount() {
         this.getData();
      },
      methods: {
         pageBack: function() {
            if (this.list.pagination.skipCount)
            {
               this.skipCount -= this.maxItems;
               this.getData();
            }
         },
         pageForward: function() {
            if (this.list.pagination.hasMoreItems)
            {
               this.skipCount += this.maxItems;
               this.getData();
            }
         },
         getData: function() {
            NodeService.getItems({
               skipCount: this.skipCount,
               maxItems: this.maxItems,
               relativePath: this.relativePath
            })
               .then(response => {
                  this.list = response.data.list;
               });
         },
         navigate: function(item) {
            this.skipCount = 0;
            this.relativePath += `${item.entry.name}/`;
            this.getData();
         },
         setRelativePath: function(relativePath) {
            this.skipCount = 0;
            this.relativePath = relativePath;
            this.getData();
         }
      },
      components: {
         ListView,
         Toolbar,
         Breadcrumb
      }
   };
</script>
