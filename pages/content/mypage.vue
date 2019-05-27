<template>
    <div>
        <div class="profileArea text-center">
            <div class="userImgArea">
            </div>
            <p>{{$store.state.user.userName}}</p>
            <b-button variant="outline-primary"><nuxt-link to="/content/postPortfolio">ポートフォリオを追加する</nuxt-link></b-button>
        </div>
        <div>
            <b-tabs content-class="mt-3" justified>
                <b-tab title="プロフィール" active><p>I'm the first tab</p></b-tab>
                <b-tab title="ポートフォリオ"><p>I'm the second tab</p></b-tab>
                <b-tab title="お気に入り"><p>I'm the tab with the very, very long title</p></b-tab>
                <b-tab title="設定"><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
        </div>
    </div>    
</template>
<style>
    .userImgArea{
        margin: 0 auto;
        min-width: 100px;
        height: 200px;
        width: 20%;
        background-color: bisque;
    }
</style>
