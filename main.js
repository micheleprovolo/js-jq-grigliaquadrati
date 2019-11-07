// DESCRIZIONE:
//  Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanenti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$( document ).ready(function() {

// $("div.red").click(function() {
//     $(this).css("background", "red");
//     });

// $("div.green").click(function() {
//     $(this).css("background", "green");
//     });

var scoreGreen = 0;

var scoreRed = 0;

$( ".block" ).click(function() {

    if ($(this).hasClass("red")) {
        $(this).css("background", "red");
        scoreRed++;
        document.getElementById("count-red").innerHTML = scoreRed;
    } else {
        $(this).css("background", "green");
        scoreGreen++;
        document.getElementById("count-green").innerHTML = scoreGreen;
    }
});

});