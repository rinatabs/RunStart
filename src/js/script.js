$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1000,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.png"></button>',
            responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            dots: true,
                            arrows: false,
                            speed: 1000
                        }
                    }
            ]
          }

    );
  });

