let array_to_string_by_propname = function(array, propname, delimeter){
	if (!array||!Array.isArray(array)||array.length==0||!propname||propname.length==0){
		return '';
	}	
	let string_array = '';
	let delim = (delimeter||', ');
	for (let i = 0; i < array.length; i++) {
		let test_delim_prev_el = (!!array[i-1] && !!array[i-1][propname] && array[i-1][propname].trim().length>0);
		let test_delim_next_el = (!!array[i+1] && !!array[i+1][propname] && array[i+1][propname].trim().length>0);
		let test_delim_curr_el = ((!!array[i] && !!array[i][propname] && array[i][propname].trim().length>0));
		if(test_delim_curr_el){
			string_array += array[i][propname];
		}
		if(test_delim_next_el&&(test_delim_curr_el||test_delim_prev_el)){
			string_array += delim;
		}
	};

	/*Для случаяЮ когда получается строка Вы не оплатили доступ, Вы не оплатили доступ, Вы не оплатили доступ*/
	/*Некогда придумывать решения получше*/

	if(string_array.indexOf('Вы не оплатили доступ')>-1){
		string_array = 'Вы не оплатили доступ';
	}

	return string_array;
};
export default array_to_string_by_propname;