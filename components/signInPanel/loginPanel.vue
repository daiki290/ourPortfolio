<template>
    <div class="loginPanelArea">
        <h1>ログイン</h1>
        <div class="loginArea">
            <div class="toCreateAccountMsgArea mb-1">
                <p class="d-inline-block">アカウントをお持ちでない方は</p>
                <nuxt-link to="/createAccount" >こちら</nuxt-link>
            </div>
            <div class="loginFormArea">
                <b-form @submit="login()" class="mt-1">
                    <b-form-group label="メールアドレス:" description="We'll never share your email with anyone else.">
                        <b-form-input
                        v-model="email"
                        type="email"
                        required
                        placeholder="メールアドレス"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="パスワード:">
                        <b-form-input
                        v-model="password"
                        type="password"
                        required
                        placeholder="パスワード"
                        ></b-form-input>
                    </b-form-group>
                    <div class="login-btn">
                        <button type="submit">ログイン</button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>    
</template>

<script>
import firebase from '~/plugins/firebaseAuth'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    data(){
        return{
            password:'',
            email:''
        }
    },
    computed: {
        ...mapState(['account']),
        ...mapGetters(['isAuthenticated'])
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user){
                this.setUser(null)
            }else{
                const { uid, email } = user;
                this.setUser( { uid, email })
            }
        })
    },
    methods:{
        ...mapActions({setUser: 'account/setUser'}),
        //ログインするメソッド
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                // ログインしたら飛ぶページを指定
                console.log('ログイン完了')
            }).catch((error) => {
                console.log('ログイン完了')
                alert(error)
            });
        }
    }
}
</script>

<style>

</style>
