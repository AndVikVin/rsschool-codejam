let make = (...n)=>{
	let argum = [];
	let func = (...x)=>{
		if(typeof x[0] !== 'function' ){
		argum.push(...x);
		return func;
		} else{			
		return argum.reduce(x[0]);
		};
	};
	func(...n);
	return func;
};
