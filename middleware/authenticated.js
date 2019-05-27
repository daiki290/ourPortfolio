//export default function ({ store, route, redirect }) {
/*
  if (!store.getters.isAuthenticated && route.name !== 'signIn') {
    redirect('/signIn')
  }
  console.log(store.state.user.isLogin);
  console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated && route.name === 'signIn') {
    redirect('/')
  }
//  }
export default function ({ store, redirect, route}) {
  // ユーザーが認証されていないとき
  console.log(store.state.user.isLogin)
  console.log(route.path)
  if (!store.state.user.isLogin && route.path == '/content/home') {
    return redirect('/signIn')
  }else if (store.state.user.isLogin && route.path == '/signIn'){
    return redirect('/')
  }
}
*/