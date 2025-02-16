<template>
    <div class="container mt-[40px] max-md:mt-[20px]">

    <!------- Mobile ------------>
        <CarouselCategorie class="mobile"/>


     <!-------- Desktop ------------->
       <ul class="flex space-x-auto justify-center desktop">
        <li 
        v-for="category in categories" 
        :key="category.id" 
        class="category-item  w-[110px]  flex flex-col items-center cursor-pointer ">
            <div class="category-image-wrapper w-[96px] h-[96px] bg-[#EAE0D5] rounded-full flex justify-center items-center hover:bg-[#E7680C] transition-all text-white ">
                <img
                :src="category.image" 
                :alt="category.description"
                class="category-image w-[45px] h-[48px] filter" />
            </div>
            <p class="text-base text-center text-[#737373] max-md:text-sm">{{ category.description}}</p>    
        </li>
       </ul> 
    </div>
</template>

<script setup lang="ts">
import type { Category } from "../types/categories.types"; 
import { getCategories } from "@/http/index";
import { onMounted, ref } from "vue";
import CarouselCategorie from "@/components/CarouselCategorie.vue";

const categories = ref<Category[]>([]);

onMounted( async () => {
    const data = await getCategories();
    console.log(data);
    categories.value = Array.isArray(data) ? data : [];
});
</script>

<style scoped>

    .mobile{
        display: none;
    }
    .container{
        max-width: 1200px;
    }
    p{
        font-family: "Source Sans 3";
    }
    
    .category-item .category-image-wrapper {
  transition: background-color 0.3s ease;
    }

    .category-item .category-image-wrapper:hover {
    background-color: #E7680C; /* Cor laranja no hover */
    }

    .category-item .category-image {
    transition: filter 0.3s ease;
    }

    .category-item .category-image-wrapper:hover .category-image {
    filter: invert(1) brightness(2000%); /* Inverte a cor da imagem para branco */
    }

    @media (max-width: 1200px){
        .container{
            max-width: 1000px;
        }
    }
    @media (max-width: 1022px){
        .container{
            max-width: 900px;
        }
        .category-image-wrapper{
            width: 80px;
            height: 80px;
        }
    }
    @media (max-width: 900px) {
    .container {
        max-width: 800px;
    }
    .category-image-wrapper{
            width: 70px;
            height: 70px;
        }
    }
    @media (max-width: 800px) {
    .container {
        max-width: 750px;
     }
    }
    @media (max-width: 750px){
        .container{
            max-width: 700px;
        }
        .desktop{
            display: none;
        }
        .mobile{
            display: block;
        }
        
    }


</style>