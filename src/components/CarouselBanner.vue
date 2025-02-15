<template>
  <div class="flex justify-center items-center carousel-container">
    <swiper 
    :navigation="true" 
    :modules="modules"
    :loop="true" 
    :slides-per-view="1"
    :space-between="30"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    class="mySwiper">
      <swiper-slide>
        <img src="../assets/images/banner1.png" alt="Banner 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/banner2.png" alt="Banner 2" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation, Autoplay];
</script>

<style scoped>
  .carousel-container {
    max-width: 100%;
    margin-top: 20px;
    overflow: visible;
    cursor: pointer;
    
  }
  .mySwiper {
    max-width: 1194px;
    max-height: 300px;
    overflow: visible;
    position: relative;
    overflow: hidden;
  }
  .mySwiper .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mySwiper .swiper-slide img {
    width: 98%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next, .swiper-button-prev {
    background: #F47920;
    color: white;
    width: 28px;
    height: 63px;
    border-radius: 30px;
    position: absolute;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .carousel-container:hover .swiper-button-next, .carousel-container:hover .swiper-button-prev {
    opacity: 1;   
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 12px;
  }
  .swiper-button-next {
  right: 1px;
  }
  .swiper-button-prev {
  left: 1px;
  }
</style>
