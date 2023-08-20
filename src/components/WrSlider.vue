<template>
    <div class="slider">
      <button @click="prevSlide">이전</button>
      <div class="slides">
        <div v-for="(image, index) in images" :key="index" class="slide" :class="{ active: index === currentIndex }">
          <img :src="image" alt="Slide {{ index + 1 }}">
        </div>
      </div>
      <button @click="nextSlide">다음</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['images'],
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .slider {
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  
  .slides {
    display: flex;
    overflow: hidden;
  }
  
  .slide {
    flex: 0 0 300px;
    transition: transform 0.3s ease-in-out;
  }
  
  .slide img {
    width: 100%;
  }
  
  .active {
    transform: translateX(0);
  }
  
  button {
    margin: 5px;
  }
  </style>
  