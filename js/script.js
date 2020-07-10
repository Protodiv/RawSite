// animation from WOW
new  WOW().init(); // instal WOW animation

// если сафари 
//BrowserDetect.OS

console.log(BrowserDetect.browser);
// BrowserDetect.browser.includes('Safari') && BrowserDetect.OS.includes('iPhone/iPod')
if( BrowserDetect.browser.includes('Safari') && BrowserDetect.OS.includes('iPhone/iPod')){

  var description = document.getElementById("LiddVideo");
  description.remove();
  /*let img = document.createElement('div');
  img.className = "videolidd";
  img.innerHTML = '<img src="'+'<?php echo get_template_directory_uri() ?>/assets/images/liddSafariPic.PNG'+' ">';

  var list = document.getElementById('containerLidd')

  var firstLi = document.getElementById('liddtitlel')

  list.insertBefore(img, firstLi);*/

  description = document.getElementById("videoWeCanBe");
  description.remove();

  //.removeClass( "dis-none" );

$(".videolidd").removeClass( "dis-none" );
$(".videoWeCanBe").removeClass( "dis-none" );

  /*var img2 = document.createElement('div');
  //img2.className = "videoWeCanBe videoWeCanBe_img";
  img2.className = "videoWeCanBe";
  img2.innerHTML = '<img src="'+'<?php echo get_template_directory_uri() ?>/assets/images/handsPic.PNG'+'">';

  var list2 = document.getElementById('WecanBE');

  var firstLi2 = document.getElementById('videoWeCanBe');

  list2.insertBefore(img2, firstLi2);*/

  


     
   /*$(".videolidd").css({"transform": "scale(0.7)"})
   $(".videolidd").css({"top": " -120px"})
   $(".videolidd").css({"left": " -220px"})

   $(".videoWeCanBe").css({"transform": "scale(0.7)"})
   $(".videoWeCanBe").css({"left": " -220px"})*/
}


//SCROLL WRAPER INDICAR


/*var tl = new TimelineMax({});
  tl.to("body", .3, {backgroundColor:"black"});

var scrollIndicator = document.getElementById('indicator');
var scrollLine = document.getElementById('line');
var scrollInnerLine = document.getElementById('innerline');
var scrollText = document.getElementById('text');

var scrollLineTl = new TimelineMax({
  paused: false, 
  repeat: -1
});

scrollLineTl.fromTo(scrollInnerLine, 1, {top: '-100%'}, {top: '0%', ease: Circ.easeInOut});
scrollLineTl.to(scrollInnerLine, 1, {top: '100%', ease: Circ.easeInOut});*/


//----------------------------------- resize script for hat----------------------------------------------
   if (window.innerHeight<window.innerWidth){ //                       checke work version {Mobile ,PC}

    var size =( window.innerHeight-100)/10; //переменная, которая отвечает совершенно за всю менюшку

    document.documentElement.style.setProperty('--menu-margin-top', size*5+'px'); 
    document.documentElement.style.setProperty('--menu-margin-left', size*0.9+'%'); 

    if(window.innerHeight/100>16 || window.innerWidth/100>16){     // 16 - max text size
        var TextFontSize = 16;
    }else{
        var TextFontSize = window.innerHeight*2.5/100;   // if less then 16
      }													// 2.5 - coefisient text size
  }
   else{  // MOBILE VERSION

    var size =( window.innerHeight-200)/10; //переменная, которая отвечает совершенно за всю менюшку

    document.documentElement.style.setProperty('--menu-margin-top', size*5+'px'); 
    document.documentElement.style.setProperty('--menu-margin-left', size*0.7+'%'); 
               

     if(window.innerHeight/100>14 || window.innerWidth/100>10){         // 14 - max text size
        var TextFontSize = 14;
    }else{
    var TextFontSize = window.innerWidth*3.5/100;   // 3.5 - coefisient text size
    }
  }




