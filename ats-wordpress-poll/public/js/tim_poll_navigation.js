var App = App || {};
App.pollNavigation = (function pollNavigation($) {
	var _options = {
		"btnValue" : "Next"
	};
	
	function updateOptions(options) {
		options = options  || {};
		if (options && options.btnValue) {
			_options.btnValue = options.btnValue;
		}
	}
	
	function updatePollNavigation($poll, $nextBtn, $pollsToHide) {
		var $nexeNextPoll = $poll.next("div.widget-poll");
		if ($poll.length) {
			$pollsToHide.hide();
			$poll.show();
			if ( 0 === $poll.find("input[type=submit]").length 
				&& $nexeNextPoll.length ) {
				$poll.append($nextBtn);
			}
		}
	}
	
	function updateAllNavigation() {
		$("div.poll-list").each(function(i, pollListEl) {
			var $pollList = $(pollListEl);
			var $newBtn = $pollList.data("next-button");
			var $polls = $pollList.find("div.widget-poll");
			var $poll = $pollList.find("div.widget-poll:visible").first();
			updatePollNavigation($poll, $newBtn, $polls);
		});	
	}
	
	function createButtons() {
		$("div.poll-list").each(function(i, pollListEl) {
			var $pollList = $(pollListEl);
			var $newBtn = $('<input type="button" class="next-poll" value="' + _options.btnValue+ '" />');
			$pollList.data("next-button", $newBtn);
			
			$newBtn.on("click", function() {
				var $btn = $(this);
				var $poll = $btn.parent().next("div.widget-poll");
				updatePollNavigation($poll, $newBtn, $btn.parent());
			});
		});	
		
	}
	
	function redirectFormSubmition() {
		$("div.poll-list form").on("submit", function() {
			var $form = $(this);
			var data = $(this).serialize();
			$.post( ajaxurl, data, function(response){
				$form.html(response);
				updateAllNavigation();
			});
				
			return false;
		});
	}
	
	return {
		init: function(options) {
			updateOptions(options);
			redirectFormSubmition();
			createButtons();
			updateAllNavigation();
		},
		update: function(){
			updateAllNavigation();
		}
	};

})(jQuery);

