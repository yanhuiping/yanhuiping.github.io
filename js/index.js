$(function(){
    var jineng=$('.jineng');

    $('.jineng').on('mouseenter , mouseleave',function(){
        $(this).find('ul').stop().fadeToggle();
    })
    console.log(jineng.width());
    var tou=$('.tou');
    var toubox=$('.toubox');
    var spans =$('.toubox span');
    console.log(spans)
    spans.on('click',function(){
        spans.removeClass('active');
        $(this).addClass('active');
    })


    var floor=$('.floor');
    var arr=[];
    for(var i=0;i<floor.length;i++){
        arr.push(floor[i].offsetTop);
    }
    $(window).on('scroll',function(){
        var stop=document.body.scrollTop||document.documentElement.scrollTop;
        for(var i=0;i<spans.length;i++){
            // console.log(spans.length)
            spans.eq(i).removeClass('active');

            if(arr[i]<=stop+500){
                for(var j=0;j<spans.length;j++){
                    spans.eq(j).removeClass('active');
                }
                spans.eq(i).addClass('active');
            }
            if(arr[i]<=stop){
                floor.eq(i).find('.top').addClass('topmove');
            }

        }
        /*if(arr[1]<stop){
            $('.tou').addClass('scroll');
        }else if(stop<arr[1]){

            $('.tou').removeClass('scroll');
        }*/
        if(stop>=arr[1]-50){
            $('.tou').css({
                position:'fixed',
                top:0,
                left:0
            })
        }else {
            $('.tou').css({
                position:'relative'
            })
        }

    })
    spans.on('click',function(){
       var num= $(this).index();
        console.log(num);
       /* floor.eq(num).animate({

        })*/
        $('body').animate({
            scrollTop:arr[num]
        }).queue(function(){
            $(this).dequeue();
        })

    })
    $('.tbox span').on('click',function(){
        var num=$(this).index();
        $('body').animate({
            scrollTop:arr[num]
        }).queue(function(){
            $(this).dequeue();
        })
    })

    var foot=$('.foot');
    foot.on('mouseenter ',function(){
        $(this).find('a').removeClass('spanleave').addClass('span');
        $(this).find('h3').css({
            display:'block'
        }).removeClass('spanleave').addClass('span');
    })
    foot.on('mouseleave',function(){
        $(this).find('a').removeClass('span').addClass('spanleave');
        $(this).find('h3').css({
            display:'none'
        }).removeClass('span').addClass('spanleave');
    })
    $('.toubox1').on('click',function(){
        $('.tbox').slideToggle();
    })

})