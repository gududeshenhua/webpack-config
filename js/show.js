function show (content){
	window.document.getElementById('app').innerText='hello,'+content;
	let list = [2,2,3];
	let newList = list.map(item=>{
		console.log('1111')
		return item*2
	}) 
	console.log(list);  
	console.log(newList);  
	console.log('1111113333444'); 
	let setA = new Set([...newList]);
	console.log(setA);  
	console.log(Array.from(setA));   
} 
module.exports = show;  