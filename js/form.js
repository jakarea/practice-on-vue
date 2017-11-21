var Form1 = new Vue({
	el : '#form1',
	data : {
		message : '',
		messageMl : ''
	}
})

var Form2 = new Vue({
	el : '#form2',
	data : {
		checked : false,
		checkeds : []
	}
})

var Form3 = new Vue({
	el : '#form3',
	data : {
		picked : '',
	}
})

var Form4 = new Vue({
	el : '#form4',
	data : {
		selected : '',
	}
})

var Form5 = new Vue({
	el : '#form5',
	data : {
		m_selected : [],
	}
})

var Form6 = new Vue({
	el : '#form6',
	data : {
		d_selected : '',
		options : [
			{ text : 'One' , value : '1'},
			{ text : 'Two' , value : '2'},
			{ text : 'Three' , value : '3'},
			{ text : 'Four' , value : '4'},
			{ text : 'Five' , value : '5'},
			{ text : 'Select One' , value : ''},
		]
	}
})

var Form7 = new Vue({
	el : '#form7',
	data : {
		lazy_message : '',
		age : '',
	}
})
