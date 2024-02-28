<template>
    <div class="dark">

        <div class="flex flex-col gap-4 dark:bg-[#0b1026] text-gray-100">
            <AppHeader />

            <div class="p-8 md:p-16 rounded-3xl">
                <CardHeader>
                    <CardTitle class="text-3xl md:text-5xl">Team</CardTitle>
                    <Separator class="w-40 h-1 bg-blue-600 my-4 md:my-8 border-gradient rounded-lg" />
                </CardHeader>
                <CardContent class="md:px-16">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <a v-for="modder in mainModders"
                        :href="'https://github.com/' + modder.login">
                        <Card class="bg-slate-900 border-gray-700 rounded-3xl py-4 md:p-8 hover:bg-slate-800">
                            <CardHeader class="flex items-center gap-4">
                                <Avatar class="w-[100px] h-[100px]">
                                    <AvatarImage :src="modder.avatar_url" alt="@radix-vue" />
                                    <AvatarFallback>{{ modder.login.slice(0, 2) }}</AvatarFallback>
                                </Avatar>
                                <CardTitle>{{ modder.login }}</CardTitle>
                            </CardHeader>
                            <CardContent class="text-center">
                                <CardDescription class="text-lg">{{ modder.contributions }} commits</CardDescription>
                            </CardContent>
                        </Card>
                        </a>
                    </div>
                </CardContent>

                <CardHeader>
                    <CardTitle class="text-2xl md:text-4xl">Contributors</CardTitle>
                    <Separator class="w-20 h-1 bg-[#46d1b0] my-4 md:my-8 rounded-lg" />
                </CardHeader>
                <CardContent class="px-8 md:px-16">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <Card v-for="contributor in contributors" class="bg-[#1a1c2c] py-2 md:p-8 rounded-xl">
                            <CardHeader class="flex items-center gap-4">
                                <Avatar class="w-[100px] h-[100px]">
                                    <AvatarImage :src="contributor.avatar_url" alt="@radix-vue" />
                                    <AvatarFallback>{{ contributor.login.slice(0, 2) }}</AvatarFallback>
                                </Avatar>
                                <CardTitle>{{ contributor.login }}</CardTitle>
                            </CardHeader>
                            <CardContent class="text-center">
                                <CardDescription class="text-lg">{{ contributor.contributions }} commits</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>

            </div>


            <AppFooter />
        </div>

    </div>
</template>
    
    
<script setup lang="ts">

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import { ref, onMounted } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const CONTRIBUTORS_API = 'https://api.github.com/repos/Sketchware-Pro/Sketchware-Pro/contributors'

const mainModders = ref([
    {
        login: 'Pranav Purwar',
        contributions: 100,
        avatar_url: 'https://avatars.githubusercontent.com/u/75154889?v=4'
    }
])

const contributors = ref([
    {
        login: 'John Doe',
        contributions: 100,
        avatar_url: 'https://avatars.githubusercontent.com/u/75154889?v=4'
    }
])

onMounted(async () => {
    const response = await fetch(
        CONTRIBUTORS_API,
        {
            headers: {
                'Accept': 'application/json'
            }
        }
    )
    contributors.value = await response.json()

    mainModders.value = contributors.value.filter(contributor => contributor.contributions >= 50)

    contributors.value = contributors.value.filter(contributor => contributor.contributions <= 50)


    contributors.value.sort((a, b) => b.contributions - a.contributions)
})

</script>
    