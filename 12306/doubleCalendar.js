
<!-- 画日历 -->
var now = new Date();
var nowMonth = now.getMonth();
var nowYear = now.getFullYear();

function calendar(leftY,leftM){
	// m 是实际月份[1-12]
	$('.right tbody').empty();
	$('.left tbody').empty();
	var now = new Date();
	var year = leftY || nowYear;
	var month = leftM || nowMonth + 1; // month -> [1-12]
	var date = now.getDate();
	var $left = $('.left tbody');
	var $right = $('.right tbody');

	//填充title里的日期
	$('#calendar .left .year').html(year);
	$('#calendar .left .month').html(month);

	reCalendar('left');

	if(month == 12){
		$('#calendar .right .year').html(year + 1);
		$('#calendar .right .month').html("1");
	// reCalendar($right,year+1,1,date);
	}else{
		$('#calendar .right .year').html(year);
		$('#calendar .right .month').html(month+1);
	}
	reCalendar('right');
	
	//$('.left tbody').append($tr);
}

//重新画日历
function reCalendar(side){
	//判断是否为闰年
	function is_leap(year) { 
	   return (year%100 == 0 ? res = (year%400 == 0?1:0) : res = (year%4 == 0?1:0));
	}
	if (side === 'left') {
		side = $('.left tbody');
		var newYear = $('#calendar .left .year').html();
		var newMonth = $('#calendar .left .month').html();
	}else{
		side = $('.right tbody');
		var newYear = $('#calendar .right .year').html();
		var newMonth = $('#calendar .right .month').html();
	}
	var newDay = new Date();
	// console.log(newYear+'_'+newMonth);
	// newDay.setFullYear(2012,12,2);
	// console.log(newDay)
	// var newYear = newDay.getFullYear(); //年份
	// var newMonth = newDay.getMonth(); //月份
	var newDate = newDay.getDate(); //今日日期
	var n1str = new Date(newYear,newMonth,1); //当月第一天
	// // console.log("重新画日历")
	// // console.log("年份"+newYear);
	// // console.log("月份"+newMonth);
	// // console.log("日期"+newDate);
	// // console.log("当月第一天"+n1str);

	var firstday = n1str.getDay(); //当月第一天星期几 [0-6:周日-周六]
	// // console.log("当月第一天星期几"+firstday);
	var m_days = new Array(31,28+is_leap(newYear),31,30,31,30,31,31,30,31,30,31); //各月份的总天数

	var week = new Array('一','二','三','四','五','六','日');

	var tr_str = Math.ceil((m_days[newMonth-1] + firstday)/7); //表格所需要行数 
	for(i = 0;i < tr_str;i ++) { //表格的行
	   $tr = $("<tr></tr>");
	   for(k = 0;k < 7;k ++) { //表格每行的单元格
	      idx = i * 7 + k; //单元格自然序列号 [0-42]

	      date_str = idx - firstday + 1; //计算日期
	      week_str = week[date_str%7 ]; //计算星期几
	      // console.log(week_str);
	      (date_str <=0 || date_str > m_days[newMonth-1]) ? date_str="&nbsp;" : date_str=idx-firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）
	      //打印日期：今天底色为红
	      var $td ;
	      if(newYear < nowYear){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth < (nowMonth+1)){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth == (nowMonth+1) && date_str < newDate ){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth == (nowMonth+1) && date_str == newDate){
	      	$td = $("<td class='current currentValue'>" + date_str + "</td>");
	      }else{
	      	$td = $("<td>" + date_str + "</td>");
	      }
	      $td.val(newYear+'-'+(newMonth) +'-'+date_str+'星期'+week_str);
	      $name = new Date(newYear,(newMonth-1),date_str).getTime();
	      $td.attr('name',$name);
	      //$td.title(new Date(newYear,newMonth,date_str));
	      // console.log($td.attr('name'));
	      $tr.append($td);
	   }
		side.append($tr);	   
	}
	datepicker();
}
calendar();

//点击切换月份
$('.lastMonth').click(function(){
	$flag = 1;
	changeM($flag);
	return $flag;
	//datepicker();
})
$('.nextMonth').click(function(){
	$flag = 0;
	changeM($flag);
	return $flag;
	//datepicker();
})
//点击切换月份
function changeM(obj){

	$newLM = parseInt($('#calendar .left .month').html());
	$newLY = parseInt($('#calendar .left .year').html());
	// console.log("左月："+$newLM);
	// console.log("左年："+$newLY);
	// 向左
	if(obj == 1){
		$newLM --;
	}else{
		$newLM ++;
	}

	if($newLM < 1){
		$newLM = 12;
		$newLY --;
	}
	if($newLM > 12){
		$newLM = 1;
		$newLY ++;
	}

	calendar($newLY,$newLM);
}

//点击显示具体日期
function datepicker(){
  $('#calendar tbody td').click(function(){
        //console.log('1');
    if(!$(this).hasClass("pre")){
      $('#calendar tbody td').removeClass('currentValue');
      $(this).addClass('currentValue');
      var $date = $(this).val();
      if($('#J_setOutDate').hasClass('focus')){
          $('#J_setOutDate').val($date);
      }else if($('#J_returnDate').hasClass('focus')){
          $('#J_returnDate').val($date);
      }
    }
  })

}





