let cast_salary = function(str){
	if (!str||str.length==0){ return ''; }
	let _str = parseInt(str);
	let result = '';
	if (_str){
		result = _str.toString().split("").reverse().join("").replace(/(.{3})/g, '$& ').split("").reverse().join("");
	}	
	return result
};
export default cast_salary;