const content = document.querySelector('#content')

content.addEventListener('DOMContentLoaded', function (event) {
  findAndDeleteAds()
})

content.addEventListener('DOMNodeInserted', function (event) {
  findAndDeleteAds()
})

content.addEventListener('DOMSubtreeModified', function (event) {
  findAndDeleteAds()
})

function findAndDeleteAds() {
  $("div[role='article'] b:contains('贊助')").map(function(i,ele){
    $(ele).parents("div[role='article']").html('<div><h1 style="padding: 20px 30px 30px 30px; text-align: center;">廣告貼文已被隱藏！</h1></div>')
  })
}