var $ = require('jquery');
window.jQuery = $;
var count = 0;
$(document).ready(function(){
var question = $('.eachquestion');
var len = question.length;
console.log(len);

for(var i = 1; i < len; i++){
$(question[i]).css("display", "none");
}


$('#next').on('click', function(){
  $('#previous').css('display', "inline-block");
  $(question[count]).css("display", "none");
  count++;
  if(count < len){
    if(count ===  len-1){

      $('#next').css('display', "none");
    }
    $(question).removeClass("active");
  $(question[count]).addClass("active");
  }else{
    $(this).css('display', 'none');
  }
  console.log("count after next " + count);
});



$('#previous').on('click', function(){
  $('#next').css('display', 'inline-block');

  $(question[count]).css("display", "none");
  if(--count > -1){
    if(count === 0){

      $('#previous').css('display', "none");
    }
    console.log($(question[count]));
    $(question).removeClass("active");
  $(question[count]).addClass("active");

  }else{

    $(this).css('display', 'none');
  }

  console.log("count after previous " + count);
});
});


