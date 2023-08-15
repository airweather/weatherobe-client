<template>
  <header class="weatherobe-header">
    <div class="background-bar"></div>

    <div class="text-center">
      <h1 class="mt-3">
        <router-link to="/" class="weatherobe-logo">
          WEATHEROBE
        </router-link>
      </h1>
    </div>

    <div class="header-container">
      <div>
        <ul class="header-text">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dailylook">DailyLook</router-link>
          </li>
          <li v-if="isLogin" class="nav-item">
            <router-link class="nav-link" to="/wardrobe">MyWardrobe</router-link>
          </li>
        </ul>
      </div>

      <div class="header-icon">
        <router-link v-if="isLogin" to="/write">
          <img :src="writeImg" width="24" height="24">
        </router-link>
        
        <router-link v-if="(isLogin && user.sso ===1)" to="/mypage">
          <img :src="mypageImg" width="24" height="24">
        </router-link>

        <router-link  to="/search">
          <img class="header-img" :src="searchImg">
        </router-link>

        <router-link v-if="!isLogin"  to="/login">
          <img class="header-img" :src="loginImg"> <small>login</small>
        </router-link>

        <a v-if="isLogin" @click="logout">
          <img class="header-img" :src="logoutImg"/><small>logout</small>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    logout: {
      type: Function,
      default: () => {},
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loginImg: require('@/assets/login.png'),
      logoutImg: require('@/assets/logout.png'),
      searchImg: require('@/assets/search2.png'),
      mypageImg: require('@/assets/mypage.png'),
      writeImg: require('@/assets/write.png'),
    }
  },
}
</script>

<style>
ul{
  list-style: none;
}

.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 30px;
  width: 1300px;
}

.header-text{
  display: flex;
  gap: 10px;
}

.header-icon{
  display: flex;
  gap: 10px;
}

.background-bar{
  background-color: #000;
  height:8px;
  width: 100%;
}

.weatherobe-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.header-img{
  width: 20px;
  height: 20px;
  cursor: pointer;
  object-fit: cover;
}
</style>