<template>

    <header class="p-2 md:p-4 backdrop-blur-xl sticky top-0">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <img class="h-12 md:h-16 md:w-16"
                    src="https://raw.githubusercontent.com/Sketchware-Pro/Sketchware-Pro/main/assets/Sketchware-Pro.png"
                    alt="Logo" />
                <a href="/"
                    class="scroll-m-20 text-2xl md:text-4xl font-semibold tracking-wide transition-colors text-[#2394FF] hover:underline">Sketchware
                    <span class="scroll-m-20 text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Pro</span>
                </a>
            </div>
            <nav class="hidden md:flex gap-6 text-gray-600 dark:text-gray-200 justify-center items-center">
                <a v-for="header in HEADERS" :key="header.title" :href="header.link"
                    class="text-2xl font-semibold text-center no-underline hover:underline font-sans">{{ header.title }}</a>
            </nav>

            <Sheet>
                <SheetTrigger class="md:hidden">
                    <img class="h-8 w-8 dark:invert" src="/svg/menu.svg" alt="Menu" />
                </SheetTrigger>

                <SheetContent class="bg-green-200 text-gray-200 p-4 rounded-s-3xl flex flex-col justify-between">
                        <div class="flex flex-col gap-4 py-8">

                            <div v-for="header in HEADERS" class="flex items-center gap-2 text-left rounded-3xl bg-green-300 text-xl font-medium hover:underline p-4 text-gray-600">
                                <img class="h-8 w-8 p-1" :src="header.icon" :alt="header.title"  />
                                <a  :href="header.link" class="no-underline">{{ header.title }}</a>
                            </div>
                        </div>

                        <Button class="rounded-full p-4 text-lg tracking-widest font-semibold border-gray-400 text-gray-600 toggle" variant="outline" >
                            Switch to Light Mode
                        </Button>
                </SheetContent>
            </Sheet>
        </div>

    </header>
</template>
  
<script setup lang="ts">

import { HEADERS } from './data'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

</script>
  
<style scoped>
/* Add any necessary styles here */
</style>