const debounce = function(func, delay) {
	let T = null;	
 	const debounce = function () {		
		const context = this, args = arguments;
		clearTimeout(T);
		T = setTimeout(function () {
			func.apply(context, args);
		}, delay);
	};
	return debounce;
};
export default debounce;