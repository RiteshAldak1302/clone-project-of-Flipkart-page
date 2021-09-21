var i =0;
press=() => {    //important

    var img = ["img1.png","img2.png" , "img3.png" , "img4.png" , "img5.png"]
if(i<5){
     document.getElementById('slide1').src = img[i];  //not write array variable in string because its element is in string which is shown below
     i++;
     if(i==5){
         i=0;
    } 
  //for 2sec
}
}

setInterval(press,2000);