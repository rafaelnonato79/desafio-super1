<template>
    <nav class="flex flex-col items-center desktop">
        <div class="bg-[#EAE0D5] flex justify-center items-center h-[108px] w-full">
            <div class="flex justify-start items-center space-x-[30px] container">
                <img 
                src="../assets/images/logo.svg" 
                alt="logo0=-uniclub" 
                class="w-[220px] h-[36.08px] cursor-pointer max-md:w-[180px]"
                onclick="window.location.href='/'">
                <div class="divInput relative max-width-[522px] w-[522px] max-md:w-[450px]">
                    <input type="text" 
                    placeholder="O que você gostaria hoje? " class="bg-white h-[54px] rounded-full px-[20px] text-lg shadow-xl w-full max-md:text-sm max-md:placeholder-transparent"
                    />
                    <img
                    src="../assets/icons/search.svg" 
                    class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"/>
                </div>

                <!-- Localização -->
                <div class="flex justify-between items-center space-x-[10px] cursor-pointer ">
                    <div class="flex justify-between items-center space-x-[10px] cursor-pointer" @click.stop="toggleLocationDropdownd">
                        <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
                            <img src="../assets/icons/localization.svg" alt="">
                        </div>
                        <div class="w-[65px]">
                            <p class="text-base text-[#3F3F3F] font-semibold max-md:text-sm">Onde</p>
                            <p class="text-base text-[#3F3F3F] max-md:text-sm">você está</p>
                        </div>
                    </div>
                    <div v-if="isLocationDropdownOpen" ref="locationRef" class="absolute top-[90px] bg-white shadow-md p-4 rounded-md w-[250px] z-10">
                    <p>Digite seu endereço ou CEP para encontrar lojas próximas.</p>
                    <input type="text" class="border p-2 w-full mt-2" placeholder="Ex: 01000-000">
                    <button class="bg-[#F47920] text-white px-4 py-2 mt-2 w-full rounded-md">Confirmar</button>
                    </div>
                </div>

                <!-- Login -->
                <div class="flex justify-between items-center space-x-[10px] cursor-pointer " >
                    <div class="flex justify-between items-center space-x-[10px] cursor-pointer" @click.stop="toggleLogin">
                        <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
                            <img src="../assets/icons/user.svg" 
                            alt="icone usuario"
                            class="mt-[4px]">
                        </div>
                        <div class="w-[100px]">
                            <p class="text-base text-[#3F3F3F] font-semibold max-md:text-sm">Faça login</p>
                            <p class="text-base text-[#3F3F3F] max-md:text-sm">ou cadastre-se</p>
                        </div>
                    </div>
                    <div v-if="isLoginOpen" ref="loginRef" class="absolute top-[90px] bg-white shadow-md p-4 rounded-md w-[250px] z-10">
                        <input type="text" class="border p-2 w-full" placeholder="Digite seu CPF">
                        <input type="password" class="border p-2 w-full mt-2" placeholder="Digite sua senha">
                        <button class="bg-[#F47920] text-white px-4 py-2 mt-2 w-full rounded-md cursor-pointer">Prosseguir</button>
                    </div>
                </div>
                <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center cursor-pointer" @click.stop="toggleCar">
                    <img src="../assets/icons/car.svg" alt="" class="m-5">
                </div>
            </div>
        </div>
        <div class="bg-[#F7F3EE] h-[60px] flex w-full items-center justify-center" >
            <div class="flex items-center space-x-[30px] container relative">
                <div display="flex" justify="center" items="center" class="flex items-center space-x-[10px] cursor-pointer" @click.stop="toggleMenu()">
                    <font-awesome-icon :icon="['fas', 'bars']" class="text-[#F47920]" />
                    <p class="text-lg font-semibold max-lg:text-md max-md:text-sm">Departamentos</p>
                    <font-awesome-icon :icon="['fas', 'angle-down']" class="text-[#F47920]" />
                </div>
                <div class="h-[30px] w-[2px] bg-[#EAE0D5]"></div>
                <p class="text-lg">Descontos Cliente Unimed Natal</p>
                <p class="absolute right-[40px] text-[#737373] cursor-pointer">Venda no Uniclube</p>
            </div>
        </div>
        <div v-if="isMenuOpen" ref="menuRef">
            <MenuSuspenso v-if="isMenuOpen"/>
        </div>

        
        <Carrinho v-if="isCarOpen" ref="carRef"/>
    </nav>

</template>

<script setup lang="ts">
import Carrinho from '@/components/Carrinho.vue';
import MenuSuspenso from './MenuSuspenso.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false); // para desktop

const menuRef = ref<HTMLElement | null>(null);

const isCarOpen = ref(false);
const carRef = ref<HTMLElement | null>(null);

const toggleCar = () => {
    isCarOpen.value = !isCarOpen.value;
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const isLocationDropdownOpen = ref(false);
const locationRef = ref<HTMLElement | null>(null);

const isLoginOpen = ref(false);
const loginRef = ref<HTMLElement | null>(null);

const toggleLogin = () => {
    isLoginOpen.value = !isLoginOpen.value;
    isLocationDropdownOpen.value = false;
}


const toggleLocationDropdownd = () => {
    isLocationDropdownOpen.value = !isLocationDropdownOpen.value;
    isLoginOpen.value = false;
}

//detectar clique fora

const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        isMenuOpen.value = false;
    }
    if (locationRef.value && !locationRef.value.contains(event.target as Node)) {
        isLocationDropdownOpen.value = false;
    }
    if (loginRef.value && !loginRef.value.contains(event.target as Node)) {
        isLoginOpen.value = false;
    }
}

//Adicionar e remover evento de clique globalmente
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});


</script>

<style scoped>
    .menu-mobile{
        display: none;
    }
    .container{
        max-width: 1200px;
    }
    input::placeholder{
        font-family: "Source Sans 3";
    }   
    p{
        font-family: "Source Sans 3";
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
    }
    @media (max-width: 900px) {
    .container {
        max-width: 800px;
    }
}
    @media (max-width: 800px) {
    .container {
        max-width: 750px;
    }
}
    @media (max-width: 700px) {
        .container {
            max-width: 600px;
        }
        .desktop{
            display: none;
        }
    }
    @media (max-width: 600px) {
        .container {
            max-width: 400px;   
        }
        

}
</style>
