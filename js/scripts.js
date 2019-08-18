function AkanName() {

    var DD = parseFloat(document.getElementById("dd").value);
    var MM = parseFloat(document.getElementById("mm").value);
    var YY = parseFloat(document.getElementById("yy").value);
    var CC = (YY - 1) / 100 + 1;
    var arrayofDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var dayoftheweek = (CC / 4 - 2 * CC - 1 + 5 * YY / 4 + (26 * (MM + 1) / 10) + DD) % 7;
    console.log(dayoftheweek);
    document.getElementById('demo').innerHTML = Math.round(dayoftheweek);
    var arrayoffemale = ["Akosua", "Aduoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var arrayofmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var gender = document.querySelector('input[name="Gender"]:checked').value;
    console.log(gender);
    if (gender === "female") {
        console.log(arrayoffemale);
        document.getElementById('demo').innerHTML = arrayoffemale[Math.round(dayoftheweek)];

    } else {
        console.log(arrayofmale);
        document.getElementById('demo').innerHTML = arrayofmale[Math.round(dayoftheweek)];


    }
}