<template>
    <header>
        <div class="d-inline-block logoArea col-md-6 p-0">
            <p class="d-inline-block"><nuxt-link to="/">ロゴ</nuxt-link></p>
            <p class="d-inline-block"><nuxt-link to="/test">テスト</nuxt-link></p>
        </div>
        <div class="d-inline-block col-md-5 p-0">
            <div v-if="!$store.state.account.isLogin">
                <p class="d-inline-block"><nuxt-link to="/login">ログイン</nuxt-link></p>
                <p class="d-inline-block"><nuxt-link to="/createAccount">新規登録</nuxt-link></p>
            </div>
            <div class="d-inline-block" v-if="$store.state.account.isLogin">
                <p class="d-inline-block" >こんにちは{{getDisplayName}}さん</p>
                <p class="d-inline-block"><nuxt-link to='/content/postPortfolio'>ポートフォリオの投稿</nuxt-link></p>
                <p class="d-inline-block"><nuxt-link to='/content/mypage'>マイページ</nuxt-link></p>
                <button class="d-inline-block" @click="logout()">ログアウト</button>
            </div>
        </div>
    </header>    
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState(['account']),
        ...mapGetters({getDisplayName : 'account/getDisplayName'})
    },
}
</script>

<style>
    header{
        width: 100%;
        background-color: #24292e ;
    }

    header a{
        color: white;
    }
    
    header p{
        color: white;
    }

</style>
