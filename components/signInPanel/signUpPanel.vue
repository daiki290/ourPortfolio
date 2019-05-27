<template>
    <div class="signUpPanelArea">
        <h1>新規会員登録</h1>
        <div class="loginArea text-center">
            <div class="signUpFormArea">
                <b-form @submit="signUp" class="mt-1">
                    <b-form-group label="メールアドレス:" description="We'll never share your email with anyone else.">
                        <b-form-input
                        v-model="email"
                        type="email"
                        required
                        placeholder="メールアドレス"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="パスワード:">
                        <b-form-input
                        v-model="password"
                        type="password"
                        required
                        placeholder="パスワード"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="アカウント名:">
                        <b-form-input
                        v-model="displayName"
                        required
                        type="text"
                        placeholder="アカウント名"
                        ></b-form-input>
                    </b-form-group>
                    <div class="login-btn">
                        <button type="submit">ログイン</button>
                    </div>
                </b-form>
            </div>
        </div>
        <button @click="logout()">ログアウト</button>
    </div>    
</template>

<script>
import firebase from '~/plugins/firebaseAuth'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    data(){
        return{
            displayName:'',
            password:'',
            email: '',
            errorMessage:'',
            isLogin: false,
            picked:''
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
        ...mapActions({setUser: 'account/setUser', setAccountInfo: 'account/setAccountInfo'}),
        async login() {
            try {
                await this.$store.dispatch("user/login", {
                    email: this.email,
                    password: this.password
                })
                this.$router.push('/')
            } catch(e) {
                            console.log('test2')
                this.error = e.message
            }
        },
        async signUp(evt){
            evt.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) =>{
                this.setAccountInfo(this.displayName)
                alert('こんにちは'+this.account.displayName)
//                this.$router.push('/content/home')
            }).catch(function (error) {
                alert(error)
            }.bind(this))
        },
        async logout() {
            firebase.auth().signOut()
            .then(() => {
                this.setUser(null)
            }).catch((error) => {
                alert(error)
            })
        }
    }
}
</script>

<style>

</style>
