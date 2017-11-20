
var data = { a: 10, b: '' }

var instance1  = new Vue({
el : '#data',
data : data
});

instance1.b = 'hi';
console.log(instance1.a == data.a);
console.log(data.b);
console.log(instance1.$data === data);
console.log(instance1.$data);

instance1.$watch('a',function(){
	console.log(data.a)
})
instance1.a = 'A'
instance1.$data.a = 'c'
instance1.$data.a = instance1.a.toUpperCase()

instance2 = new Vue({
	el : '#Lifecycle',
	data : {
		lf: 'Old value '
	},
	created : function(){
		console.log( this.lf = 'data is changed in created method from '+ this.lf);
	}
})



