<template>
  <div>
    <p class="text-center">ポートフォリオ投稿</p>
    <b-form @submit="postPortfolio" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="アプリ名:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="email"
          required
          placeholder="アプリ名を入力してください(必須)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="アプリURL:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.appUrl"
          required
          placeholder="アプリURLを入力してください(必須)"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import db from "~/plugins/firebase";
  export default {
    data() {
      return {
        form: {
          appUrl:'',
          name: ''
        }
      }
    },
    methods: {
      //ポートフォリオの新規登録
      postPortfolio() {
          var addDoc = db.collection('app').add({
            appId: 'Tokyo',
            userId: '12',
            appName: 'Japan',
            appUrl: 'testtest',
            description:'testtest',
            appLanguage:'java'
            }).then(ref => {
                console.log('Added document with ID: ', ref.id);
            });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.appUrl = ''
        this.form.name = ''
      }
    }
  }
</script>