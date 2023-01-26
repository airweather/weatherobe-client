import {createStore} from 'vuex'
import persistedstated from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      user: {}
    }
  },
  //mutation은 state의 값을 변경해줌
  mutations: {
    user(state, data) {
      state.user = data;
    }
  },
  plugins: [
    //유지시키고 싶은 값을 넣어주면 유지됨
    persistedstated({
      paths:['user']
    })
  ]
});

export default store;