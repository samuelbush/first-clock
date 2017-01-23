(function (){
	var refresher = function(){
		// Variable for new Date
		var todayDate = new Date(),
			// call all the things the clock needs
			// Year / Month / Date/Day
			year = todayDate.getFullYear(),
			month = todayDate.getMonth(),
			date = todayDate.getDate(),
			day = todayDate.getDay(),
			// Hours / Minutes / Seconds
			h = todayDate.getHours(),
			m = todayDate.getMinutes(),
			s = todayDate.getSeconds();
		// what goes where?
		var zYear = document.getElementById("year"),
			zMonth = document.getElementById("month"),
			zDate = document.getElementById("datey"), //funfact...  "date" wont work... took me a lot of time to figure this out 
			zDay = document.getElementById("day"),
			zHour = document.getElementById("hours"),
			zMin = document.getElementById("minutes"),
			zSec = document.getElementById("seconds");
		
		// Array for all of the Weekdays
		var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		zDay.textContent = weekDays[day];
		
		zDate.textContent = date;
		
		var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
		zMonth.textContent = months[month];
		
		zYear.textContent = year;
		
		
		
		zHour.textContent = h;
		zMin.textContent = m;
		zSec.textContent = s;
	};

	refresher();
	var dieter = setInterval(refresher, 1000);
}())
