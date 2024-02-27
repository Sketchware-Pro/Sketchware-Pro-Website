<template>
  <div class="dark">
  <div class="flex flex-col dark:bg-[#0b1026]">
    <AppHeader />


    <div class="flex flex-col gap-16 p-4 md:p-16">

      <div class="flex flex-col gap-8 rounded-3xl items-center text-center md:p-16 p-8 md:px-64 text-white" style="background-image: url(&quot;https://lh3.googleusercontent.com/2OrUzHCRSI-V46Z1qJBh90usG6OkKwCbXN80FbrjkWoQz4VfoJjNAoQHLHPQRZWH7dI_m5I1gi48h6xMJ5pK6kkdXmUnXPe4VqwvEdo4QeWRjLV9Oew=w2400-rj&quot;);  background-size: cover;">
          <h1 class="font-semibold md:font-bold text-4xl md:text-8xl text-gray-800 md:tracking-wide">Sketchware Pro</h1>
          <p class="text-lg md:text-2xl text-gray-600 tracking-tight md:tracking-wide">
            Sketchware Pro is a powerful Android app that allows you to create apps on your phone or tablet. It is a
            visual programming language that is easy to learn and use.
          </p>

 
          <Button class="bg-blue-600 hover:bg-blue-700 rounded-full p-8 text-xl md:text-2xl tracking-widest font-semibold text-gray-50" onclick="
          window.open('/docs/getting-started');
          ">Get Started</Button>

        </div>

        <div class="grid grid-cols-2 gap-8 p-12">
          <Card v-for="feature in FEATURES" class="text-center p-12 rounded-2xl border-gray-600 border-gradient">
            <CardHeader>
            <CardTitle>{{ feature.title }}</CardTitle>
          </CardHeader>
            <CardDescription class="text-lg mt-4">{{ feature.description }}</CardDescription>
          </Card>
        </div>


    </div>

    <AppFooter />

  </div>
</div>
</template>


<script setup lang="ts">


import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { FEATURES } from '@/components/data';


</script>


<style scoped>

img {
  --b: 5px;  /* the border thickness */
  --d: 20px; /* the distance from the edge */
  --o: 15px; /* the offset on hover */
  --s: 1;    /* the direction of the hover effect (+1 or -1)*/
  
  --_d: calc(var(--d) + var(--s)*1em);
  --_g: calc(100% - 2*(var(--_d) + var(--b)));
  --_m:
    conic-gradient(from 90deg at var(--_d) var(--_d),#0000 25%,#000 0)
     0 0/calc(100% - var(--_d)) calc(100% - var(--_d)),
    linear-gradient(#000 0 0) 50%/var(--_g) var(--_g) no-repeat;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  font-size: 0;
  cursor: pointer;
  transition: .35s;
}
img:hover {
  font-size: var(--o);
}

</style>
