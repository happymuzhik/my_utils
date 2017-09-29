let cast_phone = function(p){
	if (!p||p.length==0){ return ''; }
	p = p.toString().replace(/\-/g, '');	
	const phone_length = p.length;
	const plus = (phone_length==9&&p[0]=='7')?'+':'';
	let result = '';
	switch(phone_length){
		case(7):
			result = p.replace(/(.{3})(.{2})(.{2})/g, '$1 $2 $3');
			break
		case(9):
			result = p.replace(/(.{3})(.{3})(.{2})(.{1})/g, '+7 ($1) $2 $3 $4');
			break
		case(10):
			result = p.replace(/(.{3})(.{3})(.{2})(.{2})/g, '+7 ($1) $2 $3 $4');
			break
		case(11):
			result = p.replace(/(.)(.{3})(.{3})(.{2})(.{2})/g, plus+'$1 ($2) $3 $4 $5');
			break
		default:
			result = p;
			break
	};
	return result
};
export default cast_phone;