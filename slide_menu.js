import { freeze_wrapper } from './modal';

const show_func = function(menu, modal){
	freeze_wrapper();
	menu.classList.add('active');
	modal.classList.add('active');
	modal.classList.add('fadeIn');	
	document.body.classList.add('no-overflow');
};
const hide_func = function(menu, modal){
	freeze_wrapper(false);
	menu.classList.remove('active');
	modal.classList.remove('active');
	modal.classList.remove('fadeIn');
	document.body.classList.remove('no-overflow');
};
const menu_hide_func = function(menu, modal, e){
	const el = e.target;
	if (el.classList.contains('menu__item')||el.parentNode.classList.contains('menu__item')){
		freeze_wrapper(false);
		menu.classList.remove('active');
		modal.classList.remove('active');
		modal.classList.remove('fadeIn');
		document.body.classList.remove('no-overflow');
	}
};
const slide_menu = function() {	
	const burger = document.getElementById('slide_menu_burger');
	const menu = document.querySelectorAll('.left-col')[0];
	const modal = document.getElementById('slide_menu_modal');
	const show = show_func.bind(null, menu, modal);
	const hide = hide_func.bind(null, menu, modal);
	const menu_hide = menu_hide_func.bind(null, menu, modal);
	if(!burger||!menu||!modal){return false;}
	burger.onclick = show;
	modal.onclick = hide;
	menu.onclick = menu_hide;
};
export default slide_menu;