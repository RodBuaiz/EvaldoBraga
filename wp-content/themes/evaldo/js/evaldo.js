Cufon.replace(document.getElementsByTagName('h1'));
Cufon.replace(document.getElementsByTagName('h2'));
Cufon.replace(document.getElementsByTagName('h3'));
Cufon.replace(document.getElementsByTagName('h4'));
Cufon.replace(document.getElementsByTagName('h5'));
Cufon.replace(document.getElementsByTagName('h6'));

window.onload = function()
{
    var dir = "https://evaldobraga.com/wp-content/themes/evaldo/images/";		
    var mypics = Array(dir+"bg1.jpg", dir+"bg2.jpg", dir+"bg3.jpg", dir+"bg4.jpg", dir+"bg5.jpg", dir+"bg6.jpg", dir+"bg7.jpg");		 		
    var randomnumber = Math.floor( Math.random() * mypics.length );
    var newimage = mypics[randomnumber];
    document.images['obg'].src = newimage;	
}
    
//Cufon.now();

players = [];
function registerSwf(id) {
    players.push(id);
}
function stopOthers(from_id) {
    
    for(var i = 0; i < players.length; i++) {
        var id = players[i];
        if(id != from_id) {
                //var obj = swfobject.getObjectById("myId");
                //obj.setEnabled(false); 
                thisMovie(id).setEnabled(false);
        } else {
        }
    }
}

function thisMovie(movieName) {
     if (navigator.appName.indexOf("Microsoft") != -1) {
         return window[movieName];
     } else {
         return document[movieName];
     }
}