var app1 = new Vue({
  el: '#hello',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
	el : '#hello2',
	data : {
		vue : 'I am Learning Vue!'
	}
});

var app3 = new Vue({
	el : '#bind',
	data : {
		bind_text : 'This text from app3 object instance of Vue'
	}
});

var app4 = new Vue({
	el : '#seen',
	data : {
		seen : true
	}
}); 

var app5 = new Vue({
	el : '#list',
	data: {
		todos: [
			{text:'Learn html'},
			{text:'Learn wordpress'},
			{text:'Build plugin'},
			{text:'Sell plugin'},
			{text:'Earn money'},
		]
	}
});

var app6 = new Vue({
	el: '#revers',
	data: {
		message: 'Click the button to reverse this text!',
	},
	methods :{
		reverseText: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app7 = new Vue({
	el : '#input-value',
	data : {
		input_value : 'This is input value'
	}
});

Vue.component('to-do',{
	props : ['todo'],
	template : '<li>{{todo.text}}</li>'
});

var app8 = new Vue({
  el: '#component',
  data: {
    groceries: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Potato' },
      { id: 2, text: 'Tomato' },
      { id: 2, text: 'Bean' }
    ]
  }
})

Vue.component('name',{
	props : ['name'],
	template : '<li>{{ name.text}}</li>'
})

var app9 = new Vue({
	el : '#component2',
	data : {
		names : [
			{ id : 0, text : 'Jakarea' },
			{ id : 1, text : 'Parvez' },
			{ id : 3, text : 'Zehad' }
		]
	}
});