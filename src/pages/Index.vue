<template>
  <Layout>
    <div class="container mx-auto px-4 pb-10 pt-1 md:pt-10">
      <header class="flex flex-wrap justify-between py-4">
        <g-image
          src="../assets/images/logo_sottile2.png"
          width="200"
          quality="70"
          alt="Sottile Alimentos"
        ></g-image>
        <div class="w-full sm:w-auto mt-8 sm:mt-0 self-center">
          <sottile-button href="#contato"
            ><strong style="font-weight:600"
              >Quer vender nossos produtos?</strong
            ></sottile-button
          >
        </div>
      </header>
    </div>
    <div class="container w-full mx-auto pt-8 pb-32 px-4">
      <section class="flex flex-wrap">
        <div class="w-full md:w-6/12">
          <g-image
            src="../assets/images/muito_prazer.png"
            alt="Muito prazer"
          ></g-image>
          <g-image
            class="mt-40 sm:mt-48 md:mt-8"
            src="../assets/images/sottile.png"
            alt="somos a Sottile"
          ></g-image>
          <h1 class="sr-only">Muito prazer, somos a Sottile</h1>
          <p class="mt-8 text-gray-100 text-3xl tracking-widest">
            Vem aí um <strong>novo site</strong>.
          </p>
        </div>
        <div class="w-full md:w-6/12">
          <g-image
            id="selo_img"
            data-rate="-0.3"
            class="parallax absolute mt-32 sm:mt-0 md:mt-40 lg:mt-16"
            src="../assets/images/selo.png"
            alt="Selo 100% vegetal"
          ></g-image>
          <g-image
            id="burger_img"
            data-rate="-0.5"
            class="parallax absolute right-0 mt-24 sm:mt-0 md:mt-32 lg:mt-0"
            src="../assets/images/hamburguer.png"
            alt="Mão segurando o New Burger da Sottile Alimentos"
          ></g-image>
          <g-image
            id="newburger_img"
            data-rate="-0.6"
            class="parallax absolute mt-20 md:mt-32 lg:mt-16"
            src="../assets/images/newburger.png"
            alt="Marca NewBurger"
          ></g-image>
        </div>
      </section>
    </div>
    <div class="container w-full mx-auto md:px-4 pb-8">
      <section class="bg-red-sottile-dark py-24 md:py-32 px-12">
        <div id="contato" class="pb-16">
          <g-image src="../assets/images/contato.png" alt="Contato"></g-image>
          <h2 class="sr-only">Contato</h2>
        </div>
        <form
          id="contact"
          @submit.prevent="handleSubmit"
          class="w-full text-white"
          name="contact"
          action="/obrigado"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="flex flex-wrap w-full">
            <div class="w-full sm:w-6/12 lg:w-5/12 lg:pr-4">
              <div class="hidden">
                <label for="bot-field"
                  >Don’t fill this out if you're human:</label
                >
                <input name="bot-field" />
              </div>

              <label for="contact_name" class="sr-only">Nome</label>
              <input
                placeholder="Nome"
                required
                name="nome"
                id="contact_name"
                class="placeholder-white w-full sm:w-10/12 py-3 px-4 mb-5 bg-transparent border border-gray-300 rounded-lg"
                type="text"
                v-model="formData.nome"
              />

              <label for="contact_empresa" class="sr-only">Empresa</label>
              <input
                placeholder="Empresa"
                required
                class="placeholder-white w-full sm:w-10/12 py-3 px-4 mb-5 bg-transparent border border-gray-300 rounded-lg"
                name="empresa"
                id="contact_empresa"
                type="text"
                v-model="formData.empresa"
              />

              <label for="contact_telefoone" class="sr-only">Telefone</label>
              <input
                placeholder="Telefone"
                required
                class="placeholder-white w-full sm:w-10/12 py-3 px-4 mb-5 bg-transparent border border-gray-300 rounded-lg"
                name="telefone"
                id="contact_telefoone"
                type="text"
                v-model="formData.telefone"
              />

              <label for="contact_email" class="sr-only">E-mail</label>
              <input
                placeholder="E-mail"
                required
                class="placeholder-white w-full sm:w-10/12 py-3 px-4 bg-transparent border border-gray-300 rounded-lg"
                name="email"
                id="contact_email"
                type="mail"
                v-model="formData.email"
              />
            </div>
            <div class="w-full mt-8 sm:mt-0 sm:w-6/12 lg:w-5/12">
              <label for="contact_mensagem" class="sr-only">E-mail</label>
              <textarea
                form="contact"
                id="contact_mensagem"
                placeholder="Mensagem"
                required
                class="placeholder-white w-full sm:w-10/12 h-full py-3 px-4 bg-transparent border border-gray-300 rounded-lg"
                name="mensagem"
                v-model="formData.mensagem"
              ></textarea>
            </div>
            <div class="w-full mt-8 lg:w-2/12 lg-mt-0 self-end">
              <button
                class="bg-red-sottile border-3 border-red-800 py-3 px-5 rounded-full tracking-widest"
                type="submit"
              >
                <strong>Enviar</strong>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="container w-full mx-auto px-4 py-8">
      <footer>
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
  </Layout>
</template>

<script>
import SottileButton from '~/components/SottileButton'

export default {
  components: {
    SottileButton
  },
  data() {
    return {
      formData: {}
    }
  },
  metaInfo: {
    title: 'Conheça o New Burger',
    link: [{ rel: 'canonical', href: 'https://sottilealimentos.com.br' }]
  },
  methods: {
    smoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault()

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          })
        })
      })
    },
    parallaxBurger() {
      window.addEventListener('scroll', e => {
        const target = document.querySelectorAll('.parallax')
        let scrolled = window.pageYOffset

        for (let i = 0; i < target.length; i++) {
          let pos = scrolled * target[i].dataset.rate

          target[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)'
        }
      })
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(
          () =>
            (window.location.href = 'https://sottilealimentos.com.br/obrigado')
        )
        .catch(error => alert(error))
    }
  },
  mounted() {
    this.smoothScroll()
    this.parallaxBurger()
  }
}
</script>

<style lang="scss">
.parallax {
  transition: transform 0.1s;
}

#selo_img {
  top: 450px;
  left: 0;
  max-width: 25vw;

  @media screen and (min-width: 640px) {
    right: 60%;
    left: unset;
    top: 450px;
  }

  @media screen and (min-width: 768px) {
    right: 35%;
    max-width: 18vw;
    top: unset;
  }

  @media screen and (min-width: 1024px) {
    right: 45%;
    max-width: 20vw;
  }
}

#newburger_img {
  right: 10%;
  top: 400px;
  max-width: 25vw;

  @media screen and (min-width: 640px) {
    right: 15%;
    top: 400px;
    max-width: 20vw;
  }

  @media screen and (min-width: 768px) {
    right: 10%;
    top: unset;
    max-width: 15vw;
  }
}

#burger_img {
  max-width: 90vw;
  top: 400px;

  @media screen and (min-width: 640px) {
    max-width: 70vw;
  }

  @media screen and (min-width: 768px) {
    max-width: 50vw;
    top: unset;
  }

  @media screen and (min-width: 1024px) {
    max-width: 60vw;
  }

  @media screen and (min-width: 1920px) {
    width: 55vw;
    max-width: 1300px;
  }
}

.svg__icon {
  max-width: 48px;
}
</style>
