<template>
    <header class="p-2 md:p-4 backdrop-blur-xl sticky top-0">
        <SpeedInsights />

        <div class="flex items-center justify-between gap-4 pr-4">
            <div class="flex items-center gap-4 p-1">
                <img class="h-10 md:h-16 md:w-16"
                    src="https://raw.githubusercontent.com/Sketchware-Pro/Sketchware-Pro/main/assets/Sketchware-Pro.png"
                    alt="Logo" />
                <a href="/"
                    class="scroll-m-20 text-2xl md:text-4xl transition-colors text-[#2394FF] hover:underline">Sketchware
                    <span class="scroll-m-20 text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Pro</span>
                </a>
            </div>
            <nav class="hidden md:flex gap-4 text-gray-600 dark:text-gray-200 justify-center items-center ">
                <a v-for="header in HEADERS" :key="header.title" :href="header.link"
                    class="text-xl font-semibold text-center no-underline hover:underline font-mono">{{ header.title }}</a>
            </nav>

            <Sheet>
                <SheetTrigger class="md:hidden">
                    <img class="h-8 w-8 dark:invert" src="/svg/menu.svg" alt="Menu" />
                </SheetTrigger>

                <SheetContent class="bg-slate-800 p-4 flex flex-col rounded-s-3xl">

                <SheetHeader class="text-gray-200">
                    <SheetTitle class="text-2xl font-semibold text-gray-300">Menu</SheetTitle>
                </SheetHeader>

                        <div class="flex flex-col gap-4 py-8">

                            <a v-for="header in HEADERS" class="flex items-center gap-2 text-left rounded-3xl bg-slate-950 text-xl font-medium hover:underline p-4 text-gray-400" :href="header.link">
                                <img class="h-8 w-8 p-1 invert" :src="header.icon" :alt="header.title"  />
                                {{ header.title }}
                            </a>
                        </div>
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
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>
  
<style scoped>
/* Add any necessary styles here */
</style>