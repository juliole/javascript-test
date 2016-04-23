(function($){
	function clickHandler(e){
		const $mess = $('#messageDiv');
		$mess.text(`${e.target.innerText} is clicked`).show();
		setTimeout(function(){
			$mess.fadeOut('slow');
		}, 1000);
	}

	$(document).ready(function(){
		const $addBtn = $('#addBtn'),
			$testBtn = $('#testBtn'),
			$container = $('#containerBtns');

		let btnIndex = 1;

		$addBtn.click(() => {
			const $newBtn = $(`<button class="btn">button number ${btnIndex}</button>`);
			$('<div class="col-md-2"></div>').append($newBtn).appendTo($container);
			btnIndex++;
		});

		$testBtn.click(clickHandler);
	})
}(jQuery));