////////////////////////////////////////////////////////////////////////////////
//                                  MENU IGOR 
///////////////////////////////////////////////////////////////////////////////


  var arr=[];
  for (var i = 0; i < 29; i++) {
    arr[i]= Math.floor(Math.random() * (size*5) ) + size*3.4;
  }


  var textX=0;
  var textY=0;

  var circleX=0;
  var circleY=0;
  var circleRadius=0;
  circleRadius=size*5;
  
  var arrCoordItems=[[]];
  var bullCanv=false;

  


    var canv = document.getElementById("linesCanv");
    canv.width=window.innerWidth;
    canv.height=window.innerHeight;
    var ctx = linesCanv.getContext('2d');


  Number.prototype.toRad = function () { return this * Math.PI / 180; }

    

  //alert((90).toRad());

  function canvCoordX(radius, deg){
    var x=radius*Math.cos((deg).toRad());
    return x;
  }

  function canvCoordY(radius, deg){
    var y=radius*Math.sin((deg).toRad());
    return y;
  }

  function cathet(height, deg){
    var a=height*Math.tan((deg).toRad());
    return a;
  }

  function openMenu(){
    DrawCanv();
    bullCanv=true;
  }

  function closeMenu(){
    window.ctx.clearRect(0, 0, window.canv.width, window.canv.height);
    bullCanv=false;
  }

  function DrawCanv(){
    
    window.textX=document.getElementById('2elem').getBoundingClientRect().x;
    window.textY=document.getElementById('2elem').getBoundingClientRect().y;//координаты 2го пункта меню

    window.circleX=textX-circleRadius;

    window.circleY=textY+(size); //!!!!!!!!!
    
    var marginTopForItems=textY-(window.innerHeight)*0.08;

    var prevY=0;
    var prevX=0;
    var actualY = 0;
    var actualX = 0;
    var textDeg = 12;
    

    var degR=0;
    var firstExtra=0;
    var secondExtra=0;
    var firstY=0;
    var secondY=0;
      degR=-12;
    for (var i = 3; i <= 4; i++) { //i<=5 with portfolio
      firstY=Math.abs(canvCoordY(circleRadius+0.42*size,degR)-circleY+size*0.58+0.116*size);
      if (canvCoordY(circleRadius,degR)-circleY>0) {
        firstY=0;
        firstExtra=canvCoordY(circleRadius,degR)-circleY;
      }

      actualX=canvCoordX(circleRadius-firstExtra,degR)+circleX;
      document.getElementById(i+"item").style.marginLeft=actualX+"px";
      actualY=firstY;
      document.getElementById(i+"item").style.marginTop = actualY+"px";


      firstExtra=0;
      secondExtra=0;
      degR-=12;
    }


    $(".firstItem").css({"margin-top": textY-Math.abs(canvCoordY(circleRadius-0.42*size,24)+size*0.58+0.116*size)+"px"});
    $(".firstItem").css({"margin-left": canvCoordX(circleRadius-firstExtra,-24)+circleX+"px"});

    $(".nav-itemm a").css({"font-size": size*0.58+"px"});
    $(".activee a").css({"font-size": size*0.85+"px"});
    

    
      firstExtra=0;
      secondExtra=0;
      firstY=0;
      secondY=0;
      degR=0;
      var i=0;
      var iLast=29;

      setTimeout(loadCanv,20);
      function loadCanv(){
        
        ctx.beginPath();

      firstY=Math.abs(canvCoordY(circleRadius,degR)-circleY);
      secondY=Math.abs(canvCoordY(circleRadius+arr[i],degR)-circleY);
      if (canvCoordY(circleRadius,degR)-circleY>0) {
        firstY=0;
        firstExtra=canvCoordY(circleRadius,degR)-circleY;
      }
      if (canvCoordY(circleRadius+arr[i],degR)-circleY>0) {
        secondY=0;
        secondExtra=canvCoordY(circleRadius+arr[i],degR)-circleY;
      }
      
      ctx.moveTo(canvCoordX(circleRadius-firstExtra,degR)+circleX, firstY);
      
      ctx.lineTo(canvCoordX(circleRadius+arr[i]-secondExtra,degR)+circleX, secondY);

      
      ctx.strokeStyle = '#a6d8f2';
      ctx.fillStyle = "#78c7f0";
      ctx.lineWidth = 0.116*size;
      ctx.shadowBlur = 20;
      ctx.shadowColor="#4c98c0";
      ctx.stroke();
      ctx.closePath();
      //sleep(20);
      

      firstExtra=0;
      secondExtra=0;
      degR-=12;
      i++;
        //if(!animation) return false;
        if (i<iLast) {
          
          setTimeout(loadCanv,20);
        }
      }
       ctx.clearRect(0, 0, canv.width, canv.height);
  }





   window.onorientationchange =window.onload = window.onresize = function() {

     document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);

   	// code execute when {onorientationchange ,onload ,onresize}
  $(".trapecia3").css({"border": 0})						// clear old value
  $(".trapecia3").css({"margin": 0})						//
  $(".paralrlogram1").css({"border": 0})					//
  $(".paralrlogram1").css({"margin": 0})					//
  $(".trapecia2").css({"border": 0})						//
  $(".trapecia2").css({"margin": 0})						//
  $(".figure").css({"width": 0})							//
  $(".figure").css({"height":0})							//
  var width = window.innerWidth;									// init new Width/ Height
  var height =  window.innerHeight;
  var minTextmarg = (width /10)*width/1000;		 // height for TEXT befor it start getting smaller 
  												 // depends on screen size

  if(width>height)  // chek for PC / MOBILE
  {
    $(".figure").css({"width": (width-40)/2.5})  // width for ALL figure
    																										// LEFT TRAPECIA  3
    $(".trapecia3").css({"border-top": height-150+"px solid rgba(78, 182, 195,0.9)"})                       // height 
    $(".trapecia3").css({"border-right": width*0.25+"px solid transparent"})								// trapezoid slope width (makes a smaller trapezoid base (transparent part))
    $(".trapecia3").css({"margin-right": math.floor(((width-40)/2.5) -  width*0.25 )-0.5})					// space between trapezoid3 and trapezoid2

    																										// CENTER PARALELOGRAN  1
    $(".paralrlogram1").css({"border-bottom":height-170+"px solid rgba(78, 182, 195,0.7)"})					// height
    $(".paralrlogram1").css({"transform":"skew(-"+(90-math.atan((height-150)/( width*0.25))*(180/math.PI))	// tilt angle
      +"deg)"})																								// 

    																										// RIGHT TRAPECIA  2
    $(".trapecia2").css({"border-bottom": height-150+"px solid rgba(78, 182, 195,0.9)"})					// height
    $(".trapecia2").css({"border-left":  width*0.25+"px solid transparent"})								// trapezoid slope width (makes a smaller trapezoid base (transparent part))

    $(".row-trapecii-h").css({"height":height})																// ROW (where all placed) height

    																										// TITLE WORDS
     $(".TitleLOGO").css({"margin-top": 80})																// margin-top
     $(".TitleLOGO").css({"margin-left" :  width*0.1})														// margin-left
    $(".WEB").css({"font-size" : "min("+(height-minTextmarg)*3.5/100+"vw,"+(16)+"vw)"});					// formula for text size DINAMIC (WEB)
    $(".Production").css({"font-size" : "min("+(height-minTextmarg)*2/100+"vw,"+(8)+"vw)"});				// formula for text size DINAMIC (PRODUCTION)
      

      // safariPic
      $(".videoWeCanBe img").css({"transform":  "scale("+width/1500+")"});
      $(".videoWeCanBe img").css({"left": -1*200000/(width*0.5) + "px"});
      $(".videoWeCanBe img").css({"top": -height/2.5 + "px"});
  }
  else{/* ---------------------- MOBIELE --------------------------------*/
    
    var figureHeight = (height-30)/2.5;																		// ALL figure height FORMULA												
    $(".figure").css({"width": 0})																			// ALL figure width
    $(".figure").css({"height":figureHeight})																// ALL figure height

    																													// LEFT TRAPECIA  3
    $(".trapecia3").css({"border-bottom": (figureHeight)-20+"px solid transparent"})									// trapezoid slope width (makes a smaller trapezoid base (transparent part)) size->20
    $(".trapecia3").css({"border-left": (width-80)+"px solid rgba(78, 182, 195,0.9)"})									// width 
    $(".trapecia3").css({"margin-bottom": -height*0.2075 + math.floor(height - 2*(figureHeight) - height*0.2075)+0.5})	// space between trapezoid3 and trapezoid2

    																													// CENTER PARALELOGRAN  1
    $(".paralrlogram1").css({"transform":"skew(0deg,-"+(90-math.atan((width-80)/((figureHeight)-20))*(180/math.PI))		// tilt angle
      +"deg)"})																											//
    $(".paralrlogram1").css({"border-left":(width-100)+"px solid rgba(78, 182, 195,0.7)"})								// width

    																													// RIGHT TRAPECIA  2
    $(".trapecia2").css({"border-top": (figureHeight)-20+"px solid transparent"})										// trapezoid slope width (makes a smaller trapezoid base (transparent part)) size->20
    $(".trapecia2").css({"border-right":(width-80)+"px solid rgba(78, 182, 195,0.9)"})									// width

    $(".row-trapecii-h").css({"height":height})																// ROW (where all placed) height

    																										// TITLE WORDS
     $(".TitleLOGO").css({"margin-top": height*0.3})														// margin-top
     $(".TitleLOGO").css({"margin-left" : 100})																// margin-left
     $(".WEB").css({"font-size" : "min("+(width-110)*5.5/100+"vw,"+(14)+"vw)"});							// formula for text size DINAMIC (WEB)
     $(".Production").css({"font-size" : "min("+(width-110)*4/100+"vw,"+(7)+"vw)"});						// formula for text size DINAMIC (PRODUCTION)

     // safariPic
      $(".videoWeCanBe img").css({"transform": "scale("+width/1550+")"});
      $(".videoWeCanBe img").css({"left": -1*300000/(width*1.15) + "px"});
      $(".videoWeCanBe img").css({"top": -height/1.5 + "px"});
  }



 var ML_mybutton_Width = document.getElementById('hreader').offsetWidth - document.getElementById('brotton').offsetWidth;

 if(width>=400){
  ML_mybutton_Width-=160;
 }
