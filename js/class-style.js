
var styles1 = new Vue({
	el : '#styles1',
	data : {
		isActive : true,
		hasError : false,
		classObject: {
	    	'op-h': true,
	  	},
	  	eObject: {
	    	isIt : true,
			hasErrors : false,
			error : null
	  	},
	},
	computed: {
	  cObject: function () {
	    return {
	      active: this.isIt && !this.error,
	      'text-danger': this.error && this.error.type === 'fatal'
	    }
	  }
	}
});


var styles2 = new Vue({
	el : '#styles2',
	data:{
		my : 'my-class',
		e : 'has-error',
		isActive:true,
		activeClass: 'active'
	}
});

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
