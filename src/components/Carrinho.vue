<template>
    
    <div class="bg-[#FAF7F4] w-[423px] max-md:w-[100vw] h-[100vh] fixed top-0 right-0 z-50" v-if="isCarOpen" ref="carRef">
        <div class="bg-orange-500 h-[8px]">
        </div>
        <div class="content p-[20px]">
            <div class="flex items-center">
                <img src="../assets/images/logoCarrinho.png" alt="logo" class="w-[42px]">
                <img src="../assets/images/passo-carrinho.png" alt="" class="ml-[25px]">
                <p class="absolute right-5 cursor-pointer" @click="toggleCar">X</p>
            </div>
            <div class="mt-[40px] flex items-center space-x-[10px]">
                <h1 class="text-[#F47920] text-3xl font-bold">Carrinho</h1>
                <span class="text-sm text-[#737373]">(7 Itens)</span>
            </div>
            
            <!-- PRODUTOS  -->
            <div class="produtos mt-[20px] bg-white space-y-[20px]">
                <div class="produto flex h-[120px] bg-white">
                    <img src="../assets/images/produtos/bolsa.svg" alt="">
                    <div class="w-full flex flex-col justify-center">
                        <div class="flex justify-between">
                            <p class="text-[#3F3F3F] font-semibold text-base w-[219px]">Bolsa Feminina Sacola Grande Matelassê Preto de telinha e c...</p>
                            <font-awesome-icon class="mt-[10px] text-[#737373] cursor-pointer" :icon="['fas', 'trash-can']" />
                        </div>
                        <p class="text-sm text-[#737373] mt-[5px]">G, Azul</p>
                        <div class="flex mt-[15px] justify-between items-center pr-[20px]">
                            <div  class="flex items-center space-x-[10px]">
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">-</button>
                                <span class="text-[#3F3F3F]">1</span>
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">+</button>
                            </div>
                            <div class="flex space-x-[10px] items-center">
                                <p class="line-through text-sm text-[#737373]">R$ 200,00</p>
                                <p class="text-sm">R$ 195,00</p>
                            </div>
                        </div>
                    </div>     
                </div>


                <div class="flex h-[120px] bg-white produto">
                    <img src="../assets/images/produtos/brinquedo.png" alt="">
                    <div class="w-full flex flex-col justify-center">
                        <div class="flex justify-between">
                            <p class="text-[#3F3F3F] font-semibold text-base w-[219px]">Brinquedo de Atividades Bebê Box </p>
                            <font-awesome-icon class="mt-[10px] text-[#737373] cursor-pointer" :icon="['fas', 'trash-can']" />
                        </div>
                        <p class="text-sm text-[#C02E34] mt-[5px]">Disponível em 10 dias</p>
                        <div class="flex mt-[15px] justify-between items-center pr-[20px]">
                            <div  class="flex items-center space-x-[10px]">
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">-</button>
                                <span class="text-[#3F3F3F]">1</span>
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">+</button>
                            </div>
                            <div class="flex space-x-[10px] items-center">
                                <p class="line-through text-sm text-[#737373]"></p>
                                <p class="text-sm">R$ 99,00</p>
                            </div>
                        </div>
                    </div>     
                </div>

                <div class="flex h-[120px] bg-white produto">
                    <img src="../assets/images/produtos/lencol.png" alt="">
                    <div class="w-full flex flex-col justify-center">
                        <div class="flex justify-between">
                            <p class="text-[#3F3F3F] font-semibold text-base w-[219px]">Lençol Elástico Avulso 300 Fios Casa Rio Bege Claro</p>
                            <font-awesome-icon class="mt-[10px] text-[#737373] cursor-pointer" :icon="['fas', 'trash-can']" />
                        </div>
                        <p class="text-sm text-[#737373] mt-[5px]">Queen, Bege</p>
                        <div class="flex mt-[15px] justify-between items-center pr-[20px]">
                            <div  class="flex items-center space-x-[10px]">
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">-</button>
                                <span class="text-[#3F3F3F]">1</span>
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">+</button>
                            </div>
                            <div class="flex space-x-[10px] items-center">
                                <p class="line-through text-sm text-[#737373]"></p>
                                <p class="text-sm">R$ 35,00</p>
                            </div>
                        </div>
                    </div>     
                </div>

                <div class="flex h-[120px] bg-white produto">
                    <img src="../assets/images/produtos/mousse.png" alt="">
                    <div class="w-full flex flex-col justify-center">
                        <div class="flex justify-between">
                            <p class="text-[#3F3F3F] font-semibold text-base w-[219px]">Mouse logitech usb bluetooth sem fio adaptador</p>
                            <font-awesome-icon class="mt-[10px] text-[#737373] cursor-pointer" :icon="['fas', 'trash-can']" />
                        </div>
                        <p class="text-sm text-[#C02E34] mt-[5px]"></p>
                        <div class="flex mt-[15px] justify-between items-center pr-[20px]">
                            <div  class="flex items-center space-x-[10px]">
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">-</button>
                                <span class="text-[#3F3F3F]">1</span>
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">+</button>
                            </div>
                            <div class="flex space-x-[10px] items-center">
                                <p class="line-through text-sm text-[#737373]"></p>
                                <p class="text-sm">R$ 99,00</p>
                            </div>
                        </div>
                    </div>     
                </div>


                

                <div class="flex h-[120px] bg-white produto">
                    <img src="../assets/images/produtos/voucher.png" alt="">
                    <div class="w-full flex flex-col justify-center">
                        <div class="flex justify-between">
                            <p class="text-[#3F3F3F] font-semibold text-base w-[219px]">Voucher Univacinas Hepatite A </p>
                            <font-awesome-icon class="mt-[10px] text-[#737373] cursor-pointer" :icon="['fas', 'trash-can']" />
                        </div>
                        <p class="text-sm text-[#C02E34] mt-[5px]"></p>
                        <div class="flex mt-[15px] justify-between items-center pr-[20px]">
                            <div  class="flex items-center space-x-[10px]">
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">-</button>
                                <span class="text-[#3F3F3F]">1</span>
                                <button class="rounded-full border border-solid border-[#F47920] w-[25px] h-[25px] flex items-center justify-center text-[#F47920] font-bold text-lg cursor-pointer">+</button>
                            </div>
                            <div class="flex space-x-[10px] items-center">
                                <p class="line-through text-sm text-[#737373]"></p>
                                <p class="text-sm">R$ 99,00</p>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>

            <!-- Calculo de frete -->
             <div class="absolute bottom-0 w-full pb-[20px]">
                 <div class="frete bg-[#FAF7F4] h-[150px] relative ">
                    <div class="space-y-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#E5E5E5] after:absolute after:left-0 after:top-full after:mt-[10px]">
                        <div class="flex items-center justify-between pr-[40px] cursor-pointer"  >
                            <div class="flex space-x-[10px] items-center justify-center" @click="toggleFrete">
                                <img src="../assets/icons/truck.svg" alt="truck">
                                <p class="text-[#737373]">Calcule fretes e prazos</p>
                                <font-awesome-icon class="text-[#737373]" :icon="['fas', 'angle-down']" />
                            </div>
                            <p class="text-[#737373]">---</p>
                        </div>
                        <div class="relative" v-if="isFreteOpen" ref="freteRef">
                            <input class="bg-white w-[90%] h-[45px] rounded-full border-1 border-[#F47920] pl-[10px]" placeholder="Digite seu CEP" type="text">
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="absolute top-4 right-15 text-[#F47920] cursor-pointer" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between pr-[40px] mt-[20px] mb-[20px]">
                        <p class="text-[#737373] font-semibold text-base">Subtotal</p>
                        <p class="text-[#737373] font-semibold" >R$ 439,90</p>
                    </div>
                 </div>
             </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isCarOpen = ref(true);
const carRef = ref<HTMLElement | null>(null);

const toggleCar = () => {
    isCarOpen.value = !isCarOpen.value;
}


const isFreteOpen = ref(false);
const freteRef =  ref<HTMLElement | null>(null);


const toggleFrete = () => {
isFreteOpen.value = !isFreteOpen.value;
}
</script>

<style>
h1, span, p{
    font-family: "Source Sans 3";
}
.frete::after{
    content: '';
    border-top: 1px solid #F47920;
    width: full;
    height: 2px;
}

.produto::after{
    content: '';
    border-bottom: 1px solid #F47920;
    width: full;
    height: 2px;
}

.produtos {
    max-height: 400px;
    overflow-y: auto; 
    padding-right: 10px;
}

</style>
