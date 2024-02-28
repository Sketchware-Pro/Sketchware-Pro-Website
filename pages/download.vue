<template>

<div class="dark">

    <div class="flex flex-col gap-4 dark:bg-[#0b1026] text-gray-100">
        <AppHeader />
        
        <div class="p-8 md:p-16">
        <Card class="card-gradient p-6 md:p-16 rounded-3xl">
            <CardHeader>
                <CardTitle class="text-3xl md:text-5xl">Download Sketchware Pro</CardTitle>
                <Separator class="w-40 h-1 bg-blue-600 my-4 md:my-8 border-gradient" />
            </CardHeader>
            <CardContent>
                <CardDescription class="text-xl leading-relaxed mb-8">
                    Sketchware Pro is a powerful Android app that allows you to create apps on your phone or tablet. It is a visual programming language that is easy to learn and use. You can download the latest version of Sketchware Pro from the link below.
                </CardDescription>
                <Button class="bg-blue-600 hover:bg-blue-700 rounded-full p-8 text-xl md:text-2xl tracking-widest font-semibold w-full md:w-auto text-gray-100"
                onclick="window.open('https://github.com/Sketchware-Pro/Sketchware-Pro/releases'); track('download', { location: 'download' });"
                >Download</Button>
            </CardContent>

        </Card>
    </div>


        <AppFooter />
    </div>

</div>

</template>


<script setup lang="ts">

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import type { Button } from '~/components/ui/button';
import { track } from '@vercel/analytics';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'



</script>