$(".mybutton").css({"margin-left": ML_mybutton_Width+ "px"});

////////////////////////////////////////////////////////////////////////////////
  //                                  WECANBE onload
  ///////////////////////////////////////////////////////////////////////////////
if(!BrowserDetect.browser.includes('Safari') ){
  var videoWCB=document.getElementById('videoWeCanBe');
}
  

  if($("#weCanBeTitle:in-viewport")){
    drawWeCanBe();
   var intervalWCB = setInterval(drawWeCanBe,30000);
  }
  else{
    clearInterval(intervalWCB);
    $(".weCanBeTitle").animate({opacity: 0},100);
    $(".weCanBeTitle").text( "WE CAN BE");
    $(".weCanBeTitle").animate({opacity: 1},100);
    $(".tezisWeCanBe").animate({opacity: 0},100);
  }













  ////////////////////////////////////////////////////////////////////////////////
  //                                  MENU IGOR 
  ///////////////////////////////////////////////////////////////////////////////

if (bullCanv) {
    window.textX=document.getElementById('2elem').getBoundingClientRect().x;
    window.textY=document.getElementById('2elem').getBoundingClientRect().y;//координаты 2го пункта меню

    window.circleX=textX-circleRadius;

    window.circleY=textY+(size*1.5); //!!!!!!!!!

    var marginTopForItems=textY-(window.innerHeight)*0.08;

    var canv = document.getElementById("linesCanv");
    canv.width=window.innerWidth;
    canv.height=window.innerHeight;
    var ctx = linesCanv.getContext('2d');

    var degR=0;
    var firstExtra=0;
    var secondExtra=0;
    var firstY=0;
    var secondY=0;
      degR=-12;
    for (var i = 3; i <= 4; i++) { //i<=5 with portfolio
      firstY=Math.abs(canvCoordY(circleRadius+0.42*size,degR)-circleY+size*0.58+0.116*size);
      if (canvCoordY(circleRadius,degR)-circleY>0) {
        firstY=0;
        firstExtra=canvCoordY(circleRadius,degR)-circleY;
      }

      actualX=canvCoordX(circleRadius-firstExtra,degR)+circleX;
      document.getElementById(i+"item").style.marginLeft=actualX+"px";
      actualY=firstY;
      document.getElementById(i+"item").style.marginTop = actualY+"px";


      firstExtra=0;
      secondExtra=0;
      degR-=12;
    }


    $(".firstItem").css({"margin-top": textY-Math.abs(canvCoordY(circleRadius-0.42*size,24)+size*0.58+0.116*size)+"px"});
    $(".firstItem").css({"margin-left": canvCoordX(circleRadius-firstExtra,-24)+circleX+"px"});

    $(".nav-itemm a").css({"font-size": size*0.58+"px"});
    $(".activee a").css(  {"font-size": size*0.85+"px"});
    

    degR=0;
    firstExtra=0;
    secondExtra=0;
    firstY=0;
    secondY=0;

      
      var i=0;
      var iLast=29;

        for (var i = 0; i <= 30; i++) {

        ctx.beginPath();

      firstY=Math.abs(canvCoordY(circleRadius,degR)-circleY);
      secondY=Math.abs(canvCoordY(circleRadius+arr[i],degR)-circleY);
      if (canvCoordY(circleRadius,degR)-circleY>0) {
        firstY=0;
        firstExtra=canvCoordY(circleRadius,degR)-circleY;
      }
      if (canvCoordY(circleRadius+arr[i],degR)-circleY>0) {
        secondY=0;
        secondExtra=canvCoordY(circleRadius+arr[i],degR)-circleY;
      }
      ctx.moveTo(canvCoordX(circleRadius-firstExtra,degR)+circleX, firstY);
      ctx.lineTo(canvCoordX(circleRadius+arr[i]-secondExtra,degR)+circleX, secondY);

      
      ctx.strokeStyle = '#a6d8f2';
      ctx.fillStyle = "#a1fdff";
      ctx.lineWidth = 0.116*size;
      ctx.shadowBlur = 20;
      ctx.shadowColor="#4c98c0";
      ctx.stroke();
      ctx.closePath();
      firstExtra=0;
      secondExtra=0;
      degR-=12;
      }
    }
      


      


  





























}

   //hidden
   //visible
 //-----------------------------HEADER COLOR ON SCROLL -----------------------------
  var isonStart;
  var scrolled  = window.pageYOffset || document.documentElement.scrollTop;

