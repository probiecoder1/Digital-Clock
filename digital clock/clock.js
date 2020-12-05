function DisplayClock()
{
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	var em;
	var status;

	if(hour>12){
	hour=hour-12;
	status=1;
	}
	if(hour<12){
	em="AM";
	}

	if(hour==0){
	hour=12;
	}
	if(status==1){
		em="PM"
	}
	if(hour<10){
		hour='0'+hour;
	}
	if(min<10){
		min='0'+hour;
	}
	if(sec<10){
		sec='0'+hour;
	}
	document.getElementById('clock').innerHTML=hour+':'+min+':'+sec+ ' '+em;
	setTimeout(DisplayClock,1000);
}

DisplayClock();
