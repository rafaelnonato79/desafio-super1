<template>
    <!-- Mobile -->

     <div
     v-if="isMenuOpen" 
     class=" menu-mobile bg-[#F7F3EE] w-[350px] h-full  flex flex-col fixed left-0 top-0 z-50" style="box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);">

        <div class="text-xl text-[#737373] ml-[90%]" @click="fecharMenu" v-bind="$attrs" >X</div>

        <h2 class="text-black font-bold ml-[10px]">Departamentos</h2>
      

        <ul class="ml-[10px] space-y-[10px] mt-[20px]">
            <li v-for="department in departments" :key="department.id" class="departamento">
                <p class="text-lg text-[#737373] font-normal">{{ department.name }}</p>
            </li>
        </ul>

        <!-- mais departamentos -->
        <ul class="space-y-[10px] ml-[10px] mt-[10px]">
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Petshopt</p>
            </li>
            
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Produtos Regionais</p>
            </li>
            <li class="departamento"> 
                <p class="text-lg text-[#737373] font-normal">Brinquedos e Jogos</p>
            </li >
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Livros</p>
            </li>
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Músicas e Hobbies</p>
            </li>
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Bebês</p>
            </li>
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Alimentos e Bebidas</p>
            </li>
            <li class="departamento">
                <p class="text-lg text-[#737373] font-normal">Agro e Indústroa</p>
            </li>
        </ul>
        <p class="text-sm text-regular text-[#737373] underline ml-[10px] mt-[10px]">Ver todos os departamentos</p>

        <!-- Participantes -->

        <div class="bg-[#FAF7F4] h-[300px]">
            <ul class="flex space-x-[24px] justify-center pt-[30px] flex-wrap">
                <li v-for="empresa in empresas" :key="empresa.id" class="flex flex-col items-center w-[80px] hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <div class="flex rounded-full w-[60px] h-[60px] items-center justify-center">
                        <img :src="empresa.image" alt="Logo da Empresa" class="rounded-full w-[70px] "/>
                    </div>
                    <p class="font-normal text-sm text-[#737373] text-center">{{empresa.name}}</p>
                </li>

            </ul>
        </div>

        <!-- descontos e vendas -->
         <div class="mt-[200px] ml-[10px]">
             <ul class="space-y-[10px] ml-[10px] mt-[10px]">
                <li class="departamento">
                    <p class="text-lg text-[#737373] font-normal">Descontos Clientes Unimed Natal</p>
                </li>
                <li class="departamento">
                    <p class="text-lg text-[#737373] font-normal">Vendas no Uniclub</p>
                </li>
             </ul>
         </div>
     </div>


    <!--------------- Desktop --------------->

    <div class="menuDesktop container departamentosList bg-white h-[800px]"style="box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);">
        <div class="content flex rounded-sm ml-[66px] h-[477px]">
            <!-- Departamentos separados -->
            <div class="departamentos w-[850px]">
                <ul class="flex space-x-[30px] flex-wrap space-y-[30px]">	
                    <li v-for="department in departments" :key="department.id" class=" w-[247px] h-[200px] flex flex-col space-y-[15px] mt-[30px]">
                        <h2 class="text-lg text-[#737373] font-semibold">{{ department.name }}</h2>
                        <li v-for="item in department.itens" :key="item.id" class="departamento ml-[10px] cursor-pointer hover:text-[#F47920] hover:underline">
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
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Petshopt</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Produtos Regionais</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Brinquedos e Jogos</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Livros</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Músicas e Hobbies</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Bebês</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Alimentos e Bebidas</p>
                    </li>
                    <li class="departamento">
                        <p class="text-lg text-[#737373] font-normal">Agro e Indústroa</p>
                    </li>
                 </ul>
                 <p class="text-sm text-regular text-[#737373] underline">Ver todos os departamentos</p>
             </div>
        </div>
        
        <!-- Participantes -->

        <div class="bg-[#FAF7F4] h-[300px] mt-[100px]">
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
    <slot></slot>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type {Department} from "@/types/departments.types";
import department from "@/data/departments.json";
import type { Empresas } from "@/types/empresas.types";
import empresa from "@/data/empresas.json";

const departments = ref<Department[]>([]);

const isMenuOpen = ref(true);


function fecharMenu() {
    isMenuOpen.value = false;
}

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

<style scoped>
    .menu-mobile{
        display: none;
        overflow-y: auto; 
    }
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
    }
    .departamento::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #EAE0D5;
        margin-top: 10px;
    }

    @media (max-width: 700px) {
        .menuDesktop{
            display: none;
        }
        .menu-mobile{
            display: block;
        }
    }

</style>