var slideNow = 0;
// document.body.clientHeight полная высота блока 

//alert(window.pageYOffset);

 var lebelisOnStart = function(state){
  if(state){
     $(".mynavbar_brand").css({"visibility":"visible"});
  }
  else{
     $(".mynavbar_brand").css({"visibility":"hidden"});
  }
 }

/*if(slideNow>0){
  isonStart=false; lebelisOnStart(isonStart);
}
else{
  isonStart=true; lebelisOnStart(isonStart);
}
*/

for (var i = 0; i <= 5; i++) {

  if(window.pageYOffset-window.innerHeight/2<=$('#myblock'+i).offset().top){
    slideNow=i;
    break;
  }
}

          var destination = 0;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 100);



var myscrolling;

  var isOpen = false;
  
  /*if(scrolled > window.innerHeight - 500)
  {
    isonStart = false;
    $(".mynavbar_brand").css({"visibility":"hidden"});
  }
  else{
    isonStart = true;
  }
*/
  nav_icon3.onclick = function(){

    //visibility: hidden;
    if(!isOpen){
        $(".PopOutMenu").css({"display":"block"})          // menu button press
        $(".PopOutMenu").css({"visibility":"visible"})

         $(".mynavbar_brand").css({"visibility":"hidden"})

        //$('.btnBurger').addClass('open');
        openMenu(); 
    }

    else {
      $(".PopOutMenu").css({"display":"none"})
      $(".PopOutMenu").css({"visibility":"hidden"}) 
      //$('.btnBurger').removeClass('open');
      
          $(".mynavbar_brand").css({"visibility":"visible"})
      
     
      closeMenu();
    }

    isOpen = !isOpen;
    
  }

 function closeOnButtMenu(){
   $(".PopOutMenu").css({"display":"none"})
      $(".PopOutMenu").css({"visibility":"hidden"}) 
      //$('.btnBurger').removeClass('open');
      if(isonStart){
          $(".mynavbar_brand").css({"visibility":"visible"})
      }

     $(".btnBurger").removeClass('open');


    /*var  scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > window.innerHeight - 300){
       isonStart=false; lebelisOnStart(isonStart);
    }
     if( window.innerHeight - 300 > scrolled){
        isonStart=true; lebelisOnStart(isonStart);
    }*/

      isonStart=true; lebelisOnStart(isonStart);
      closeMenu();
}



