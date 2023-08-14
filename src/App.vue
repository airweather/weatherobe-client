<template>
  <div>
    <WrHeader :user="user" :logout="logout" :isLogin="isLogin"/>
    
    <router-view/>

    <footer class="container mt-5">
      <p class="float-end"><a href="#" >WEATHEROBE</a></p>
      <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </div>  
</template>

<script>
  import WrHeader from '@/components/WrHeader.vue'

export default {
  components: {
    WrHeader
  },
  
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLogin() {
      return this.$store.state.user.email !== undefined;
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

.weatherobe-header{
  border-bottom: 1px solid #ddd;
}

.weatherobe-logo,
.weatherobe-logo:hover{
  color:#000;
  text-decoration:none;
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
