$(document).ready(function(){
	// 返程日期
	$("#J_returnTicket").bind("click",function(){
		$(this).toggleClass('checked');
		$("#J_return").toggleClass('light');
	});
	$("#J_student").bind("click",function(){
		$(this).toggleClass('checked');
	});
	//快速选择：前一天后一天
	$(".top .back").hover(function(){
		$(".top .last").show();
	},function(){
		$(".top .last").hide();
	});
	$(".top .go").hover(function(){
		$(".top .before").show();
	},function(){
		$(".top .before").hide();
	});

	//席别
	$("#J_seats .chooseAll").bind('click',function(){
		$("#J_seats input").addClass('checked');
	})
	$("#J_seats .chooseNull").bind('click',function(){
		$("#J_seats input").removeClass('checked');
	})
	$("#J_seat").bind('click',function(){
		$("#J_seats").show();
	})
	$("#J_seats input").bind('click',function(){
		$(this).toggleClass('checked');
	})

	//列车类型
	$("#J_trains .chooseAll").bind('click',function(){
		$("#J_trains input").addClass('checked');
	})
	$("#J_trains .chooseNull").bind('click',function(){
		$("#J_trains input").removeClass('checked');
	})
	$("#J_train").bind('click',function(){
		$("#J_trains").show();
	})
	$("#J_trains input").bind('click',function(){
		$(this).toggleClass('checked');
	})
	//出发时间
	$("#J_setOuts .chooseAll").bind('click',function(){
		$("#J_setOuts input").addClass('checked');
	})
	$("#J_setOuts .chooseNull").bind('click',function(){
		$("#J_setOuts input").removeClass('checked');
	})
	$("#J_setOut").bind('click',function(){
		$("#J_setOuts").show();
	})
	$("#J_setOuts input").bind('click',function(){
		$(this).toggleClass('checked');
	})
	//乘车人
	$("#J_passengers .chooseAll").bind('click',function(){
		$("#J_passengers input").addClass('checked');
	})
	$("#J_passengers .chooseNull").bind('click',function(){
		$("#J_passengers input").removeClass('checked');
	})
	$("#J_passenger").bind('click',function(){
		$("#J_passengers").show();
	})
	$("#J_passengers input").bind('click',function(){
		$(this).toggleClass('checked');
	})

	/*$('.popup .chooseAll').click(function(){
		$(this).parent().find('input').addClass('checked');
	})
	$('.popup .chooseNull').click(function(){
		$(this).parent('.choose').find('input').removeClass('checked');
	})*/

	//tab切换
	var li = $('.tab_menu li');
	li.click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = li.index(this);
		$('.tab_box .cities').eq(index).show().siblings().hide();
	})

	 //翻页
   /* $('.last-page').on('click',function () {
        var pages= $('.city .cities');
        for (var i = 1; i < pages.length; i++){
            if(pages.item(i).css('display') == 'block' && i > 1){
                pages.item(i).hide();
                pages.item(i-1).show();
                break;
            }
        }
    });*/

     /*$('.last-page').on('click',function () {
        var $pages= $('.city .cities');
        for (var i = 1; i < $pages.length; i++){
            if($pages[i].hasClass('disappear') && i > 1){
                $pages[i].hide();
                pages[i-1].show();
                break;
            }
        }
    });*/
    /*$('.next-page').on('click',function () {
        var pages= $('.city .cities');
        for (var i = 0; i < pages.length; i++){
            if(pages.item(i).css('display') == 'block' && i != pages.length){
                pages.item(i).hide();
                pages.item(i+1).show();
                break;
            }
        }
    });*/
    /*$('.next-page').on('click',function () {
        var $pages= $('.city .cities');
        for (var i = 0; i < $pages.length; i++){
            if($pages.hasClass('disappear') && i != $pages.length){
                $pages[i].hide();
                $pages[i+1].show();
                break;
            }
        }
    });*/

    //关闭弹窗
    $('.cancle').click(function(){
    	$(this).parent().hide();
    })

    //显示城市列表
    $('#J_from').click(function(){
    	$('.city').show();
    	$(this).addClass('focus');
    	$('#J_arrive').removeClass('focus');
    })
    $('#J_arrive').click(function(){
    	$('.city').show();
    	$(this).addClass('focus');
    	$('#J_from').removeClass('focus');
    })

    //显示日历
    $('#J_setOutDate').click(function(){

    	$('#calendar').show();
    	$(this).addClass('focus');
    	$('#J_returnDate').removeClass('focus');
    	
    })
    $('#J_returnDate').bind('click',function(event){
    	$('#calendar').show();
    	$(this).addClass('focus');
    	$('#J_setOutDate').removeClass('focus');
    	
    	event.stopPropagation();
    })

    // //点击显示具体日期
    // $('#calendar tbody td').click(function(){
    //     //console.log('1');
    //     $('#calendar tbody td').removeClass('currentValue');
    //     $(this).addClass('currentValue');
    // 	var $date = $(this).val();
    // 	if($('#J_setOutDate').hasClass('focus')){
    // 		$('#J_setOutDate').val($date);
    // 	}else if($('#J_returnDate').hasClass('focus')){
    // 		$('#J_returnDate').val($date);
    // 	}
    // })
    // function datepicker(){
    //      $('#calendar tbody td').click(function(){
    //         //console.log('1');
    //         $('#calendar tbody td').removeClass('currentValue');
    //         $(this).addClass('currentValue');
    //         var $date = $(this).val();
    //         if($('#J_setOutDate').hasClass('focus')){
    //             $('#J_setOutDate').val($date);
    //         }else if($('#J_returnDate').hasClass('focus')){
    //             $('#J_returnDate').val($date);
    //         }
    //     })
    //      console.log('test');
    // }
    //  setInterval(datepicker,1000);

    //选择城市
    $('.tab_box li').click(function(){
    	city = $(this).html();
    	if($('#J_from').hasClass('focus')){
    		$('#J_from').val(city);
    	}else if($('#J_arrive').hasClass('focus')){
    		$('#J_arrive').val(city);
    	}
    })

    //交换城市
    $('.transform') .click(function(){
    	var a = $('#J_from').val();
    	var b = $('#J_arrive').val();
    	$('#J_from').val(b);
    	$('#J_arrive').val(a);
    }) 

    //设置日期的默认值
    var now = $('#calendar tbody .current').val();
    //console.log($now);
    $('#J_setOutDate').attr('placeholder',now);

    //获取明天和后天的值
    var now = new Date();
    var t = new Date(now.getTime() + 86400000);
    var at = new Date(t.getTime() + 86400000);
    var week = new Array('日','一','二','三','四','五','六');
    var tomorrow = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() + '星期' + week[t.getDay()];
    var afterTomorrow = at.getFullYear() + '-' + (at.getMonth() + 1) + '-' + at.getDate() + '星期' + week[at.getDay()];
    var currentDate = parseInt($('#calendar tbody .currentValue').attr('name'));
    //前一天和后一天
    $('.top .back').click(function(){
        if(currentDate>parseInt(new Date().getTime())){
            currentDate = currentDate-86400000;
            var b = new Date(currentDate);
            var before = b.getFullYear() + '-' + (b.getMonth()+1) + '-' + b.getDate() + '星期' + week[b.getDay()];
            $('#J_setOutDate').val(before);
        }
    })

    $('.top .go').click(function(){
        currentDate = (currentDate+86400000);
        var b = new Date(currentDate);
        var before = b.getFullYear() + '-' + (b.getMonth()+1) + '-' + b.getDate() + '星期' + week[b.getDay()];
        $('#J_setOutDate').val(before);
    })

    //今天  明天 后天
    $('.quickPic .today').click(function(){
    	var today = $('#calendar tbody .current');
    	 $('#J_setOutDate').val(today.val());
         $('#J_setOutDate').attr('name',today.attr('name'));
         currentDate = parseInt(new Date().getTime());
    })
    $('.quickPic .tomorrow').click(function(){
    	$('#J_setOutDate').val(tomorrow);
        currentDate = parseInt(new Date().getTime()+86400000);
    })
    $('.quickPic .afterTomorrow').click(function(){
        $('#J_setOutDate').val(afterTomorrow);
        currentDate = parseInt(new Date().getTime()+86400000*2);
    })

    //快速选择路线

    $('.routes li').click(function(){
    	var a = $(this).children('.start').html();
    	var b = $(this).children('.end').html();

    	$('#J_from').val($a);
    	$('#J_arrive').val($b);
    })



 


 })