var isphone = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   isphone = true;
  } else {
   isphone = false;
}





/*--------------------------------------------------------------------*/
/*-----------------------------  Menu --------------------------------*/
/*--------------------------------------------------------------------*/
//                                ошибка скрола \
var pause = false;
  window.onwheel= myscrolling =function(event){

    if (pause) return;

    pause = true;

   // window.scrollBy(event.deltaY > 0 ? 100 : -100,0)

  if (bullCanv) {
  
    isonStart=false; lebelisOnStart(isonStart);

    DrawCanv()

    var way=0;
    var itemLinkUp;
    var itemTextUp;
    var itemLinkDown;
    var itemTextDown;

    if(event.deltaY<0){
      way=1;
       if(isphone){way=0;} //for fone 
    };
    if (way) {
      itemTextDown=document.getElementById(4+'elem').text; //5+'elem' with portfolio
      itemLinkDown=document.getElementById(4+'elem').href; //5+'elem' with portfolio
      for (var i = 4;i>1;i--) { //i = 5 with portfolio 
      document.getElementById(i+'elem').text=document.getElementById((i-1)+'elem').text;
      document.getElementById(i+'elem').href=document.getElementById((i-1)+'elem').href;
      }
      document.getElementById(1+'elem').text=itemTextDown;
      document.getElementById(1+'elem').href=itemLinkDown;
      
    }
    else{
      itemTextUp=document.getElementById(1+'elem').text;
      itemLinkUp=document.getElementById(1+'elem').href;
      for (var i = 1;i<4;i++) { //i<5 with portfolio
      document.getElementById(i+'elem').text=document.getElementById((i+1)+'elem').text;
      document.getElementById(i+'elem').href=document.getElementById((i+1)+'elem').href;
      }
      document.getElementById(4+'elem').text=itemTextUp;//5+'elem' with portfolio
      document.getElementById(4+'elem').href=itemLinkUp;//5+'elem' with portfolio
    }
  }     //////////////////////////////////////////////////////////////////////////
else {

scrolled = window.pageYOffset || document.documentElement.scrollTop;
if(scrolled < window.innerHeight*1.2){

 if(event.deltaY<0){
     if(isphone){ slideNow++;}
     else{ slideNow--;}
    }
    else{
      if(isphone){ slideNow--;}
     else{slideNow++;}
    }

    if (slideNow>1) {slideNow=1; }
    else if (slideNow<0) {slideNow=0; }
          
                    

  /*if(slideNow>0){
    isonStart=false; lebelisOnStart(isonStart);
  }
  else{
    isonStart=true; lebelisOnStart(isonStart);
  }*/
 }


   /* scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > window.innerHeight - 300){
       isonStart=false; lebelisOnStart(isonStart);
    }
     if( window.innerHeight - 300 > scrolled){
        isonStart=true; lebelisOnStart(isonStart);
    }
*/
}

  window.setTimeout(function() {

        pause = false

    }, 508)

  };









