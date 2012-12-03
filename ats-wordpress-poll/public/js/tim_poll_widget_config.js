(function($) {

	$(document).ready(function() {
		$("body").on("click", ".sort-activator", function() {
			$(".ats-sortable").sortable({
				axis: 'y',
				items: "> li",
				update: function(event, ui) {
					ui.item.parent().find("li").each(function(i, el){
						$(el).find("input[type=hidden]").val(i);
					});
				}
			}).disableSelection();
			$(this).remove();
		});
	});

})(jQuery);
