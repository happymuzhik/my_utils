function scroll_to_top() {
	const duration = 600;
	let scrollStep = -window.scrollY / (duration / 15);
	const scrollInterval = setInterval(function(){
		if ( window.scrollY != 0 ) {
			window.scrollBy( 0, scrollStep );
		}
		else {
			clearInterval(scrollInterval); 
		}
	},15);
};
export default scroll_to_top;