<template>
  <Layout>
    <div class="h-screen">
      <div class="container mx-auto px-4 pb-10 pt-1 md:pt-10">
        <header class="flex flex-wrap">
          <g-image src="../assets/images/logo_sottile.png" height="53" width="200" quality="70" alt="Sottile Alimentos"></g-image>
        </header>
      </div>
      <div id="thankyou" class="container absolute m-auto text-center right-0 left-0">
        <h1 class="text-white text-6xl font-bold">Obrigado!</h1>
        <h3>Voce será redirecionado de volta ao site</h3>
      </div>
      <div class="container mx-auto px-4 py-8">
        <footer class="absolute bottom-0 left-0 ml-10 mb-6">
          <a href="https://www.facebook.com/sottilealimento/" target="_blank" class="svg__icon bg-red-sottile-dark p-3 rounded-full mr-6 inline-block">
            <img src="../assets/images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/sottile_alimentos/" target="_blank" class="svg__icon bg-red-sottile-dark p-3 rounded-full inline-block">
            <img src="../assets/images/instagram.svg" alt="Instagram" />
          </a>
        </footer>
      </div>
      <div class="fixed bottom-0 right-0 m-8 rounded-full shadow-lg">
        <a href="http://wa.me/+552137414013" target="_blank">
          <g-image width="64px" src="../assets/images/whatsapp.png" alt="Whatsapp"></g-image>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import SottileButton from '~/components/SottileButton'

export default {
  components:{
    SottileButton
  },
  mounted(){
    setTimeout(() => {
      window.history.back();
    }, 3000);
  },
  metaInfo: {
    title: 'Obrigado!'
  }
}
</script>

<style lang="scss">
  #thankyou{
    top: 50%;
    transform: translateY(-50%);
  }

  .svg__icon{
    max-width: 48px;
  }
</style>
