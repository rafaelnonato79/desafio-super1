
<template>
  <header class="fixed top-0 w-full z-50 bg-white">
    <div class="bg-orange-500 h-[8px]">
    </div>
    <NavBarMobile/>
    <NavBar/>
  </header>
  <main class="flex flex-col justify-center items-center mt-[182px] max-md:mt-[100px]">
    <CarouselBanner/>

    <CategoriesList/>

    <DiscountList class="mt-[88px] max-md:mt-[35px]"/>
    
  </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CarouselBanner from '@/components/CarouselBanner.vue';
import CategoriesList from '@/components/CategoriesList.vue';
import DiscountList from '@/components/DiscountList.vue';
import NavBarMobile from '@/components/NavBarMobile.vue';
</script>

<style>
  .container{
        max-width: 1200px;
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
