$.noConflict();
jQuery(document).ready(function($){
	//code here


	//Isotope Sorting
	//Ne marche pas, après le click tout le style disparait
	$('#sort').on('click', function(){
	// console.log('premier');
		$('.grid').isotope({
			getSortData:
				{number: '.prix parseInt'},
				sortBy : 'number',
				sortAscending: true
		});
	});


	//Menu Animation
	const menu = $('#menu');
	//burguer button
	const btn = $('#burguer');
	btn.on('click', () => menu.toggleClass('active'));
})