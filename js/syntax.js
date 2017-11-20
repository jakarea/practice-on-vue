var syntex1 = new Vue({
	el : '#syntex1',
	data : {
		mess : 'This is dynamic'
	} 
})

var syntex2 = new Vue({
	el : '#syntex2',
	data : {
		message : 'This message could not change!'
	}
});

var syntex3 = new Vue({
	el : '#syntex3',
	data : {
		rawHtml : '<span style="color:red">Hello red!</span>'
	}
})

var syntex4 = new Vue({
	el : '#syntex4',
	data : {
		dynamicId : "dynamic-id"
	}
})

var syntex5 = new Vue({
	el : '#syntex5',
	data : {
		isDissable : true
	}
});

var syntex6 = new Vue({
	el : '#syntex6',
	data : {
		number : 10,
		ok : true,
		message : 'Handled by ternary operator!',
		id : 'jsx'
	}
});

var syntex7 = new Vue({
	el : '#syntex7',
	data : {
		seen : true,
		url : 'http://demo.jakarea.me',
	},
	methods :{
		doPopUp : function(){
			alert('Thank You!')
		}
	}
})

var syntex8 = new Vue({
	el : '#syntex8',
	data : {
		url : 'http://demo.jakarea.me',
	},
	methods : {
		onSubmit: function(){
			alert('Thanks for try!')
		}
	}
})