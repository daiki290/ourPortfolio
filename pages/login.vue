<template>
    <div class="loginArea text-center mt-5 border border-secondary">
      <div class="isSignUpBtnArea mt-4">
        <flatBtn class="d-inline-block" flatBtnText='初めての方(アカウント登録)' @set="setIsSignUpTrue" />
        <flatBtn class="d-inline-block" flatBtnText='登録済みの方(ログイン)' @set="setIsSignUpFalse" />
      </div>
      <div class="signFormArea">
        <signUpPanel v-if="isSignUp" />
        <loginPanel v-else />
      </div>
    </div>    
</template>

<script>
import loginPanel from '~/components/signInPanel/loginPanel.vue'
import signUpPanel from '~/components/signInPanel/signUpPanel.vue'
import flatBtn from '~/components/btn/flatBtn.vue'
export default {
  components:{
    loginPanel,
    signUpPanel,
    flatBtn
  },
  data() {
    return {
      isSignUp: false
    }
  },
  methods : {
    setIsSignUpTrue(){
      this.isSignUp=true;
    },
    setIsSignUpFalse(){
      this.isSignUp=false;
    },
  }
}
</script>

<style>
  .loginArea{
    width: 70%;
    min-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
