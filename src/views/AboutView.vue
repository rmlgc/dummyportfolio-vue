<template>
  <div class="about">
    <h1>This is a default Vue about page</h1>
    <hr>
    <div class="about-me">
      <h1>Hi, my name is Rommel( Erre ).</h1>
      <p> I told my mom i am a web developer. if you are reading this... Thank you for check my commits</p>
      <p><a href="https://linktr.ee/rommelgc" target="_blank" rel="noopener">Contact with me</a> and let me know you was here :) </p>
    </div>
    <hr>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: column;
    hr{
      width: 100%;
    }
  }
}
</style>
