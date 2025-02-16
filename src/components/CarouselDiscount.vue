<template>
    <div class="container">
        <div class="flex justify-center items-center carousel-container">
          <swiper 
          :navigation="true" 
          :modules="modules"
          :loop="true" 
          :loopedSlides="items.length"
          :space-between="20"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
          '320': {
            slidesPerView: 2,
            spaceBetween: 10
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 15
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 15
          }
        }"
          class="mySwiper">
            <swiper-slide 
            v-for="(item, index) in items" 
            :key="item.id" 
            class="w-[207px] h-[390px] bg-white flex flex-col items-center rounded-sm max-md:w-[150px] max-md:h-[340px] max-md:rounded-md">
            
            <div class="bg-white w-[207px] flex flex-col justify-start items-center rounded-sm max-md:w-[180px] max-md:h-[320px] max-md:rounded-md">
              <div class="relative">
                  <img :src="item.image" alt="Imagem do Produto"/>
                  
                  <!-- Ícone de Favorito -->
                  <div 
                      class="like absolute bottom-[12px] right-[12px] w-[26px] h-[26px] rounded-full flex justify-center items-center cursor-pointer transition-all"
                      :class="{ 'bg-red-600 text-white': item.isFavorite, 'bg-white text-[#00995D]': !item.isFavorite }"
                      @click="toggleFavorite(index)"
                  >
                      <font-awesome-icon :icon="[item.isFavorite ? 'fas' : 'far', 'heart']" />
                  </div>
              </div>
    
              <div class="w-[177px] mt-[13px] max-md:w-[150px] max-md:mt-[5px]">
                  <div class="w-[169px]">
                    <p class="text-lg text-[#3F3F3F] font-normal max-md:text-sm">{{ item.description }}</p>
                  </div>
                  <div class="flex space-x-[5px]">
                    <s v-if="item.valor_antigo" class="text-[#3F3F3F] text-sm font-normal max-md:text-xs">{{ item.valor_antigo }}</s>
                    <p v-if="item.desconto" class="text-sm font-normal text-[#CC0A12] max-md:text-xs">{{ item.desconto }}</p>
                    <p v-if="item.frase_valor" class="text-[#3F3F3F] text-sm font-normal max-md:text-sm">{{ item.frase_valor }}</p>
                  </div>
                  <p class="text-[1.625rem] font-semibold text-[#3F3F3F] max-md:text-lg">{{ item.valor }}</p>
                  <div class="pagamento h-[28px] max-md:w-[160px]">
                    <p class="text-[#3F3F3F] text-sm font-normal h-[14px] max-md:text-xs">{{ item.forma_de_pagamento_1 }}</p>
                    <p class="text-[#3F3F3F] text-sm font-normal h-[14px] max-md:text-xs">{{ item.forma_de_pagamento_2 }}</p>
                  </div>
                  <p class="text-[#3F3F3F] text-sm font-normal mt-[15px] max-md:mt-[10px]">Vendido por: 
                      <span class="underline decoration-solid text-[#3F3F3F] max-md:text-xs">{{ item.vendido_por }}</span>
                  </p>
              </div>
            </div>
            </swiper-slide>
          </swiper>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { onMounted, ref } from 'vue';
import type { Produto } from '@/types/produtos.types';
import discounts from '@/data/discounts.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation, Autoplay];

const items = ref<Produto[]>([]);
const images = import.meta.glob<{ default: string }>("@/assets/images/discounts/*", { eager: true });

onMounted(() => {
    items.value = discounts.map((item) => ({
        ...item,
        image: images[`/src/assets/images/discounts/${item.image}`]?.default || "",
        isFavorite: false,
        forma_de_pagamento_2: item.forma_de_pagamento_2 || ""
    }));
});

const toggleFavorite = (index: number) => {
    items.value[index].isFavorite = !items.value[index].isFavorite;
};
</script>
  
<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1194px;
  margin-top: 20px;
  overflow: hidden;
  cursor: pointer;
}

.mySwiper {
  max-width: 1194px;
  position: relative;
}
.swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Impede o slide de encolher e causar o problema de espaço */
  background: transparent;
}

.mySwiper .swiper-slide {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mySwiper .swiper-slide img {
  height: auto;
  object-fit: cover;
}

.mySwiper .swiper-button-next, 
.mySwiper .swiper-button-prev {
  background: #F47920;
  color: white;
  width: 28px;
  height: 63px;
  border-radius: 30px;
  position: absolute;
  z-index: 10;
  opacity: 1; /* Sempre visíveis */
}

.carousel-container:hover .mySwiper .swiper-button-next, 
.carousel-container:hover .mySwiper .swiper-button-prev {
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



@media (max-width: 1200px){
    .mySwiper, .swiper-slide{
        max-width: 100%;
    }
}
@media (max-width: 750px){
    .carousel-container{
        margin-top:0;
    }
  }
</style>
