
var headerTemplate = `
  <div>
    <slot name="header">No Title</slot>
  </div>
`

var contentTemplate = `
  <div>
    <slot name="content">No Contents</slot>
  </div>
`


Vue.component('page-header', {
  template: headerTemplate
})

Vue.component('page-content', {
  template: contentTemplate
})

new Vue({
  el: '#fruits-list'
})

var checkInputValue = {
  check: function(value) {
    return value.length > 0
  }
}
var auth = {
  login: function(id, pass) {
    if (checkInputValue.check(id) && checkInputValue.check(pass) ) {
      window.alert("userid:" + id + "\n" + "password:" + pass)
    } else {
      window.alert("ERROR: invalid value!!")
    }

  }
}


Vue.component('user-login',{
  template: '#login-template',
  data: function() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      auth.login(this.userid, this.password)
    }
  },
})

new Vue({
  el: '#login-example'
})

