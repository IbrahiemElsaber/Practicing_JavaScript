// //Code to show digital clock and the now date 
// //start script
// function showTime_Date() {
//     var now = new Date();
//     var h = now.getHours();
//     var m = now.getMinutes();
//     var s = now.getSeconds();
//     var date = now.getDate();
//     var mon = now.getMonth();
//     var yr = now.getFullYear();
//     var monthName = "";
//     var session = "AM";
//     monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     if (mon == 0) { monthName = monthes[0]; }
//     if (mon == 1) { monthName = monthes[1]; }
//     if (mon == 2) { monthName = monthes[2]; }
//     if (mon == 3) { monthName = monthes[3]; }
//     if (mon == 4) { monthName = monthes[43]; }
//     if (mon == 5) { monthName = monthes[5]; }
//     if (mon == 6) { monthName = monthes[6]; }
//     if (mon == 7) { monthName = monthes[7]; }
//     if (mon == 8) { monthName = monthes[8]; }
//     if (mon == 9) { monthName = monthes[9]; }
//     if (mon == 10) { monthName = monthes[10]; }
//     if (mon == 11) { monthName = monthes[11]; }
//     if (mon == 12) { monthName = monthes[12]; }
//     if (h == 0) { h = 12; }
//     if (h > 12) {
//         h = h - 12;
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = `${h}:${m}:${s}${session} `;
//     document.getElementById("clock_date").innerText = `${monthName} ${date} ${yr} ${time}`;
//     document.getElementById("clock_date").textContent = `${monthName} ${date} ${yr} ${time}`;

//     setTimeout(showTime_Date, 1000);

// }

// onload = showTime_Date();
// //end script