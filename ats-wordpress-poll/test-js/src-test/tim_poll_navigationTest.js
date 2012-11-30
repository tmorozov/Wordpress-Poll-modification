TestCase("Poll Navigation", {
	setUp : function() {
/*:DOC +=
<div class="most-block margin_right_20">
	<div class="caption"><span>READER POLL</span></div>
	<div class="poll-list">
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Когда все это закончится</div>
			<form class="poll4" method="post" action="">
				<div class="show-form4">
					<table><tbody><tr><td valign="middle"><input type="radio" name="4" value="10"></td><td>сейчас</td></tr><tr><td valign="middle"><input type="radio" name="4" value="11"></td><td>завтра</td></tr><tr><td valign="middle"><input type="radio" name="4" value="12"></td><td>никогда</td></tr></tbody></table>
					<input type="hidden" value="4" name="poll_id">
					<input type="hidden" value="1405123200" name="expiry">
					<input type="hidden" value="one" name="answertype">
					<input type="hidden" value="100" name="max_no_of_answers">
					<input type="hidden" value="submit_vote" name="action">
					<center><input class="poll-wh-style" type="submit" value="Vote" onclick="javascript:vote_poll(4,'one',100)"></center>                
				</div>
				<div class="show-results4" style="display:none;">
					<div class="show-results4">
						<div class="total-votes"><b>Total votes: </b>0</div>
						<div class="result-answer">сейчас (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
						<div class="result-answer">завтра (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
						<div class="result-answer">никогда (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
					</div>
				</div>
			</form>
		</div>

		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">что главное в жизни</div>
			<form class="poll3" method="post" action="">
				<div class="show-results3">
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
	
	<div class="caption"><span>READER POLL</span></div>
	<div class="poll-list">
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">что надо что бы жить и быть счастливым</div>
			<form class="poll2" method="post" action="">
				<div class="show-results2">
					<div class="total-votes"><b>Total votes: </b>1</div>
					<div class="result-answer">жить (1 votes, 100%)</div>
					<div style="height:10px;width:100%;background-color:#000"></div>
					<div class="result-answer">быть счастливым (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
				</div>
			</form>
		</div>
					
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Ты че такой веселый</div>
			<form class="poll1" method="post" action="">
				<div class="show-results1">
					<div class="total-votes"><b>Total votes: </b>1</div>
					<div class="result-answer">долго спал (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
					<div class="result-answer">много съел (1 votes, 100%)</div>
					<div style="height:10px;width:100%;background-color:#000"></div>
					<div class="result-answer">куча денег (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
				</div>
			</form>
		</div>

		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Last one</div>
			<form class="poll0" method="post" action="">
				<div class="show-results0">
					<div class="total-votes"><b>Total votes: </b>1</div>
					<div class="result-answer">долго спал (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
					<div class="result-answer">много съел (1 votes, 100%)</div>
					<div style="height:10px;width:100%;background-color:#000"></div>
					<div class="result-answer">куча денег (0 votes, 0%)</div>
					<div style="height:10px;width:0%;background-color:#000"></div>
				</div>
			</form>
		</div>
	</div>
	
	<div class="poll-list">
		<div class="widget-poll" style="background-color:#F0F0F0;">
			<div class="widget-poll-question">Test 8</div>
			<form class="poll8" method="post" action="">
				<div class="show-results8">
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
					<center><input class="poll-wh-style" type="submit" value="Vote" onclick="javascript:vote_poll(7,'one',100)"></center>                
				</div>
				<div class="show-results7" style="display:none;">
					<div class="show-results4">
						<div class="total-votes"><b>Total votes: </b>0</div>
						<div class="result-answer">сейчас (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
						<div class="result-answer">завтра (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
						<div class="result-answer">никогда (0 votes, 0%)</div>
						<div style="height:10px;width:0%;background-color:#000"></div>
					</div>
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
	},
// test DOM prerequiretes:
	test1: function() {
		assertEquals("Two Poll Lists Present", 3, jQuery("div.poll-list").length);
	},
	test2: function() {
		assertEquals("Two Visible Polls In First List Present", 2, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").length);
	},
	test3: function() {
		assertEquals("Three Visible Polls In Second List Present", 3, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").length);
	},
	test4: function() {
		assertEquals("Three Visible Polls In Second List Present", 3, jQuery("div.poll-list").eq(2).find("div.widget-poll:visible").length);
	},
	
// pollNavigation
    test5:function(){
		assertObject("App Defined", App);
    },
    test6:function(){
		assertObject("Module pollNavigation Defined", App.pollNavigation);
    },
	test7: function() {
		assertFunction("init Function Defined", App.pollNavigation.init);
	},

	test8: function() {
		App.pollNavigation.init();
		assertEquals("One Poll Visible In Each PollList After Init (1)", 1, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").length);
		assertEquals("One Poll Visible In Each PollList After Init (2)", 1, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").length);
	},
	test9: function() {
		App.pollNavigation.init();
		assertEquals("AnsweredPolls Should Have NextButton After Init", 1, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").length);
	},
	test10: function() {
		App.pollNavigation.init();
		assertEquals("NotAnsweredPolls Should Not Have NextButton After Init", 0, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").find("input.next-poll").length);
	},
	test11: function() {
		var options = {
			btnValue : "test"
		};
		App.pollNavigation.init(options);
		assertEquals("NextButton Shoud Has Value FromO ptions", options.btnValue, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").val());
	},
	test12: function() {
		App.pollNavigation.init();
		jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").click();
		assertEquals("OnBtnClick Next Question Should Be Shown", "Ты че такой веселый", jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("div.widget-poll-question").text());
	},
	test13: function() {
		App.pollNavigation.init();
		jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").click();
		assertEquals("OnBtnClick Answered Question Should Have Next Btn", 1, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").length);
	},
	test14: function() {
		App.pollNavigation.init();
		jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").click();
		jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").click();
		assertEquals("Last Poll Should Have No NextBtn", 0, jQuery("div.poll-list").eq(1).find("div.widget-poll:visible").find("input.next-poll").length);
	},
	test15: function() {
		App.pollNavigation.init();
		jQuery("div.poll-list").eq(2).find("div.widget-poll:visible").find("input.next-poll").click();
		assertEquals("OnBtnClick Not Answered Question Should Have No NextBtn (1)", 1, jQuery("div.poll-list").eq(2).find("div.widget-poll:visible").find("input[type=submit]").length);
		assertEquals("OnBtnClick Not Answered Question Should Have No NextBtn (2)", 0, jQuery("div.poll-list").eq(2).find("div.widget-poll:visible").find("input.next-poll").length);
	},
	test16: function() {
		assertFunction("Function update Defined", App.pollNavigation.update);
	},
	test17: function() {
		App.pollNavigation.init();
		jQuery('.poll4').html(jQuery(".poll9").html());
		assertEquals("No Submit Button After Html Replace", 0, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").find("input[type=submit]").length);
		assertEquals("No NextButton After Html Replace", 0, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").find("input.next-poll").length);
		App.pollNavigation.update();
		assertEquals("Update Added NextButton To Answered Poll", 1, jQuery("div.poll-list").eq(0).find("div.widget-poll:visible").find("input.next-poll").length);
	}

});