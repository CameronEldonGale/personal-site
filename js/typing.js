$(function(){
  var content = ["Hi!", "My name is Cameron","I am a web developer from Utah", "Checkout my projects and resume"]
    var i = 0;
    function addLine(){
      $('.typed-lines').append( '<p class="element">'+content[i-1]+'</p>')
    }
    var typeOnScreen = function (){

      $(".line").typed({
        strings: [content[i]],
        typeSpeed: 0,
        callback: function(){
          i++
          if (i < content.length) {
            setTimeout(addLine, 2000)
            setTimeout(typeOnScreen, 2000)
          }

        }
      })
    }
    setTimeout(typeOnScreen, 1000)

});
