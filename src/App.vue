<template>
  <div>
    <div class="background-bar"></div>
    <div class="app-container">
      <div class="weatherobe-container">
        <WrHeader :user="user" :logout="logout" :isLogin="isLogin"/>
        <router-view/>
        <WrFooter />
      </div>
    </div>  
  </div>
</template>

<script>
  import WrHeader from '@/components/WrHeader.vue'
  import WrFooter from '@/components/WrFooter.vue'

export default {
  components: {
    WrHeader,
    WrFooter
  },
  
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLogin() {
      return this.$store.state.user.email;
    }
  },

  methods: {
    logout() {
      if(this.$store.state.user.sso === 0) {
        window.Kakao.Auth.logout((response) => {
          console.log(response);
          this.$store.commit("user", {});
        })
      }
      else{
        this.$store.commit("user", {});
      }
      alert('로그아웃');
      this.$router.push('/');
    },
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background-bar{
  background-color: #000;
  height:8px;
  width: 100%;
}

.app-container{
  display: flex;
  justify-content: center;
}

.weatherobe-container{
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

p a {
  text-decoration:none;
  color:#000;
}

</style>
