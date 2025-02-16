<template>
    <div class="flex justify-center items-center carousel-container mobile">
    <swiper 
    :navigation="false" 
    :modules="modules"
    :loop="true" 
    :space-between="30"
    :autoplay="false"
    :breakpoints="{
       '250':{
              slidesPerView: 3,
              spaceBetween: 10
         },
      '440': {
        slidesPerView: 4,
        spaceBetween: 10
      },
      '640': {
        slidesPerView: 6,
        spaceBetween: 15
      },
      '768':{
        slidesPerView: 7,
        spaceBetween: 15
        },
        '914':{
            slidesPerView: 8,
            spaceBetween: 15
        },
      '1024': {
        slidesPerView: 9,
        spaceBetween: 15
      }
    }"
    class="mySwiper">
      <swiper-slide
      v-for="category in categories"
      :key="category.id"
      class="category-item w-[110px] flex flex-col items-center cursor-pointer ">
      <div class="category-image-wrapper w-[96px] h-[96px] bg-[#EAE0D5] rounded-full flex justify-center items-center hover:bg-[#E7680C] transition-all text-white">
          <img 
          :src="category.image" 
          :alt="category.description" 
          class="category-image w-[32px] h-[32px] filter"
          />
      </div>
      <p class="text-base text-center text-[#737373] max-md:text-sm">{{ category.description}}</p>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup lang="ts">
import type { Category } from "../types/categories.types"; 
import { getCategories } from "@/http/index";
import { onMounted, ref } from "vue";

const categories = ref<Category[]>([]);

onMounted( async () => {
    const data = await getCategories();
    console.log(data);
    categories.value = Array.isArray(data) ? data : [];
});

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
    width: 32px;
    height: 32px;
    object-fit: cover;
  }

  @media (max-width: 750px){
    .mobile{
        display: block;
    }
  }
  </style>