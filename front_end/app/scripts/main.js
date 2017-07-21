var checked1 = $('#option-1').is(':checked');
var checked2 = $('#option-2').is(':checked');

if (checked1 == 1) {
    $('.Step_1_Content').show();
    $('.Step_2_Content').hide();
    $('.Step_3_Content').hide();
} else if (checked2 == 1) {
    $('.Step_2_Content').show();
    $('.Step_1_Content').hide();
    $('.Step_3_Content').hide();
}

$(".segmented-control").change(function () {
    var checked1 = $('#option-1').is(':checked');
    var checked2 = $('#option-2').is(':checked');

    if (checked1 == 1) {
        $('.Step_1_Content').show();
        $('.Step_2_Content').hide();
        $('.Step_3_Content').hide();
    } else if (checked2 == 1) {
        $('.Step_2_Content').show();
        $('.Step_1_Content').hide();
        $('.Step_3_Content').hide();
    }
});



$('button[name=submitBtn]').onClick(function(){
    console.log('hey');
});