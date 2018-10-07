
Vue.component('fruits-list-content', {
  template: "<fruits-list-title></fruits-list-title>"
})

var FruitsListTitle = Vue.extend({
  template: '<h1>フルーツ一覧</h1>'
})

var FruitsListDescription = Vue.extend({
  template: '<p>季節の代表的なフルーツの一覧です</p>'
})


Vue.component('fruits-list', {
  template: '<div><fruits-list-title></fruits-list-title></div>'
})

Vue.component('input-date-with-today', {
  render: function (createElement) {
    return createElement(
      'input',
      {
        attrs: {
          type: 'date',
          value: new Date().toISOString().substring(0,10)
        }
      }
    )
  }
})

Vue.component('simple-counter', {
  template: '<h1>fruits list</h1>',
  data: function() {
    return {
      fruits: ['apple', 'orange']
    }
  }
})

Vue.component('fruits-items-name',{
  props: {
    fruitsItem: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{fruitsItem.name}}</li>'
})

var counterButton = Vue.extend({
  template: '<span>{{counter}}個<button v-on:click="addToCart">Add</button></span>',
  data: function() {
    return { 
      counter: 0
    }
  },
  methods: {
    addToCart: function() {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#counter'
})

new Vue({
  el: '#input-date-with-today'
})

new Vue({
  el: '#item-list',
  data: {
    fruitsItems: [
      {name: 'apple'},
      {name: 'orange'}
    ]
  }
})

new Vue({
  el: '#fruits-counter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    fruits: [
      {name: 'apple'},
      {name: 'orange'}
    ]
  },
  methods: {
    incrementCartStatus: function() {
      this.total += 1
    }
  },
})

var vm = new Vue({
  el: '#main',
  components: {
    'fruits-list-title': FruitsListTitle,
    'fruits-list-description': FruitsListDescription
  }
})




