<template>
  <div class="container">
    <div class="content pl-[50px] pt-[40px] w-full h-[530px] max-md:pl-0">
      <h2 class="text-3xl text-white font-normal max-md:text-2xl max-md:ml-[15px]">Descontos cliente <span class="font-bold">Unimed Natal</span></h2>
      <ul class="mt-[31px] flex gap-[14.45px] flex-wrap">
        <li v-for="(item, index) in items" :key="item.id" class="w-[207px] h-[390px] bg-white flex flex-col items-center rounded-sm">
            <div class="relative">
                <img :src="item.image" alt="Imagem do Produto" />
                
                <!-- Ícone de Favorito -->
                <div 
                    class="like absolute bottom-[12px] right-[12px] w-[26px] h-[26px] rounded-full flex justify-center items-center cursor-pointer transition-all"
                    :class="{ 'bg-red-600 text-white': item.isFavorite, 'bg-white text-[#00995D]': !item.isFavorite }"
                    @click="toggleFavorite(index)"
                >
                    <font-awesome-icon :icon="[item.isFavorite ? 'fas' : 'far', 'heart']" />
                </div>
            </div>
  
            <div class="w-[177px] mt-[13px]">
                <div class="w-[169px]">
                  <p class="text-lg text-[#3F3F3F] font-normal">{{ item.description }}</p>
                </div>
                <div class="flex space-x-[5px]">
                  <s v-if="item.valor_antigo" class="text-[#3F3F3F] text-sm font-normal">{{ item.valor_antigo }}</s>
                  <p v-if="item.desconto" class="text-sm font-normal text-[#CC0A12]">{{ item.desconto }}</p>
                  <p v-if="item.frase_valor" class="text-[#3F3F3F] text-sm font-normal">{{ item.frase_valor }}</p>
                </div>
                <p class="text-[1.625rem] font-semibold text-[#3F3F3F]">{{ item.valor }}</p>
                <div class="pagamento h-[28px]">
                  <p class="text-[#3F3F3F] text-sm font-normal h-[14px]">{{ item.forma_de_pagamento_1 }}</p>
                  <p class="text-[#3F3F3F] text-sm font-normal h-[14px]">{{ item.forma_de_pagamento_2 }}</p>
                </div>
                <p class="text-[#3F3F3F] text-sm font-normal mt-[15px]">Vendido por: 
                    <span class="underline decoration-solid text-[#3F3F3F]">{{ item.vendido_por }}</span>
                </p>
            </div>
        </li>
      </ul>

      <CarouselDiscount :items="items" class="carousel-discount"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import discounts from "@/data/discounts.json";
import type { Produto } from "@/types/produtos.types";
import CarouselDiscount from "./CarouselDiscount.vue";

const images = import.meta.glob<{ default: string }>("@/assets/images/discounts/*", { eager: true });

const items = ref<Produto[]>([]);

onMounted(() => {
items.value = discounts.map((item) => ({
  ...item,
  image: images[`/src/assets/images/discounts/${item.image}`]?.default || "",
  isFavorite: false,
  forma_de_pagamento_2: item.forma_de_pagamento_2 || ""
}));
});

// Alterna o favorito apenas para o item clicado
const toggleFavorite = (index: number) => {
items.value[index].isFavorite = !items.value[index].isFavorite;
};
</script>

<style scoped>
  p, s, span {
      font-family: "Source Sans 3";
  }
  .content{
      background-image: url("@/assets/images/bg-unimed.png");

  }
  .carousel-discount{
    display: none;
  }
  .container{
      max-width: 1200px;
  }
  @media (max-width: 1200px){
        .container{
            max-width: 1100px;
        }
        .content ul{
          display: none;
        }
        .carousel-discount{
          display: block;
        }
    }
    @media (max-width: 1022px){
        .container{
            max-width: 900px;
        }
    }
    @media (max-width: 768px) {
    .container {
        max-width: 730px;
    }
  }
</style>
