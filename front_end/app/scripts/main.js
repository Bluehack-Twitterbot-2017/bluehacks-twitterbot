(function () {

  const OPENWHISK_BACKEND = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/ab595eef9b6280db8eaf8c669ee4075b2d0a902858efa28b310ac00eb1248744/bluehacks-api/submit';

}())

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