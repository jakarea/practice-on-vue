var list1 = new Vue({
	el : '#list1',
	data : {
		parrent: 'Country ',
		items : [
			{ message : 'Hello Bahamas'},
			{ message : 'Hello Bahrain'},
			{ message : 'Hello Barbados'},
			{ message : 'Hello Belarus'},
			{ message : 'Hello Belgium'},
			{ message : 'Hello Belize'},
		]
	}
});

var list2 = new Vue({
	el : '#list2',
	data : {
		object : {
			name : 'Bangladesh',
			time_zone : 'UTC + 6h',
			capital : 'Dhaka',
			country_code : '+880',
			people : '164 million',
			area : '144000km^2',
			language : 'Bangla'
		}

	}
})

var lsist3 = new Vue({
	el : '#list3',
	data : {
		items : [
			{ name : 'Java'},
			{ name : 'C'},
			{ name : 'Objective C'},
			{ name : 'PHP'},
			{ name : 'Python'},
			{ name : 'Ruby'},
		]
	}
});


var List4 = new Vue({
	el : '#list4',
	data: {
	  numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
	},

	computed: {
	  evenNumbers: function () {
	    return this.numbers.filter(function (number) {
	      return number % 2 === 0
	    })
	  }
	}
});


var List5 = new Vue({
	el : '#list5',
	data: {
	  numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
	},

	methods: {
	  odd: function () {
	    return this.numbers.filter(function (number) {
	      return number % 2 !== 0
	    })
	  }
	}
});

var list6 = new Vue({
	el : '#list6'
});

