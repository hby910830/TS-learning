import Vue from 'vue'
import Frank from './Frank.vue'

let div = document.createElement('div')
div.id = 'app'
div.textContent = 'Fuck Webpack'
document.body.appendChild(div)

new Vue({
  el: div,
  render: h => h(Frank)
})
