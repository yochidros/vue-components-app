
Vue.component('fruits-list-content', {
  template: "<fruits-list-title></fruits-list-title>"
})

Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツの一覧です</p>'
})

Vue.component('fruits-list-table', {
  template: '<table><fruits-list-table-content v-for="fruit in fruitsItems" :key="fruit.name" :fruits-item="fruit"></fruits-list-table-content></table>'
})

Vue.component('fruits-list-table-content', {
  props: {
    fruitsItem: {
      type: Object,
      required: true
    }
  },
  template: '<tr> <td>{{ fruitsItem.name }}</td> </tr>',
})

Vue.component('fruits-list', {
  template: '<div><fruits-list-title></fruits-list-title></div>'
})

var vm = new Vue({
  el: '#main',
  data: {
    fruitsItems: [
      {name: 'apple'},
      {name: 'apple'}
    ]
  }
})


