<template>
  <footer class="footer-container">
    <span v-if="location">{{ location }}에서 접속 중</span>
    <span>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></span>
    <span><a href="#" >WEATHEROBE</a></span>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getLocation();
  },

  data() {
    return {
      location: "",
    }
  },

  methods: {
   
    getLocation() {
      if (navigator.geolocation) { // GPS를 지원하면

        navigator.geolocation.getCurrentPosition((pos) => {
          
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          
          const KAKAO_REST_API_KEY = "b5aa8055a9b11c87fd0d8a07035ce3c3";

          if (lat && lon) {
             axios.get(
              `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
              { headers: { Authorization: `KakaoAK ${KAKAO_REST_API_KEY}` } }
            )
            .then((res) => {
              //법정동 기준으로 동단위의 값을 가져온다
              if(res.data.documents.length > 0) {

                const loc = res.data.documents[0].region_2depth_name + " " + res.data.documents[0].region_3depth_name;

                console.log(loc)
                
                this.location = loc;
              }
            })
          }
        }, (err) => {
          console.error(err);
        }, {
          enableHighAccuracy: false, maximumAge: 0, timeout: Infinity
        });
      } else {
        alert('GPS를 지원하지 않습니다');
        }
      }
  }
}
</script>

<style>
.footer-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
}
</style>