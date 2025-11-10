//your JS code here. If required.
let option=document.getElementById('colorSelect');
let button=document.querySelector('input[type="button"]');

button.addEventListener('click',()=>{
	let selected=option.selected;
	if(selected!=-1){
		option.remove(selected);
	}
})