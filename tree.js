let array = [];
let recursion = (...args)=>{
	let arr = [];
	let count = 0;
	let objects = [];
	let nextObjects = [];
	for (let i = 0; i<args.length; i++){
		if(typeof args[i] === 'object'){
			count++;
			objects.push(args[i]);
		};
	};
	if(count === 0){
		return;
	} else if(count === 1){
		arr.push(objects[0].value);
		array.push(arr);
		for (let key in objects[0]){
			if(typeof objects[0][key] === 'object'){
				nextObjects.push(objects[0][key])
			};
		};
		recursion(...nextObjects);
	} else {objects.forEach((it)=>{
			arr.push(it.value);
		for (let key in it){
			if(typeof it[key] === 'object'){
				nextObjects.push(it[key]);
			};
		};
	});
		array.push(arr);
		recursion(...nextObjects);
	};
	return array;	
};
