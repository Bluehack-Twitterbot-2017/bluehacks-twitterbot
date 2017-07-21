// console.log('\'Allo \'Allo!');

// (function () {
//   // IDs of blogs to search: https://support.google.com/blogger/answer/41386?hl=en
//   var blogIds = ['3273926388124010297']
//   // blogger API key: https://support.google.com/cloud/answer/6158862
//   var bloggerAPIKey = 'AIzaSyDxGgQiSoqHa3QUhw-asNsWgqnqP7vKxP4'
//   // blogger search API: https://developers.google.com/blogger/docs/3.0/using#SearchingForAPost
//   var searchAPI = 'https://www.googleapis.com/blogger/v3/blogs/{blogId}/posts/search?q={searchQuery}&key=' + bloggerAPIKey

//   // initialize the input field
//   var initInput = function () {
//     startSearch(".")
//   }

//   // perform search using provided searchtext
//   var startSearch = function (searchtext) {
//     // make sure we have something to search
//     if (searchtext) {
//       // get search url for each blog interested in searching
//       var blogSearchUrls = blogIds.map(function (blogid) {
//         return searchAPI.replace('{blogId}', blogid).replace('{searchQuery}', encodeURIComponent(searchtext))
//       })

//       // trigger the actual api search request
//       blogSearchUrls.forEach(function (url) {
//         xhrSearch(url)
//       })
//     }
//   }

//   // make the actual search request (XMLHttpRequest)
//   var xhrSearch = function (searchurl) {
//     var xmlhttp = new XMLHttpRequest()

//     xmlhttp.open('GET', searchurl, true)

//     // monitor request state changes for completion (state: 4)
//     xmlhttp.onreadystatechange = function (e) {
//       if (xmlhttp.readyState === 4) {
//         if (xmlhttp.status === 200) {
//           var response = JSON.parse(xmlhttp.responseText)
//           handleSuccess(response)
//         } else {
//           console.error(searchurl, ', status:', xmlhttp.status, ' - ', xmlhttp.statusText)
//         }
//       }
//     }

//     xmlhttp.send()
//   }

//   // handle the search response
//   var handleSuccess = function (response) {
//     var resultsbox = document.getElementById('resultsbox')

//     if (response.items && response.items.length > 0) {
//       // results returned
//       var resultlist = ''

//       // iterate through results and get `li` node for each
//       response.items.forEach(function (item) {
//         resultlist += getListItemHTML(item)
//       })

//       // place `li` nodes into `ul`
//       var ul = document.createElement('ul')
//       ul.innerHTML = resultlist

//       // add to page
//       resultsbox.appendChild(ul)
//     } else {
//       // handle no results found
//       checkNoResults()
//     }
//   }

//   // return `li` HTML string for the item
//   var getListItemHTML = function (item) {
//     var listDom = '<li>'
//     listDom += '<div class="item-title">' + item.title + '</div>'
//     listDom += '<div class="item-date"><span>' + new Date(item.published).toLocaleString() + item.id + '</span></div>'

//     // strip out all html formatting!
//     var div = document.createElement('div')
//     div.innerHTML = item.content
//     var plaintext = div.textContent || div.innerText || ''

//     // include abreviated (first 200 characters) blog content
//     listDom += '<div class="item-content wordwrap">' + plaintext.substring(0, 200) + ' ... </div>'

//     listDom += '</li>'

//     return listDom
//   }

//   // show no results message when searches return no results
//   var checkNoResults = function () {
//     var noresult = document.querySelector('.no-result')
//     var resultbox = document.getElementById('resultsbox')

//     if (document.querySelector('.item-title')) {
//       // there is at least one result, remove the no result message
//       if (noresult) {
//         document.getElementById('resultsbox').removeChild(noresult)
//       }
//     } else if (!noresult) {
//       // show no result message
//       resultbox.innerHTML = '<p class="no-result">No results found. Try another search.</p>'
//     }
//   }

//   // wait for page to finish loading then initialize
//   window.addEventListener('DOMContentLoaded', function () {
//     initInput()
//   })
// }())


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