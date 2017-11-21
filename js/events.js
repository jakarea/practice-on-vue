var Events1 =  new Vue({
	el : '#events1',
	data : {
		counter : 0
	}
});

var Events2 =  new Vue({
	el : '#events2',
	data : {
		name : 'Jakarea Parvez'
	},
	methods:{
		greet : function(event){
			alert('I am '+ this.name + ' , dedicated to learn JS!')
			if(event){
				alert(event.target.tagName)
			}
		}
	}
});

var Events3 =  new Vue({
	el : '#events3',
	methods:{
		say : function(message,event=''){
			alert(message)
			if(event){
				event.preventDefault()
				console.log(event)
			}
		}
	}
});


var Events4 =  new Vue({
	el : '#events4',
	methods:{
		doThis : function(){
			alert('What I will do!');
		}
	}
});

