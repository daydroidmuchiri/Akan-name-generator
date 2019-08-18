function AkanName() {

    var DD = parseFloat(document.getElementById("dd").value);
    var MM = parseFloat(document.getElementById("mm").value);
    var YY = parseFloat(document.getElementById("yy").value);
    var CC = (YY - 1) / 100 + 1;
    var arrayofDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var dayoftheweek = (CC / 4 - 2 * CC - 1 + 5 * YY / 4 + (26 * (MM + 1) / 10) + DD) % 7;