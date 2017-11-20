var condition1 = new Vue({
	el : '#condition1',
	data : {
		ok:true
	}
})

var condition2 = new Vue({
	el : '#condition2',
	data : { 
		ok : 1
	}
})

var condition3 = new Vue({
	el : '#condition3',
	data : {
		type : true
	},
	methods : {
		changeType : function(){
			this.type = !this.type;
		}
	}
})