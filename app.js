let weekday = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
let today = new Date();
let index = today.getDay();
console.log(`Hôm nay là ${weekday[index]}`);