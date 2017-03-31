<!-- 画日历 -->
var now = new Date();
var nowMonth = now.getMonth();
var nowYear = now.getFullYear();
function calendar(y,m){
	$('.right tbody').empty();
	$('.left tbody').empty();
	var now = new Date();
	var year = y || nowYear;
	var month = m-1 || nowMonth;
	var date = now.getDate();
	var $left = $('.left tbody');
	var $right = $('.right tbody');

	//填充title里的日期
	$('#calendar .left .year').html(year);
	$('#calendar .left .month').html(m || nowMonth+1);

	if(month == 11){
		$('#calendar .right .year').html(year + 1);
		$('#calendar .right .month').html("1");
	}

	$('#calendar .right .year').html(year);
	$('#calendar .right .month').html(m+1 || nowMonth+2);
	reCalendar($left,year,month,date);
	reCalendar($right,year,month+1,date);
	//$('.left tbody').append($tr);
}

//重新画日历
function reCalendar(side,y,m,d){
	//判断是否为闰年
	function is_leap(year) { 
	   return (year%100 == 0 ? res = (year%400 == 0?1:0) : res = (year%4 == 0?1:0));
	}
	var newDay = new Date();
	newDay.setFullYear(y,m,d);
	var newYear = newDay.getFullYear(); //年份
	var newMonth = newDay.getMonth(); //月份
	var newDate = newDay.getDate(); //今日日期
	var n1str = new Date(newYear,newMonth,1); //当月第一天 

	var firstday = n1str.getDay(); //当月第一天星期几

	var m_days = new Array(31,28+is_leap(newYear),31,30,31,30,31,31,30,31,30,31); //各月份的总天数

	var week = new Array('一','二','三','四','五','六','日');

	var tr_str = Math.ceil((m_days[newMonth] + firstday)/7); //表格所需要行数
	for(i = 0;i < tr_str;i ++) { //表格的行
	   $tr = $("<tr></tr>");
	   for(k = 0;k < 7;k ++) { //表格每行的单元格
	      idx = i * 7 + k; //单元格自然序列号

	      date_str = idx - firstday + 1; //计算日期
	      week_str = week[date_str%7 ]; //计算星期几
	      //console.log(week_str);
	      (date_str <=0 || date_str > m_days[newMonth]) ? date_str="&nbsp;" : date_str=idx-firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）
	      //打印日期：今天底色为红
	      var $td ;
	      if(newYear < nowYear){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth < nowMonth){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth == nowMonth && date_str < newDate ){
	      	$td = $("<td class='pre'>" + date_str + "</td>");
	      }else if(newYear == nowYear && newMonth == nowMonth && date_str == newDate){

	      	$td = $("<td class='current currentValue'>" + date_str + "</td>");
	      }else{
	      	$td = $("<td>" + date_str + "</td>");
	      }
	      $td.val(newYear+'-'+(newMonth+1) +'-'+date_str+'星期'+week_str);
	      $name = new Date(newYear,newMonth,date_str).getTime();
	      $td.attr('name',$name);
	      //$td.title(new Date(newYear,newMonth,date_str));
	      //console.log($td.attr('name'));
	      $tr.append($td);
	   }
		side.append($tr);	   
	}
}

//点击切换月份
$('.lastMonth').click(function(){
	$flag = 1;
	changeM($flag);
	return $flag;
})
$('.nextMonth').click(function(){
	$flag = 0;
	changeM($flag);
	return $flag;
})
//点击切换月份
function changeM(obj){

	$newLM = parseInt($('#calendar .left .month').html());
	$newLY = parseInt($('#calendar .left .year').html());

	if(obj == 1){
		$newLM --;
	}else{
		$newLM ++;
	}

	if($newLM < 1){
		$newLM = 12;
		$newLY --;
	}else if($newLM > 12){
		$newLM = 1;
		$newLY ++;
	}
	

	calendar($newLY,$newLM);
}


calendar();