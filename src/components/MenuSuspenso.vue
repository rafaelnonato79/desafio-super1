<template>
    <div class="container departamentosList bg-white h-[700px]"style="box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);">
        <div class="content flex rounded-sm ml-[66px] h-[477px]">
            <!-- Departamentos separados -->
            <div class="departamentos w-[850px]">
                <ul class="flex space-x-[30px] flex-wrap">	
                    <li v-for="department in departments" :key="department.id" class="w-[247px] h-[200px] flex flex-col space-y-[15px] mt-[30px]">
                        <h2 class="text-lg text-[#737373] font-semibold">{{ department.name }}</h2>
                        <li v-for="item in department.itens" :key="item.id" class=" ml-[10px] cursor-pointer hover:text-[#F47920] hover:underline">
                            <p class="text-lg text-[#737373] font-normal">{{ item.name }}</p>
                        </li>
                        <div class="flex items-center space-x-[10px] cursor-pointer ">
                            <p class="text-sm text-regular text-[#737373]">Ver mais</p>
                            <font-awesome-icon :icon="['fas', 'angle-down']" class="text-[#F47920]" />
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Coluna de Mais departamentos  -->
             <div class="mt-[30px] space-y-[15px] w-[257px]">
                 <h2 class="text-lg text-[#737373] font-semibold">Mais Departamentos</h2>
                 <ul class="space-y-[18px] ml-[10px]">
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Petshopt</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Produtos Regionais</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Brinquedos e Jogos</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Livros</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Músicas e Hobbies</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Bebês</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Alimentos e Bebidas</p>
                    </li>
                    <li>
                        <p class="text-lg text-[#737373] font-normal">Agro e Indústroa</p>
                    </li>
                 </ul>
                 <p class="text-sm text-regular text-[#737373] underline">Ver todos os departamentos</p>
             </div>
        </div>
        
        <!-- Participantes -->

        <div class="bg-[#FAF7F4] h-[300px]">
            <ul class="flex space-x-[24px] justify-center pt-[30px]">
                <li v-for="empresa in empresas" :key="empresa.id" class="flex flex-col w-[90px] hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <div class="empresa-logo-container bg-red-100 w-[90px] h-[90px] flex items-center justify-center rounded-full">
                        <img :src="empresa.image" alt="Logo da Empresa" class="rounded-full"/>
                    </div>
                    <p class="font-normaltext-base text-[#737373] text-center">{{empresa.name}}</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type {Department} from "@/types/departments.types";
import department from "@/data/departments.json";
import type { Empresas } from "@/types/empresas.types";
import empresa from "@/data/empresas.json";

const departments = ref<Department[]>([]);


onMounted(()=>{
    departments.value = department.map((departmentItem) => (
        {
            ...departmentItem,
        }
    )); 
})

const images = import.meta.glob<{ default: string }>("@/assets/images/empresas/*", { eager: true });


const empresas = ref<Empresas[]>([]);
onMounted(() =>{
    empresas.value = empresa.map((empresaItem) => (
        {
            ...empresaItem,
            image: images[`/src/assets/images/empresas/${empresaItem.image}`]?.default || "",
        }
    ))
})

</script>

<style>
    .container{
        max-width: 1200px;
    }
    p, h2{
        font-family: "Source Sans 3";
    }
    .departamentosList {
        max-height: 600px;
        overflow-y: auto; 
    }
    .empresa-logo-container {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Impede que imagens maiores ultrapassem o círculo */
    }



</style>

