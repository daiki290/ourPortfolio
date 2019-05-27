<template>
    <div>
        <signUpPanel />
    </div>    
</template>
<script>
import db from "~/plugins/firebase";
import signUpPanel from '~/components/signInPanel/signUpPanel.vue'
export default {
    data(){
        return{
            comment : '',
            appData:[{ "appId": 1, "appImg": "https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/50209/50209597.jpg?token=7cc7c18&amp;api=v2", "appSrc": "https://tabelog.com/tokyo/A1315/A131502/13185575/", "language": "java", "text": "このアプリはメモを管理するアプリです。", "title": "memoApp", "user": "tarou_yamazaki" }]
        }
    },
    components:{
        signUpPanel
    },
    methods:{
        insertData(){
            var data={
                name:'いけみず太郎'
            }
            var setDoc = db.collection('users').doc('user').set(data);
        },
        getApp(){
            var appRef = db.collection("app");
            var querySnapshot = appRef.get().then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.id, '=>', doc.data());
              this.appData.push(doc.data());
            });
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
        },
        async setApp(data){
            try {
                await this.$store.dispatch("portfolioApp/setApp", {
                    data
                })
            } catch(e) {
                this.error = e.message
            }
        }
    }
}
</script>
