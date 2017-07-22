// $('button[name=submitBtn]').click(function () {

//   const OPENWHISK_BACKEND = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/ab595eef9b6280db8eaf8c669ee4075b2d0a902858efa28b310ac00eb1248744/bluehacks-api/submit';

//   var keywordInput = document.getElementById("keywordInput").value;
//   var firstKeyword = keywordInput.split(",")[0];
//   var secondKeyword = keywordInput.split(",")[1];

//   // var listOfTweets = [
//   // "i love ibm, i hate microsoft",
//   // "I'm using the products of two major leading company @IBM  and @microsoft and it's pretty interesting to see the vision of each one of them !",
//   // "Offer to these 10 brands: hire me as an environmental consultant. I have new ideas. @Google @CocaCola @Microsoft @ToyotaMotorCorp @IBM ",
//   // "Cloud Market Forecast to Hit $200B by 2020 #Software #Cloud #IBM #Microsoft #Google #Amazon http://www.datacenterknowledge.com/archives/2017/07/19/cloud-market-forecast-to-hit-200b-by-2020/ … #AcloudA",
//   // "Machine Learning : comparatif des outils d’AWS, Google, IBM et Microsoft http://crwd.fr/2u4HuwU ",
//   // "Mirror, Mirror on the wall, @Microsoft became @IBM after all.",
//   // "Their businesses grow until they have potential then they're sold to a US giant.... Like IBM, Google,  Microsoft,  etc."
//   // ]

//   for (var i = 0; i < listOfTweets.length; i++) {
//     fetch(OPENWHISK_BACKEND, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         input: listOfTweets[i].text,
//         target: {
//           first: firstKeyword,
//           second: secondKeyword
//         }
//       })
//     })
//     .then(response => response.json())
//     .then(function(messageResponse){

//       if (messageResponse.sentiment) {
//         console.log("Tweet:", messageResponse.input);
//         if (messageResponse.sentiment.targets[0].text === "ibm") {
//           console.log("Sentiment:", messageResponse.sentiment.targets[0].label);
//         }
//       }

//     })
//   }

// })


//     // for segmented control
//     var checked1 = $('#option-1').is(':checked');
//     var checked2 = $('#option-2').is(':checked');
//     if (checked1 == 1) {
//       $('.Step_1_Content').show();
//       $('.Step_2_Content').hide();
//       $('button[name=submitBtn]').show();
//     } else if (checked2 == 1) {
//       $('.Step_2_Content').show();
//       $('.Step_1_Content').hide();
//       $('button[name=submitBtn]').hide();
//     }
//     $(".segmented-control").change(function () {
//       var checked1 = $('#option-1').is(':checked');
//       var checked2 = $('#option-2').is(':checked');

//       if (checked1 == 1) {
//         $('.Step_1_Content').show();
//         $('.Step_2_Content').hide();
//         $('button[name=submitBtn]').show();
//       } else if (checked2 == 1) {
//         $('.Step_2_Content').show();
//         $('.Step_1_Content').hide();
//         $('button[name=submitBtn]').hide();
//       }
//     });

