$(document).ready(function(){
    
        $('.menu_img1').hover(function(){
            $(this).stop().animate({bottom:30},500);
        }, function(){
            $(this).stop().animate({bottom:0},300);
        });
        $('.menu_img2').hover(function(){
            $(this).stop().animate({bottom:30},500);
        }, function(){
            $(this).stop().animate({bottom:0},300);
        });
        $('.menu_img3').hover(function(){
            $(this).stop().animate({bottom:30},500);
        }, function(){
            $(this).stop().animate({bottom:0},300);
        });
        $('.menu_img4').hover(function(){
            $(this).stop().animate({bottom:30},500);
        }, function(){
            $(this).stop().animate({bottom:0},300);
        });
        $('.menu_img5').hover(function(){
            $(this).stop().animate({bottom:30},500);
        }, function(){
            $(this).stop().animate({bottom:0},300);
        });
        $('#gnb>li').hover(function(){
            $(this).find('.dropdown-content').stop().slideDown(500);
        },function(){
            $(this).find('.dropdown-content').stop().slideUp(500);
        });
        var index = 1;
        $('.leftBT').click(function(){
            $('.slide_img').animate({left:-(view*850)},'slow');
        })
        $('.rightBT').click(function(){
            $('.slide_img').animate({right:view+850},'slow');
        })
        $('.articleGroup article').hover(function(){
            $(this).find('img').stop().animate({bottom:30},500);
        },function(){
            $(this).find('img').stop().animate({bottom:0},500);
        });

        //SLIDE
        var index=1;
            moveSlider(index);
            $('.slide_img').append($('.slider_image').first().clone());
            $('.slide_img').prepend($('.slider_image').eq(-2).clone());
            $('.slide_leftBT').click(function(){
                if(index>1){
                    index--;
                    moveSlider(index);
                }else{
                    $('.slide_img').css('left',-5100);
                    index=5;
                    moveSlider(index);
                }
            });
            $('.slide_rightBT').click(function(){
                if(index<5){
                    index++;
                    moveSlider(index);
                }else{
                    $('.slide_img').css('left',0);
                    index=1;
                    moveSlider(index);
                }
            });
            // ????????? ???????????? ??????
           function moveSlider(index){
                $('.slide_img').animate({
                    left:-(index*850)
                },'slow');
                
           }

});

var slides = document.querySelector('.rankView'),
    slide = document.querySelectorAll('.rankView li'),
    currentIndex = 0,
    slideCount = slide.length,
    slideWidth = 200,
    prevBtn = document.querySelector('.slide_bestL'),
    nextBtn = document.querySelector('.slide_bestR');

    slides.style.width = slideCount*slideWidth+'px';

function moveSlide(num){
    slides.style.left = -num * slideWidth + 'px'; //??????????????? ?????? ?????? -left??????
    currentIndex = num; //?????? ??????????????? currentIndex ??????
}

nextBtn.addEventListener('click',function(){
    if(currentIndex < slideCount-4){ //currentIndex??? slide??? ????????? ??????????????? ?????????
        moveSlide(currentIndex+1); //??????????????? ????????? ??????
        console.log(currentIndex);
    }else{
        moveSlide(0); //currentIndex??? ????????? ???????????? ?????? 0 ??????????????? ??????
    };
    
});
prevBtn.addEventListener('click',function(){
    if(currentIndex > 0){
        moveSlide(currentIndex-1);
    }else{
        moveSlide(slideCount-4);
    };
    
});