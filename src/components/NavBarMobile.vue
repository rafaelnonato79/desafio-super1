<template>
    <nav class="flex flex-col items-center menu-mobile">
        <div class="bg-[#EAE0D5] flex justify-center items-center h-[50px] w-full px-[10px]">
            <div class="flex justify-center items-center space-x-[10px] container ">
                <div @click.stop="toggleMenu()" class="cursor-pointer menu-mobile w-[36px] h-[36px] flex justify-center items-center pt-[5px]">
                    <font-awesome-icon :icon="['fas', 'bars']" class="text-[#F47920]"/>
                </div>

                <MenuSuspenso class="menuMobile" v-if="isMenuOpen"/>

                <img 
                src="../assets/images/logo.svg" 
                alt="logo0=-uniclub" 
                class="h-[20px]"
                onclick="window.location.href='/'">

                <div class="flex w-full items-end justify-end space-x-[10px] cursor-pointer ">
                    
                    <!-- Buscar -->
                     <div>
                         <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center p-[10px] cursor-pointer" @click.stop="toggleSearch">
                             <font-awesome-icon 
                             :icon="['fas', 'magnifying-glass']" 
                             class="text-[#F47920]"/>    
                         </div>
                         <div v-if="isSearchOpen" ref="searchRef" class="absolute top-[60px] right-0 bg-white shadow-md p-4 rounded-md w-[250px] z-10">
                             <input type="text" class="border p-2 w-full" placeholder="O que você procura?">
                             <button class="bg-[#F47920] text-white px-4 py-2 mt-2 w-full rounded-md">Buscar</button>
                         </div>
                     </div>

                     <!-- Login -->
                    <div>
                        <div class="flex justify-between items-center space-x-[10px] cursor-pointer " @click.stop="toggleLogin">
                            <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                <img src="../assets/icons/user.svg" 
                                alt="icone usuario"
                                class="mt-[4px]">
                            </div>
                        </div>
                        <div v-if="isLoginOpen" ref="loginRef" class="absolute top-[60px] right-0 bg-white shadow-md p-4 rounded-md w-[250px] z-10">
                            <input type="text" class="border p-2 w-full" placeholder="Digite seu CPF">
                            <input type="password" class="border p-2 w-full mt-2" placeholder="Digite sua senha">
                            <button class="bg-[#F47920] text-white px-4 py-2 mt-2 w-full rounded-md">Prosseguir</button>
                         </div>
                    </div>

                    <!-- CARRINHO -->
                    <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center cursor-pointer" @click.stop="toggleCar">
                        <img src="../assets/icons/car.svg" alt="">
                    </div>
                </div>
                </div>
        </div>



        <div class="bg-[#F7F3EE] h-[40px] flex w-full items-center justify-center" >
            
            <!-- Localizacao -->
            <div class="flex items-center space-x-[30px] container relative localizacao">
                <div class="localizacao flex items-center space-x-[10px] cursor-pointer" @click.stop="toggleLocationDropdownd">
                    <div class="bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
                        <img src="../assets/icons/localization.svg" alt="">
                    </div>
                    <p>Onde você está?</p>
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
                <div v-if="isLocationDropdownOpen" ref="locationRef" class="absolute top-[50px] left-0 bg-white shadow-md p-4 rounded-md w-[250px]">
                    <p>Digite seu endereço ou CEP para encontrar lojas próximas.</p>
                    <input type="text" class="border p-2 w-full mt-2" placeholder="Ex: 01000-000">
                    <button class="bg-[#F47920] text-white px-4 py-2 mt-2 w-full rounded-md">Confirmar</button>
                </div>
            </div>

        </div>
        <div v-if="isMenuOpen" ref="menuRef">
            <MenuSuspenso v-if="isMenuOpen"/>
        </div>
            <Carrinho v-if="isCarOpen" ref="carRef"/>
    </nav>

</template>

<script setup lang="ts">
import MenuSuspenso from './MenuSuspenso.vue';
import Carrinho from './Carrinho.vue';



import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false); // para desktop
const menuRef = ref<HTMLElement | null>(null);

const isLocationDropdownOpen = ref(false);
const locationRef = ref<HTMLElement | null>(null);

const isSearchOpen = ref(false);
const searchRef = ref<HTMLElement | null>(null);

const isLoginOpen = ref(false);
const loginRef = ref<HTMLElement | null>(null);

const isCarOpen = ref(false);
const carRef = ref<HTMLElement | null>(null);

const toggleCar = () => {
    isCarOpen.value = !isCarOpen.value;
    isLocationDropdownOpen.value = false;
    isLoginOpen.value = false;
    isSearchOpen.value = false;
}

const toggleLogin = () => {
    isLoginOpen.value = !isLoginOpen.value;
    isSearchOpen.value = false;
    isLocationDropdownOpen.value = false;
}

const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
    isLocationDropdownOpen.value = false;
    isLoginOpen.value = false;
}

const toggleLocationDropdownd = () => {
    isLocationDropdownOpen.value = !isLocationDropdownOpen.value;
    isSearchOpen.value = false;
    isLoginOpen.value = false;
}
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    isLocationDropdownOpen.value = false;
    isLoginOpen.value = false;
    isSearchOpen.value = false;
}

//detectar clique fora

const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        isMenuOpen.value = false;
    }
    if (locationRef.value && !locationRef.value.contains(event.target as Node)) {
        isLocationDropdownOpen.value = false;
    }
    if (searchRef.value && !searchRef.value.contains(event.target as Node)) {
        isSearchOpen.value = false;
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
    @media (max-width: 700px) {
        .container {
            max-width: 600px;
        }
        .menu-mobile{
            display: block;
        }
    }
        
    @media (max-width:600px) {
        .container {
            max-width: 400px;
        }
        
    }
</style>