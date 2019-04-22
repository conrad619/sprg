WOW.prototype.addBox = function(element) {
  this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function() {
  $(this).css({
    'visibility': 'hidden',
    'animation-name': 'none'
  }).removeClass('animated');
  wow.addBox(this);
}).scrollSpy();

function isMobileWidth() {
  return $('#mobile-indicator').is(':visible');
}

// function dynamicCarousel(){   
//   var newPictures='';
//   var awards=[];
//   var itemNo=0;
//   if(isMobileWidth()){
//     itemNo = 3;
//   }else{
//     itemNo = 5;
//   }
//   newPictures = '<div class="award6 d-flex justify-content-center">';
//   $("#awards-images li").each(function(index){
//     awards.push($(this).html());
//     if((index)%(itemNo) != 0){
//     newPictures += '<picture>\
//         <source srcset="assets/images/awards/'+ $(this).html() +'.webp" type="image/webp">\
//         <source srcset="assets/images/awards/'+ $(this).html() +'.png" type="image/jpeg">\
//         <img src="assets/images/awards/'+ $(this).html() +'.png"  class="card-img-top" alt="Award 1">\
//       </picture>';
//     }else{
//       if(index!=0){
//       newPictures += ' </div>\
//         <div class="award6 d-flex justify-content-center">\
//         <picture>';
//       }

//         newPictures += 
//         '<source srcset="assets/images/awards/'+ $(this).html() +'.webp" type="image/webp">\
//         <source srcset="assets/images/awards/'+ $(this).html() +'.png" type="image/jpeg">\
//         <img src="assets/images/awards/'+ $(this).html() +'.png"  class="card-img-top" alt="Award 1">\
//         </picture>';
//     }
//   });
//   if(itemNo-(awards.length%itemNo) != itemNo){
//     for (var i = 0; i < itemNo-(awards.length%itemNo); i++) {
      
//       newPictures += '<picture>\
//           <source srcset="assets/images/awards/'+ awards[i] +'.webp" type="image/webp">\
//           <source srcset="assets/images/awards/'+ awards[i] +'.png" type="image/jpeg">\
//           <img src="assets/images/awards/'+ awards[i] +'.png"  class="card-img-top" alt="Award 1">\
//         </picture>';
//     }
//   }

//   newPictures += '</div>';
//   $(".awardsCarousel").html(newPictures);
//   //alert(awards.toString());
// }


function dynamicCarousel(){   
  var newPictures='';
  var itemNo=0;
  awards=1;
  award=0;
  if(isMobileWidth()){
    itemNo = 2;
  }else{
    itemNo = 3;
  }
  newPictures = '<div class="awards1 d-flex justify-content-center align-content-center align-items-center">';

  $("#awards-images li").each(function(index){
    award++;
    newPictures += '<picture>\
        <source srcset="assets/images/awards/'+ $(this).html() +'.webp" type="image/webp">\
        <source srcset="assets/images/awards/'+ $(this).html() +'.png" type="image/jpeg">\
        <img src="assets/images/awards/'+ $(this).html() +'.png"  class="card-img-top award'+award+'" alt="Award '+award+'">\
      </picture>';
      
    if((index)%(itemNo) == 0 && index != 0){
      awards++;
      newPictures += ' </div>\
        <div class="awards'+ awards +' d-flex justify-content-center align-content-center align-items-center">';    
    }

  });

  newPictures += '</div>';
  $(".awardsCarousel").html(newPictures);
  //alert(awards.toString());
}

 dynamicCarousel();

// $('.awardsCarousel').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   prevArrow: $('.prevs'),
//   nextArrow: $('.nexts'),
//   variableWidth: false,
//   responsive: [
//   {
//     breakpoint: 1000,
//     settings: {
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       prevArrow: $('.prevs'),
//       nextArrow: $('.nexts'),
//       variableWidth: false
//     }
//   }]
// });