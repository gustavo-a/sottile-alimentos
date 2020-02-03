<template>
  <Layout>
    <div class="h-screen">
      <div class="container mx-auto px-4 pb-10 pt-1 md:pt-10">
        <header class="flex flex-wrap">
          <g-image
            src="../assets/images/logo_sottile.png"
            height="53"
            width="200"
            quality="70"
            alt="Sottile Alimentos"
          ></g-image>
        </header>
      </div>
      <div
        id="thankyou"
        class="container absolute m-auto text-center right-0 left-0"
      >
        <h1 class="text-white text-6xl font-bold">404</h1>
        <h3>Parece que essa página não existe. :(</h3>
        <a
          class="mt-4 inline-block bg-gray-100 border-3 border-red-800 py-3 px-5 rounded-full tracking-wide"
          href="https://sottilealimentos.com.br"
          >Voltar para a página inicial</a
        >
      </div>
      <div class="container mx-auto px-4 py-8">
        <footer class="absolute bottom-0 left-0 ml-10 mb-6">
          <a
            href="https://www.facebook.com/sottilealimento/"
            target="_blank"
            rel="noopener"
            class="svg__icon bg-red-sottile-dark p-3 rounded-full mr-6 inline-block"
          >
            <img src="../assets/images/facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/sottile_alimentos/"
            target="_blank"
            rel="noopener"
            class="svg__icon bg-red-sottile-dark p-3 rounded-full inline-block"
          >
            <img src="../assets/images/instagram.svg" alt="Instagram" />
          </a>
        </footer>
      </div>
      <div class="fixed bottom-0 right-0 m-8 rounded-full shadow-lg">
        <a href="http://wa.me/+552137414013" target="_blank" rel="noopener">
          <g-image
            width="64px"
            src="../assets/images/whatsapp.png"
            alt="Whatsapp"
          ></g-image>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import SottileButton from '~/components/SottileButton'

export default {
  components: {
    SottileButton
  },
  created() {
    this.$gatg.pageview({
      page_path: '/404'
    })
  },
  metaInfo: {
    title: 'Página não encontrada'
  }
}
</script>

<style lang="scss">
#thankyou {
  top: 50%;
  transform: translateY(-50%);
}

.svg__icon {
  max-width: 48px;
}
</style>
