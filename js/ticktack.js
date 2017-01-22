(function (){
	var refresher = function(){
		// Variable for new Date
		var todayDate = new Date(),
			// call all the things the clock needs
			// Year / Month / Date/Day
			
			var year = todayDate.getFullYear(),
			var month = todayDate.getMonth(),
			var date = todayDate.getDate(),
			var day = todayDate.getDay(),
			
			// Hours / Minutes / Seconds
			var h = todayDate.getHours(),
			var m = todayDate.getMinutes(),
			var s = todayDate.getSeconds();
		
		// what goes where?
		var zYear = document.getElementById("year"),
			var zMonth = document.getElementById("month"),
			var zDate = document.getElementById("date"),
			var zDay = document.getElementById("day"),
			var zHour = document.getElementById("hours"),
			var zMin = document.getElementById("minutes"),
			var zSec = document.getElementById("seconds");
		
		
		zYear.textContent = year;
		
		// Array for all the months
		var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
		zMonth.textContent = months[month];
		
		zDate.textContent = date;
		
		// Array for all of the Weekdays
		var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		zDay = weekDays[day];
		
		zHour.textContent = h;
		zMin.textContent = m;
		zSec.textContent = s;
	};

	refresher();
	var interval = setInterval(refresher,1000);
	alert("Hello! I am an alert box!");
}())