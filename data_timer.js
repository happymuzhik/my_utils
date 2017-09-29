//Для тестирования и заглушек. Возвращает данные в промизе через указанное время
const data_timer = function (time){	
	return new Promise(function(resolve){
		const T = setTimeout(function(){
			resolve();
			clearTimeout(T);
		}, time);
	});
};

export default data_timer;