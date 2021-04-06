
$( document ).ready(function() {
    console.log( "ready!" );
});

function myFun(){	
window.setInterval(function(){
    var url = getCurrent();
    $('#banner').delay( 1000 ).fadeTo(500, 0.3, function()
    {
        $(this).css('background-image', 'url(' + url + ')');
    }).fadeTo('slow', 1);
}, 4000);

var index = 1;
     var arrayOfPartenaires = [
            "img/ban4.jpg",
            "img/ban3.jpg",
            "img/ban.jpg"
        ];

function getCurrent(){
    
    if (index > arrayOfPartenaires.length -1){
        index = 0;
    }
    var returnValue = index;
    index ++;
    return arrayOfPartenaires[returnValue];
   
}
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

