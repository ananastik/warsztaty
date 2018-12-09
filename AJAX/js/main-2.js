
'use strict';

let btn = document.createElement("button");
let btnText = document.createTextNode("Pobierz dane");

let classAtr = document.createAttribute("id");

classAtr.value = "pobierz-dane";

btn.setAttributeNode(classAtr);

btn.appendChild(btnText);

document.body.appendChild(btn);

$(function () {

    function pobierzDane () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: 'json',
            success: function (resultJSON) {
                var pierwszyUzytkownik = resultJSON[0];
                var paragraf = document.createElement("p");

                $(paragraf).html(`
                Id: ${pierwszyUzytkownik.id}, <br>
                Name: ${pierwszyUzytkownik.name}, <br>
                Email: ${pierwszyUzytkownik.email}, <br>
                Website: ${pierwszyUzytkownik.website}, <br>
                Phone: ${pierwszyUzytkownik.phone}
            `);
                $("body").append(paragraf);

            },
            onerror: function (msg) {
                console.log(msg);
            }
        });
    }

    $("#pobierz-dane").click(function() {
        pobierzDane();
    })
});