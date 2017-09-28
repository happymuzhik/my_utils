import element from './element';

let freeze_wrapper = function(unfreeze){
	let wrapper = document.getElementById('wrapper'),
		de = document.documentElement,
		dwidth = Math.min(parseInt(window.innerWidth), parseInt(de.clientWidth));
		if(typeof unfreeze == 'boolean' && !unfreeze){
			wrapper.style.width = '100%';
		}else{
			wrapper.style.width = dwidth + 'px';			
		}
};

let create_modal = function(params){

	/*
	params:{
		attr:{},
		visible: boolean,
		close_button: boolean,
		content_id: string,
		ok_button: boolean,		
	}
	*/

	let attrs = params.attr||false;
	let modal_cont = element('div', attrs);
	let modal_background = element('div', {class: 'modal__background', title: 'Закрыть'});
	let modal = element('div', {class: 'modal__body'});
	let modal_content = element('div', {class: 'modal__content'});

	modal_cont.classList.add('modal__cont');
	if (!params.visible===true){
		modal_cont.classList.add('hidden');
	}

	if (params.content_id&&typeof params.content_id === 'string'){
		modal_content.setAttribute('id', params.content_id);
	}
	
	let event = document.createEvent('Event');
	event.initEvent(params.content_id, true, true);

	let obj = {
		node: modal_cont,
		show: function(){
			modal_content.dispatchEvent(event);
			freeze_wrapper();			
			document.body.classList.add('no-overflow');
			modal_background.style.width = document.documentElement.clientWidth + 'px';
			modal_cont.classList.remove('hidden');			
			modal_cont.classList.add('fadeIn');
			modal.style.marginTop = '-' + (modal.offsetHeight/2) + 'px';			
		},
		hide: function(){
			freeze_wrapper(false);
			document.body.classList.remove('no-overflow');
			modal_cont.classList.add('hidden');			
		}
	};	

	modal_background.addEventListener('click', function(){
		obj.hide();
	});	

	if (params.close_button){
		let cl_button_cont = element('div', {class: 'modal__close-button'});
		let cl_button = element('span', {title: 'close'}, '×');
		cl_button_cont.appendChild(cl_button);
		cl_button.addEventListener('click', function(){
			obj.hide();
		});
		modal.appendChild(cl_button_cont);
	}

	modal.appendChild(modal_content);

	if (params.ok_button){
		let ok_button_cont = element('div', {class: 'modal__ok-button'});
		let ok_button_el = element('button', {class: 'button'}, 'Ok');
		ok_button_cont.appendChild(ok_button_el);
		ok_button_el.addEventListener('click', function(){
			obj.hide();
		});
		modal.appendChild(ok_button_cont);
	}
	
	modal_cont.appendChild(modal_background);
	modal_cont.appendChild(modal);

	return obj;

};

export { freeze_wrapper };

export default create_modal;