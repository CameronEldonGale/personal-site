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
    window.open("../resources/resume-web.pdf")
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

});


// document.getElementById(id).style.property=new style
