let month = Number(prompt("Enter a Month Number"));
let year = Number(prompt("Enter a year"));

if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 9 || month === 11)) {
    document.write("31 Days");
} else if (month === 4 || month === 6 || month === 8 || month === 10 || month === 12) {
    document.write("30 Days");
} if (year % 4 == 0 && year % 100!=0) {
    if (month === 2) {
        document.write("29 Days");
        document.write("<br>");
    }
    document.write("Leap Year");
} else {
    document.write("28 Days");
    document.write("<br>");
    document.write("Normal Year"); 
}