let element = function(el,attr,text){
	let node = document.createElement(el);
	
	if (attr && typeof attr == 'object'){		
		for(let k in attr){
			node.setAttribute(k,attr[k]);
		};
	}

	if (text && typeof text == 'string'){
		node.innerText = text;
	}

	return node;

};
export default element;