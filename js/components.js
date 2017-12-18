
Vue.component('Bio',{
	data : function(){
		return {
			name : 'Jakarea Parvez',
			email : 'jakareaparvez@gmail.com' 
		}
	},
	template: 
		`<div>
			<h2> {{ name }}</h2>
			<h3> {{ email }}</h3>
		</div>`
})

Com1 = new Vue({
	el : '#com1'
});

Com2 = new Vue({
	el : '#com2'
});