/*var phineScrool = function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > window.innerHeight - 300){
       isonStart=false; lebelisOnStart(isonStart);
    }
     if( window.innerHeight - 300 > scrolled){
        isonStart=true; lebelisOnStart(isonStart);
    }
}*/





  ////////////////
  //            PHoneSwipe

 //Hammer($('#myblock0')).on('slidedown', function(){alert("slidedown")});
var square;
var manager;
var Swipe;
    square = document.querySelector('#idPopOutMenu');
     manager = new Hammer.Manager(square);

    // Create a recognizer
     Swipe = new Hammer.Swipe();

    // Add the recognizer to the manager
    manager.add(Swipe);

    // Subscribe to a desired event
    manager.on('swipe', function(event) {
      myscrolling(event);
    });



//body swipe
var square2 = document.querySelector('#myblock0');
  var   manager2 = new Hammer.Manager(square);

    // Create a recognizer
   var  Swipe2 = new Hammer.Swipe();

    // Add the recognizer to the manager
    manager2.add(Swipe2);

    // Subscribe to a desired event
    manager2.on('swipe', function() {
      phineScrool();
    });


/*// swipe for phome 
$('body').on({
    'touchmove': function(e) { 
        phineScrool();
    }
});*/










//set text in div
var targetDiv = document.getElementById('content');
    var htmlContent = '';
