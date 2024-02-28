<template>
    <div class="dark">
        <div class="bg-gray-100 dark:bg-[#0b1026]">
            <AppHeader />

            <Card class="container mx-auto my-8 py-12 px-4 md:p-[2rem] rounded-lg">

                <CardHeader>
                    <CardTitle class="text-3xl md:text-5xl">Disclaimer</CardTitle>
                    <Separator class="w-40 h-1 bg-blue-600 my-8 rounded-lg" />
                </CardHeader>

                <CardContent>

                    <CardDescription class=" dark:text-gray-300 text-lg md:text-2xl tracking-wide">
                        This mod was not meant for any harmful purposes, such as harming Sketchware; Quite the opposite
                        actually. It
                        was made to keep Sketchware alive by the community, for the community. Please use it at your own
                        discretion
                        and consider becoming a Patreon backer of them, for example. Sadly, all other ways to support them
                        aren't working anymore,
                        so it's the only way available currently. Here's their <a
                            href="https://www.patreon.com/sketchware">Patreon</a> page.

                        <br />
                        <br />

                        We love Sketchware very much, and we are grateful to Sketchware's developers for making such an
                        amazing app,
                        but unfortunately, we haven't received updates for a long time. That's why we decided to keep
                        Sketchware
                        alive by making this mod, and we don't demand any money for it. It's completely free ;)

                        <br />
                        <br />

                        Sketchware Pro is not affiliated with Sketchware in any way. Sketchware Pro is a community-driven
                        project
                        that aims to keep Sketchware alive by adding new features and fixing bugs. Sketchware Pro is not a
                        replacement for Sketchware, nor is it a competitor. Sketchware Pro is a mod of Sketchware, and it is
                        recommended to use the official version of Sketchware if you are a beginner. Sketchware Pro is for
                        advanced
                        users who want to use the latest features and bug fixes.
                    </CardDescription>

                </CardContent>
            </Card>
            <AppFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FEATURES } from '@/components/data';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>
