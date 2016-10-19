window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  var projectsLink = document.getElementById('projects')
  projectsLink.onclick = function () {
    var position = document.getElementById('projectsDiv').getBoundingClientRect()
    console.log(position.top);
    window.scrollTo(0,position.top)
  }
  var contactsLink= document.getElementById('contact')
  contactsLink.onclick = function () {
    var position = document.getElementById('contactDiv').getBoundingClientRect()
    console.log(position.top);
    window.scrollTo(0,position.top)
  }
  var resumeLink= document.getElementById('resume')
  resumeLink.onclick = function () {
    window.open("../resources/test.text")
  }
  document.documentElement.onkeyup = ( function keyWasPressed(evt){
    if (evt.keyCode === 13) {
      console.log("Enter");
    }
  })
  var button = document.getElementById('send')
  button.onclick =   function(){
    console.log('send');
      var body = document.getElementById("body").value;
      window.location.href = "mailto:cameroneldongale@gmail.com?subject=Hello&body="+body;
    }
    function getBrowserInfo(){
    	var ua = navigator.userAgent, tem,
    	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    	if(/trident/i.test(M[1]))
    	{
    		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    		return 'IE '+(tem[1] || '');
    	}
    	if(M[1]=== 'Chrome')
    	{
    		tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    		if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    	}
    	M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    	if((tem= ua.match(/version\/(\d+)/i))!= null)
    		M.splice(1, 1, tem[1]);
    	return M.join(' ');
    }

    var browserInfo = getBrowserInfo();
    console.log(browserInfo.slice(0,6));
    if (browserInfo.slice(0,6) !== "Chrome") {
      location.href = 'https://www.google.com/chrome/browser/desktop/';
    }

});


// document.getElementById(id).style.property=new style
