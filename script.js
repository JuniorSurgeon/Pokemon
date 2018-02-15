$(document).ready(function () {
    var submitButton = $("#PokemonSubmit");
    console.log(submitButton)
    $("#PokemonSubmit").click(function (e) {
        e.preventDefault(); // prevent default browser action from occurring
        var value = $("#PokemonInput").val();
        console.log(value);

        var myurl = "https://api.pokemontcg.io/v1/cards?name=" + value;
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function (json) {
                console.log(json);
                var results = "";
                results += '<h2>Results for ' + "\"" + value + "\"" + "</h2>";

                for (var i = 0; i < json.cards.length; i++) {
                    results += '<img src="https://images.pokemontcg.io/' + json.cards[i].setCode + '/' + json.cards[i].number + '.png"/>';
                }
                if (json.cards.length === 0) {                
                     results += 'No results found! Try something like \"Mew\", or \"Charizard\"';
                    console.log("No results found!");
                }

                console.log(results)
                $("#PokemonResults").html(results);
            }
        })
    })
});