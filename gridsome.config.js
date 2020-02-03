// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Sottile Alimentos',
  siteUrl: 'sotillealimentos.com.br',
  siteDescription:
    'A gente acredita que é possível mudar o mundo, alimentar 7 bilhões de seres humanos de forma sustentável e, ao mesmo tempo, melhorar a saúde e a qualidade de vida das pessoas. Conheça o New Burger!',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/obrigado']
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
