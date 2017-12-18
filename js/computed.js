var computed1 = new Vue({
	el : '#computed1',
	data: {
		message : 'This text has revesred below.',
		reversed:'',
	},
	computed:{
		reverseString: function(){
			return this.message.split('').reverse('').join('');
		},

		now: function () {
		    return Date.now()
		},

		doAlert: function(){
		 	alert('When does it load?');
		}
	},
	methods: {
  		reverseMessage: function () {
    		return this.message.split('').reverse().join('')
  		}
	}

})

var computed2 = new Vue({
	el : '#computed2',
	data: {
		firstName : 'Jakarea',
		lastName : 'Parvez',
		fullName : 'Jakarea Parvez'
	},
	watch :{
		firstName : function(val){
			this.fullName = val +' ' +this.lastName ;
		},
		lastName : function(val){
			this.fullName = this.firstName + ' ' + val ;
		},
		anotherOne: function(){
			console.log('It is changed also');
		}
	}
});

var computed3 = new Vue({
	el : '#computed3',
	data: {
		firstName : 'Jakarea',
		middleName : 'Parvez',
		lastName : 'Zehad'
	},
	computed : {
		fullName : {
			get : function(){
				return this.firstName +' '+this.lastName;
			},
			set : function(){
				var names = fullName.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
});