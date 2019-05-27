<template>
  <div>
    ポートフォリオアプリ一覧
    <button @click="getPortfolios()">テスト</button>
    <button @click="clearApp()">クリア</button>
    <div class="row ml-3 mr-3">
      <div v-for="item in getPortfolioList" v-bind:key="item.appId" class="col-md-3 p-0">
        <portfolioCard :portfolioApp="item" />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import portfolioCard from '~/components/portfolioAppCard/folioAppCard.vue'
  export default {
    components:{
      portfolioCard
    },
    computed: {
      ...mapState(['portfolioApp']),
      ...mapGetters({ getPortfolioList: 'portfolioApp/getPortfolioList' })
    },
    methods:{
      ...mapActions({getApp: 'portfolioApp/getApp',setApp: 'portfolioApp/setApp'}),
      async getPortfolios(){
        this.getApp();
      },
      async clearApp(){
        this.setApp(null);
      }
    }
  }
</script>

<style>
</style>
