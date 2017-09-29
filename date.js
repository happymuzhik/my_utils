import localization from './localization/localization';

const USE_RUS_DATE_FORMAT = (localization('LOCALIZATION_NAME')=='ru');

const get_current_year = function(){
	return (new Date).getFullYear();
};

const format_date_to_defaults = function(str){
	if (!str){
		str = '';
	}
	return (USE_RUS_DATE_FORMAT) ? str.replace(/(..).(..).(....)/g, '$3/$2/$1') : str;
};

const format_date = function(date, with_time){

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hours = date.getHours();
	let mins = date.getMinutes();
	let result = '';

	if (day.toString().length<2){
		day = '0'+day;
	}

	if (month.toString().length<2){
		month = '0'+month;
	}

	if(USE_RUS_DATE_FORMAT){
		result = day+'.'+month+'.'+year;
	}else{
		result = year+'/'+month+'/'+day;
	}	

	if (with_time){
		if(hours.toString().length<2){
			hours = '0'+hours;
		}
		if(mins.toString().length<2){
			mins = '0'+mins;
		}
		result += ', ' + hours + ':' + mins;
	}

	return result;
};

const convert_date_str_to_unixtime = function(date_str){
	if (!date_str||typeof date_str != 'string'||date_str.length < 1){
		return 0;
	}
	return Math.round(new Date(format_date_to_defaults(date_str)).getTime()/1000);
};

const convert_unixtime_to_date = function(unixtime, with_time){

	if (!unixtime){
		return '';
	}

	const date = new Date(unixtime*1000);	

	return format_date(date, with_time);
};

const is_date_actual = function(date){

	if (!date){
		return '';
	}

	return (Date.now()>(parseInt(date)*1000))?'marked-red':'marked';
};

export { get_current_year };

export { convert_date_str_to_unixtime };

export { convert_unixtime_to_date };

export { is_date_actual };

export { format_date };

export { format_date_to_defaults };

export default get_current_year;