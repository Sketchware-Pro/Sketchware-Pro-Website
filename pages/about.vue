<template>
    <div class="dark">
        <div class="bg-gray-100 dark:bg-[#0b1026]">
            <AppHeader />

            <Card class="container mx-auto py-12 md:border-gradient px-4 md:p-[2rem]">

                <CardHeader>
                    <CardTitle class="text-3xl md:text-5xl">About Sketchware Pro</CardTitle>
                    <Separator class="w-40 h-1 bg-blue-600 my-8 border-gradient" />
                </CardHeader>

                <CardContent>

                    <CardDescription class=" dark:text-gray-300 text-lg md:text-xl leading-loose">
                        Sketchware Pro is a modified version of Sketchware, an Android app development platform. It was
                        created to enhance the functionality and features of the original Sketchware app. Sketchware Pro is
                        an open-source project that is maintained by a community of contributors. The goal of Sketchware Pro
                        is to provide developers with a more powerful and flexible tool for building Android applications.
                        It offers additional features, improvements, and customization options compared to the original
                        Sketchware app. By being open-source, Sketchware Pro allows developers to contribute to its
                        development, fix bugs, and add new features. This collaborative approach ensures that the platform
                        remains up-to-date and responsive to the needs of the developer community. Overall, Sketchware Pro
                        is a valuable resource for Android developers, offering an enhanced development experience and the
                        opportunity to contribute to its ongoing improvement.
                    </CardDescription>

                    <Card class="px-4 mt-8">
                        <Accordion type="single" collapsible class="text-xl text-left">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it safe?</AccordionTrigger>
                                <AccordionContent class="text-gray-400 text-lg px-2">
                                    Yes. Sketchware Pro is safe to use. It is an open-source project, and its source code is
                                    available for review on GitHub.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How is it different from the original Sketchware?</AccordionTrigger>
                                <AccordionContent class="text-gray-400 text-lg px-2">
                                    Sketchware Pro offers additional features, improvements, and customization options
                                    compared to the original Sketchware app. It is an open-source project that is maintained
                                    by a community of contributors.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>How can I contribute to Sketchware Pro?</AccordionTrigger>
                                <AccordionContent class="text-gray-400 text-lg px-2">
                                    You can contribute to Sketchware Pro by fixing bugs, adding new features, and improving
                                    the platform. The source code is available on GitHub, and you can submit pull requests to
                                    contribute to its development.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

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
