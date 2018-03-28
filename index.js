$('#button').click(function () {
    
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        function (data) {
            $('#button').after($('<div/>', {
                id: 'dane-programisty'
            }));
            $("#dane-programisty").append("<br>Imię:" + data.imie, "<br>Nazwisko: " + data.nazwisko, "<br>Zawód: " + data.zawod, "<br>Nazwa firmy: " + data.firma);
        }

    );
});
