<script setup lang="ts">
import {ref} from 'vue'

const tab = ref('vue')
</script>
<template>
  <section class="container">
    <div class="q-pa-md">
      <q-card class="my-card q-mx-auto ">
        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="About Vue" name="vue"/>
          <q-tab label="About me" name="me"/>
        </q-tabs>
        <q-separator/>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="vue">
            <h2 class="text-h4">This is a default Vue about page</h2>
            <p>
              The QCard component is a great way to display important pieces of grouped content.
            </p>
          </q-tab-panel>
          <q-tab-panel name="me">
            <h2 class="text-h4">Hi, my name is Rommel( Erre ).</h2>
            <p> I told my mom i am a web developer. if you are reading this... Thank you for check my commits</p>
            <p>
              <a href="https://linktr.ee/rommelgc" target="_blank" rel="noopener">Contact with me</a> and let me know
              you
              was here :)
            </p>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </section>
</template>

<style lang="scss">
.my-card {
  max-width: 300px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: column;

    hr {
      width: 100%;
    }
  }
}
</style>