var linePadd = 33;

//$('#focus').trigger('hover');

    function populateData(event){
///////////////////////////////////////////////////
var finish = document.getElementById('ConectLine');
var start = document.getElementById('line_start');
var startX = start.getBoundingClientRect().x;
var finishX = finish.getBoundingClientRect().x;
//$(".example:hover .hover:before, .example:hover .hover:after").css({"width":finishX - startX - 50 +"px"})
if (window.innerWidth<800){
$(".menu_Aneed_Answer_line").css({"bottom" : "initial"});
  // var finishY = document.getElementById('ConectLine').getBoundingClientRect().y; 
   // var startY = document.getElementById('line_start').getBoundingClientRect().y;
   document.documentElement.style.setProperty('--line-width', finishX - startX -50  +'px'); 
  // document.documentElement.style.setProperty('--line-height', finishY - startY - 52  +'px'); 
}
else{
  document.documentElement.style.setProperty('--line-width', finishX - startX - 50 +'px');
}
//$('.example:hover').addClass('hover:before').css({"width":finishX - startX - 50 +"px"})
//////////////////////////////////////////////////////////////////////////////////////////

  $(".menu_Aneed_Answer_line").css({"bottom" : "initial"});

  var finishY = document.getElementById('ConectLine').getBoundingClientRect().y; 
 //var startY = document.getElementById('line_start').getBoundingClientRect().y;
   
 // document.documentElement.style.setProperty('--line-height', finishY - startY - 52  +'px'); 
 
      $(".menu_Aneed_Answer_line").css({"bottom" : "initial"});
      switch(event.target.className){
        case 'lineItem1 hover hover-1':{
          var startY = document.getElementById('line_start1').getBoundingClientRect().y;
          document.documentElement.style.setProperty('--line-height', finishY - startY - linePadd  +'px'); 

         htmlContent = 'It is an electronic “business card” of a company or individual, with a description of the activity. Its main purpose is a brief transfer of information about the company or person to attract the attention of visitors. Usually a site of this kind consists of 1-3 pages. This is the main page, a page with brief information about the company or person. The last page, for example, is a map, a feedback form for visitors.';
          break;
        }
        case 'lineItem2 hover hover-1':{
          var startY = document.getElementById('line_start2').getBoundingClientRect().y;
         document.documentElement.style.setProperty('--line-height', finishY - startY - linePadd  +'px'); 
          htmlContent = "It is any page that encourages the user to do something. For example, sign up for a newsletter, buy a conference ticket, request a quote, or simply download a presentation. As a rule, this is a one-page site on which product information is presented briefly or in detail, which allows to increase the effectiveness of advertising.";
break;
        }
        case 'lineItem3 hover hover-1':{
         var startY = document.getElementById('line_start3').getBoundingClientRect().y;
          document.documentElement.style.setProperty('--line-height', finishY - startY - linePadd  +'px'); 
          htmlContent = "This is primarily a fashion tool. It contains the full amount of information about the company itself, about the scope of its activities, the products and services offered.Business website allows you to issue online cost calculations, sell products, conduct marketing research and promotions, send news to visitors, collect customer reviews, arrange polls and much more.";
break;
        }
        case 'lineItem4 hover hover-1':{
         var startY = document.getElementById('line_start4').getBoundingClientRect().y;
         document.documentElement.style.setProperty('--line-height', finishY - startY - linePadd  +'px'); 
          htmlContent = "Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers.";
break;
        }
      }
       $(".menu_Aneed_Answer_line").css({"bottom" : "var(--line-height)"});
       //$(".menu_Aneed_Answer_line").css({"bottom" : "calc(var(--line-height)+200px)"});
      targetDiv.innerHTML = htmlContent;
    }

