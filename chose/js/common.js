$(document).ready(function() {
    ! function(window, document, $, undefined) {


        var num = 0;
        var width = $('.progress').width();
        // console.log(width);
        var center = $('.center');
        // console.log(center);
        if(num == 0){
            //$('.third').css("margin-top", "-0.925rem");
        }




        // 点击下一题
        $('.next').click(function() {

            // 提示隐藏
            // $('.mask').css({
            //     display:'none',
            //
            // });

            //保存数据
            var boxArr = $('.center');
            for(var i = 0;i<boxArr.length;i++){
                // console.log(":::"+$(boxArr[i]).css('display'))
                if($(boxArr[i]).css('display') == 'block'){
                    // console.log($(boxArr[i]))
                    // console.log($($(boxArr[i]).find('input:checked')));
                    //判断是否 选择
                    if($($(boxArr[i]).find('input:checked')).length == 0){
                        //没选择，弹出提示
                        // $('.mask').css({
                        //     display:'block',
                        //     backgroundColor:'gray'
                        // });
                        $('.next').css("backgroundColor","#cccbcb");
                        return;
                    }else{
                        num++;
                        if(num>6) num=6;
                        console.log(num);
                        if(num==0){
                            $('.next').css("backgroundColor","#068aff");
                        }else{
                            $('.next').css("backgroundColor","#cccbcb");
                        }
                    }
                    newArr.push($($($(boxArr[i]).find('input:checked'))[0]).parent('i').data('value'));
                }
            }



            // 求数组的和
            // console.log(newArr)
            var sum_score =0;
            for(var i=0;i<newArr.length;i++){
                sum_score = sum_score + newArr[i];
            }


            // $('.next').click(function(){
            //
            //
            // })
            // console.log(num);
            if(num===6){
                var assessment;
                // console.log(sum_score);
                if(sum_score>=5 && sum_score<=7){
                    assessment = 1
                }else if(sum_score>=8 && sum_score<=12){
                    assessment = 2
                }else{
                    assessment = 3
                }
                //console.log(assessment);
                var hash = hex_md5(GD.uid+'fxpc');
                console.log(hash);

                // $('.next').click(function(){
                    // $('.next').parent().attr("href","result.html");
                    $.ajax({
                        url:'https://www.gandaiwang.com/index.php/Test/assessment',
                        type:'POST',
                        data:{
                            assessment:assessment,
                            sum_score:sum_score,
                            web_key:hash
                        },
                        success:function(data){
                            console.log(data);

                            if(data.r ==1){
                                // location.href="result.html";

                                // window.location.href='http://demo3.renrunkeji.com:8027/ind/app/assessment/result.html';
                                // $('.next').parent().attr("href","result.html");
                                // $(location).attr('href', 'result.html');
                                console.log(assessment);
                                if(assessment===1){
                                    // $(location).attr('href', 'result.html');
                                    window.location.href='https://www.gandaiwang.com/ind/app/assessment/result.html';
                                }else if(assessment===2){
                                    // $(location).attr('href', 'result01.html');
                                    window.location.href='https://www.gandaiwang.com/ind/app/assessment/result01.html';
                                }else{
                                    // $(location).attr('href', 'result02.html');
                                    window.location.href='https://www.gandaiwang.com/ind/app/assessment/result02.html';
                                }
                                // alert(data.msg)
                            }
                        }
                    })
                // })

            }else{
                // $('.box').css("height", "486px");
                //$('.select').css("margin-top", "0.075rem");
                //$('.sixth').css("margin-top", "-0.875rem");
                $('.bottom').css("margin-top", "2.25rem");
                $(".next").find("span").text("下一题");
            }






            // setTimeout(function () {

                // console.log(num);
                if (num !== 0) {
                    $('.bottom').css("padding", "0 2.575rem");
                    $('.button1').hide();
                    $('.button2').show();

                }
                center.eq(num).show().siblings().hide();

            var w = $(".all").width();
            var danwei = w/6;
            // 进度条移动
            $('.progress').animate({
                width:  danwei * (num+1)
            },200);


                if (num === 5) {
                    //$('.box').css("height", "14.375rem");
                    //$('.sixth').css("margin-top", "-2.06rem");
                    $('.bottom').css("margin-top", "4.5rem");
                    $(".next").find("span").text("提交");
                } else {
                    //$('.box').css("height", "12.15rem");
                    //$('.select').css("margin-top", "0.075rem");
                    $('.select').css("border", "solid 1px #068aff");
                    //$('.sixth').css("margin-top", "-0.875rem");
                    $('.bottom').css("margin-top", "2.25rem");
                    $(".next").find("span").text("下一题");

                }
            // },500);




            return assessment;

        })




        // 点击上一题
        $('.prev').click(function() {

            var select = $('.select');
            for (var i = 0; i < select.length; i++) {
                select[i].className = 'select';
            }
            // 提示隐藏
            // $('.mask').css({
            //     display:'none',
            // });
            // 后退的时候数组减去最后一个
            newArr.pop();

            // console.log("|||||"+newArr)
            num--;
            if (num == 0) {
                //$('.third').css("margin-top", "-0.925rem");
                $('.bottom').css("padding", "0 2rem");
                $('.button2').hide();
                $('.button1').show();

            }

            if(num == 0 || num == 1 || num == 2 || num == 3 || num == 4){
                $(".next").find("span").text("下一题");
            }

            if (num === 6) {
                //$('.box').css("height", "14.375rem");
                //$('.select').css("margin-top", "0.875rem");
                $('.select').css("border", "solid 1px #068aff");
                //$('.sixth').css("margin-top", "-1.25rem");
                $('.bottom').css("margin-top", "4.5rem")
            } else {
                //$('.box').css("height", "12.15rem");
                //$('.select').css("margin-top", "0.075rem");
                $('.select').css("border", "solid 1px #068aff");
                //$('.sixth').css("margin-top", "-0.875rem");
                $('.bottom').css("margin-top", "2.25rem")
            }


            center.eq(num).show().siblings().hide();
            var w = $(".all").width();
            var danwei = w/6;
            // 进度条移动
            $('.progress').animate({
                width: danwei * num
            }, 200)




        })


        // 按钮颜色排他
        // 记录答题
        var select = $('.select');
        for (var i = 0; i < select.length; i++) {

            select[i].onclick = function() {
                //debugger;
                for (var i = 0; i < select.length; i++) {
                    select[i].className = 'select';
                    //$('.button1 .next').css('background-color','#cccbcb');
                    //$('.button2 .next').css('background-color','#cccbcb');

                }
                this.className = 'select bgc';
                $('.next').css('background-color','#068aff');
            }




        }

        // 绑定点击选择
        var arr = [];
        var Is = $(".iconfont");
        // console.log(Is);
        var newArr = [];
        // console.log(Is);
        for (var i = 0; i < Is.length; i++) {
            Is[i].index = i;
            $(Is[i]).on('click', function() {
                // console.log(1)
                $(this).find('input').prop('checked',true);


            })

        }


        // $(".t3").click(function(){
        //     $(".mask").css("display","none")
        // })





    }(window, document, jQuery)
})