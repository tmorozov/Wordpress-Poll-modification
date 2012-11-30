TestCase("Poll Submittion", {
	setUp : function() {
/*:DOC +=
<div class="most-block margin_right_20">
	<div class="caption"><span>READER POLL</span></div>
	
	<div class="poll-list">
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Test 7</div>
			<form class="poll7" method="post" action="">
				<div class="show-form7">
					<table><tbody><tr><td valign="middle"><input type="radio" name="7" value="10"></td><td>сейчас</td></tr><tr><td valign="middle"><input type="radio" name="7" value="11"></td><td>завтра</td></tr><tr><td valign="middle"><input type="radio" name="7" value="12"></td><td>никогда</td></tr></tbody></table>
					<input type="hidden" value="7" name="poll_id">
					<input type="hidden" value="1405123200" name="expiry">
					<input type="hidden" value="one" name="answertype">
					<input type="hidden" value="100" name="max_no_of_answers">
					<input type="hidden" value="submit_vote" name="action">
					<input class="poll-wh-style" type="submit" value="Vote" />
				</div>
			</form>
		</div>
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Test 9</div>
			<form class="poll9" method="post" action="">
				<div class="show-results9">
					<div class="total-voters"><b>Total voters: </b>1</div>
					<div class="total-votes"><b>Total votes: </b>1</div>
					<div class="result-answer">деньги (1 votes, 100%)</div>
					<div style="height:10px;width:100%;background-color:#000"></div>
					<div class="result-answer">бабы (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
					<div class="result-answer">машины (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
					<div class="result-answer">квартиры (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
				</div>
			</form>
		</div>
	</div>	
</div>
*/

		this.old_ajaxurl = window.ajaxurl;
		window.ajaxurl = "test.php";
		sinon.stub(jQuery, "ajax");		
	},
		
	tearDown: function () {
		window.ajaxurl = this.old_ajaxurl;
		jQuery.ajax.restore();
    },		
	
// test DOM prerequiretes:
	test1: function() {
		assertEquals("Poll List Present", 1, jQuery("div.poll-list").length);
	},
	test2: function() {
		assertEquals("Form With Submit Button Present", 1, jQuery("div.poll-list").find("form input[type=submit]").length);
	},
	test3: function() {
		var callback = sinon.stub().returns(false);
		jQuery("div.poll-list form").on("submit", callback);

		jQuery("div.poll-list form input[type=submit]").click();
		assertTrue("OnSubmitButtonClick Form submitted", callback.calledOnce);	
	},
	"test 4 OnSubmitButtonClick Ajax POST call With FormData made After Init": function() {
		var formData = jQuery("div.poll-list form").serialize();

		var callback = sinon.stub().returns(false);
		jQuery("div.poll-list form").on("submit", callback);

		App.pollNavigation.init();
		jQuery("div.poll-list form input[type=submit]").click();
		
		assertTrue("AJAX params match", jQuery.ajax.calledWithMatch({ 
			url: window.ajaxurl,
			type: "post",
			data: formData
		}));
	},
	
	"test 5 onAjaxSuccess returned data replaces form body": function() {
		var $form = jQuery("div.poll-list form input[type=submit]").parent().parent();
		var content = "New Content";

		var callback = sinon.stub().returns(false);
		jQuery("div.poll-list form").on("submit", callback);

		App.pollNavigation.init();
		jQuery("div.poll-list form input[type=submit]").click();	
		jQuery.ajax.args[0][0].success(content);
		
		assertEquals("Form innerHtml", content, $form.html());
	},
	
	"test 6 after Poll submit NextButton should be added": function() {
		var callback = sinon.stub().returns(false);
		jQuery("div.poll-list form").on("submit", callback);

		App.pollNavigation.init();
		jQuery("div.poll-list form input[type=submit]").click();	
		jQuery.ajax.args[0][0].success("Responce Data");
	
		assertEquals("NextButton Present", 1, jQuery("div.poll-list").find("div.widget-poll:visible").find("input.next-poll").length);
	}

});