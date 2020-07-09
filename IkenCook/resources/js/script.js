$(document).ready(function()
{
    /* ---sticky nav--- */
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down")
        {
            $('nav').addClass('sticky')
        }
        else
        {
            $('nav').removeClass('sticky')
        }
    },{
        offset: '100px'
    });

    /* ---scroll buttons--- */

   $('.js--scroll-to-steps').click(function(){
       $('html, body').animate({scrollTop:$('.js--section-steps').offset().top}, 1500);
   }

   );

   $('.js--scroll-to-meals').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-meals').offset().top}, 1500);
}
);

$("a").on('click', function(event) {

    if (this.hash !== "") 
    {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({scrollTop: $(hash).offset().top}, 1500, function(){

        window.location.hash = hash;
      });
    } 
  });
  
/* ---Animations--- */
$('.js--pulse-animate').waypoint(function(direction){
    $('.js--pulse-animate').addClass('animated pulse');
},{
    offset:'50px'}
    );

});
    