function setLineStart(){
  $(".menu_Aneed_Answer_line").css({"bottom" :"initial"});
  //$(".menu_Aneed_Answer_line").css({"bottom" :"calc(-1*" +"var(--line-height))"});
}
// CURSOR
  /*  const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })*/




 $(document).ready(function() {
//-------------SCROLL TO SCRIPT
       $("a.scrollto").click(function() {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 100);
          return false;
        });


      

            /*$('#fullpage').fullpage({
    //options here
                  scrollingSpeed: 1500,
                  autoScrolling:true
                  //licenseKey: 'YOUR_KEY_HERE'
              });

         //methods
   // $.fn.fullpage.setScrollingSpeed(1500);*/


          $('#nav-icon1,#nav-icon2,#nav_icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });

  // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");               

            switch(e.type) {
              case 'keyup': {
                 $label.toggleClass('js-hide-label', $this.val() == '');
              } break;
              case 'blur': {
                if( $this.val() == '' ) {
                    $label.addClass('js-hide-label');
                } else {
                    $label.removeClass('js-hide-label').addClass('js-unhighdark-label');
                }
              } break;
              case 'focus': {
                if( $this.val() !== '' ) {
                    $label.removeClass('js-unhighdark-label');
                }
              } break;
              default: break;
            }
           
        });
    } 
});

 

function drawWeCanBe(){
 
 if(!BrowserDetect.browser.includes('Safari') && !BrowserDetect.OS.includes('iPhone/iPod/iPad/iOS')){
  document.getElementById('videoWeCanBe').currentTime = 0;
  document.getElementById('videoWeCanBe').play();
}
 

  setTimeout('$(".weCanBeTitle").animate({opacity: 0},1000);', 3000);
  setTimeout('$(".tezisWeCanBe").animate({opacity: 0},1000);', 3000);
  setTimeout('$(".weCanBeTitle").css({"color":"#6c1faa" });',4500);
  setTimeout('$(".weCanBeTitle").text( "BETTER THAN YOUR EX");$(".weCanBeTitle").animate({opacity: 1},1000);',5000);
  setTimeout('$(".tezisWeCanBe").text( "With a competent approach, you can focus on the completely updated site and present this news as an indicator of the growth and development of the company.");$(".tezisWeCanBe").animate({opacity: 1},3000);',6000);

  setTimeout('$(".weCanBeTitle").animate({opacity: 0},1000);$(".tezisWeCanBe").animate({opacity: 0},1000);', 13000);
  setTimeout('$(".weCanBeTitle").text( "Give a helping hand");$(".weCanBeTitle").animate({opacity: 1},1000);',15000);
  setTimeout('$(".tezisWeCanBe").text( "With us you can connect with a new audience, boost your bottom line, stay current and set yourself apart with the competitors.");$(".tezisWeCanBe").animate({opacity: 1},3000);',16000);

  setTimeout('$(".weCanBeTitle").animate({opacity: 0},1000);$(".tezisWeCanBe").animate({opacity: 0},1000);', 23000);
  setTimeout('$(".weCanBeTitle").text( "Start with us");$(".weCanBeTitle").animate({opacity: 1},1000);',25000);
  setTimeout('$(".tezisWeCanBe").text( "We build your brand together. Help you to make the site attractive and popular. Reflect your new goals, products or offers by keeping up with the times.");$(".tezisWeCanBe").animate({opacity: 1},3000);',26000);


    //$(".tezisWeCanBe").animate({opacity: 0},3000);
   // setTimeout(video.pause(),30000);

  };


/* setTimeout(
  function(){

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > window.innerHeight - 500){
       isonStart=false; lebelisOnStart(isonStart);
    }
     if( window.innerHeight - 500 > scrolled){
        isonStart=true; lebelisOnStart(isonStart);
    }
  }
,10);*/

