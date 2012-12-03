<?php

function showSimplePollForm($vars){
    
    $poll_answers = $vars['poll_answers'];
    $total = $vars['total_votes'];
    $option_value = $vars['option_value'];
    $poll = $vars['poll'];
    
    $option = 1;
    $exp_time = $vars['exp_time'];
    if(empty($poll->no_of_answers)) $poll->no_of_answers = 100;
    ?>
    <div class="show-form<?php echo $poll->id;?>">
        
        <?php
        print '<ul>';
        foreach($poll_answers as $answer){
            if($poll->answer_type == "one"){
                    print '<li><input type="radio" name="'.$poll->id.'" value="'.$answer->id.'" />';
                    if($poll->poll_type == 'image_poll') {
                        print '<span><img src="'.$answer->answer.'" width="100" alt="'.$answer->answer.'" /></span>';
                    }
                    else {
                        print '<span>'.$answer->answer.'</span>';
                    }
                    print '</li>';
            }
            if($poll->answer_type == "multiple"){
                print '<li><input type="checkbox" name="option'.$option.'" value="'.$answer->id.'" />';
                if($poll->poll_type == 'image_poll') {
                        print '<span><img src="'.$answer->answer.'" width="100" alt="'.$answer->answer.'"/></span>';
                    }
                    else {
                        print '<span>'.$answer->answer.'</span>';
                    }
                print '</li>';
            }
            $option++;
        }
        print '</ul>';
        ?>
        <input type="hidden" value="<?php print $poll->id;?>" name="poll_id" />
        <input type="hidden" value="<?php print $exp_time;?>" name="expiry" />
        <input type="hidden" value="<?php print $poll->answer_type;?>" name="answertype"/>
        <input type="hidden" value="<?php print $poll->no_of_answers;?>" name="max_no_of_answers" />
        <input type="hidden" value="submit_vote" name="action"/>
        <input class="poll-wh-style" type="submit" value="<?php print __('Submit', 'cardozapolldomain');?>" />
    </div>
    <?php
}

function displayAtsPollResults( $vars){
    $poll_answers = $vars['poll_answers'];
    $total = $vars['total_votes'];
    $option_value = $vars['option_value'];
    $poll = $vars['poll'];
    $answer_type = $poll->answer_type;
    $total_votes = 0;  
    $poll_id = $vars['poll']->id;
    if(!empty($option_value['bar_height'])) 
        $bar_height = $option_value['bar_height'];
    else $bar_height = "10";
    if(!empty($option_value['bar_color'])) 
        $bar_color = $option_value['bar_color'];
    else 
        $bar_color = "CCC";
    ?>
    <div class="show-results<?php echo $poll_id;?>">
    <?php
        if($answer_type == "multiple") print "<div class='total-voters'><b>".__("Total voters", "cardozapolldomain").": </b>".$total."</div>";

        foreach($poll_answers as $answer){
            $total_votes = $total_votes + $answer->votes;
        }
        
        $answer_count = 0;
        $total_answer_count = sizeof($poll_answers);
        $total_width = 0;
        foreach($poll_answers as $answer){
            $answer_count++;
            $votes = $answer->votes;
            if($total_votes!=0) $width = ($votes/$total_votes)*100;
            else $width = 0;
            if($answer_count == $total_answer_count && $total_votes>0) $width = 100 - $total_width;
            else $total_width = $total_width + round($width);
            if($poll->poll_type == 'image_poll')
                print "<div class='result-answer'><img src='".$answer->answer."' width='100' alt='".$answer->answer."'/> <br />(".$answer->votes.__(" votes", "cardozapolldomain").", ".round($width)."%)</div>";
            else
                print "<div class='result-answer'>".$answer->answer."</div>";
            print '<div class="poll-bar-back"><div class="poll-bar" style="width:'.$width.'%;">'.round($width).'%</div></div>';
        } 
		print "<div class='total-votes'><b>".__("total votes", "cardozapolldomain").": </b>".$total_votes."</div>";
    ?>
    </div>
	<?php
}


?>