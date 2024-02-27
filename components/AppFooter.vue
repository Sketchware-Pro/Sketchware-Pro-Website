<template>

<div class="px-[8%]">
    <Separator />
</div>

    <footer class="flex flex-col gap-6 text-gray-600 bottom-0 w-full p-8">
        <div class="flex md:justify-between gap-2 md:gap-8">

            <div class="hidden md:flex flex-col gap-2">
                <img class="h-16 w-16"
                    src="https://raw.githubusercontent.com/Sketchware-Pro/Sketchware-Pro/main/assets/Sketchware-Pro.png"
                    alt="Logo" />
                <h1 class="font-bold text-xl text-gray-800 dark:text-gray-300">Sketchware Pro</h1>
                <p class="font-sm leading-7 dark:text-gray-400">© 2024-2025 Sketchware Pro</p>
            </div>

            <div class="flex flex-col md:flex-row gap-8 md:gap-32 mr-8">
                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-lg md:text-xl text-gray-700 dark:text-gray-200">Sketchware Pro</h1>
                    <a v-for="item in SWPRO" :href="item.link"
                    class="text-md md:text-lg font-medium leading-7 text-blue-500 dark:text-blue-400 hover:text-gray-800 hover:underline dark:hover:text-blue-500">
                    {{ item.title }}</a>
                </div>
                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-lg md:text-xl text-gray-700 dark:text-gray-200">Community</h1>
                    <a v-for="item in COMMUNITY" :href="item.link"
                    class="text-md md:text-lg font-medium leading-7 text-blue-500 dark:text-blue-400 hover:text-gray-800 hover:underline dark:hover:text-blue-500">
                    {{ item.title }} </a>
                </div>
                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-lg md:text-xl text-gray-700 dark:text-gray-200">More</h1>
                    <a v-for="item in MORE" :href="item.link"
                    class="text-md md:text-lg font-medium leading-7 text-blue-500 dark:text-blue-400 hover:text-gray-800 hover:underline dark:hover:text-blue-500">
                    {{ item.title }} </a>
                </div>
                </div>
        </div>

        <div class="text-center">
            <p class="text-md md:text-lg text-gray-500 dark:text-gray-400">© 2024-2025 Sketchware Pro</p>
        </div>
    </footer>
</template>
  
<script setup lang="ts">

import { SWPRO, COMMUNITY, MORE } from './data'
import { Separator } from '@/components/ui/separator'


</script>
  
<style scoped></style>