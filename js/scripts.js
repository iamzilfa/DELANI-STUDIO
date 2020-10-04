
$("#imgDes").click(function () {
    $("#imgDes").hide();
    $("#textDes").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });
}); $("#textDes").click(function () {
    $("#imgDes").show();
    $("#textDes").hide();
});



$("#imgDev").click(function () {
    $("#imgDev").hide();
    $("#textDev").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });;
}); $("#textDev").click(function () {
    $("#imgDev").show();
    $("#textDev").hide();
});



$("#imgProd").click(function () {
    $("#imgProd").hide();
    $("#textProd").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });;
}); $("#textProd").click(function () {
    $("#imgProd").show();
    $("#textProd").hide();
});




$('.black').mouseenter(function () {
    $('#overOne').show().css("background", "rgba(0, 0, 0, 0.9)");
    $('#detailOne').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "50px 30px" });
}); $('.black').mouseleave(function () {
    $('#overOne').hide();
    $('#detailOne').hide();
})



$('.sign').mouseenter(function () {
    $('#overTwo').show().css("background", "rgba(0, 0, 0, 0.8)");
    $('#detailTwo').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "50px 30px" });
}); $('.sign').mouseleave(function () {
    $('#overTwo').hide();
    $('#detailTwo').hide();
})




$('.colour').mouseenter(function () {
    $('#overThree').show().css("background", " rgba(129, 79, 13, 0.692)");
    $('#detailThree').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "50px 30px" });
}); $('.colour').mouseleave(function () {
    $('#overThree').hide();
    $('#detailThree').hide();
})



$('.movie').mouseenter(function () {
    $('#overFour').show().css("background", " rgba(5, 2, 58, 0.7)");
    $('#detailFour').show().css({ "border": "3px solid white", "color": "white", "padding": "45px 35px", "font-size": "50px" })
}); $('.movie').mouseleave(function () {
    $('#overFour').hide();
    $('#detailFour').hide();
})



$('.webpage').mouseenter(function () {
    $('#overFive').show().css("background", " rgba(2, 83, 107, 0.7");
    $('#detailFive').show().css({ "border": "3px solid white", "color": "white", "padding": "50px 20px", "font-size": "50px" });
}); $('.webpage').mouseleave(function () {
    $('#overFive').hide();
    $('#detailFive').hide();
})


$('.machine').mouseenter(function () {
    $('#overSix').show().css("background", "rgb(0, 0, 0, 0.7)");
    $('#detailSix').show().css({ "border": "3px solid white", "color": "white", "padding": "50px 15px", "font-size": "40px" });
}); $('.machine').mouseleave(function () {
    $('#overSix').hide();
    $('#detailSix').hide();
})



$('.wood').mouseenter(function () {
    $('#overSeven').show().css("background", "rgba(185, 122, 3, 0.6)");
    $('#detailSeven').show().css({ "border": "3px solid white", "color": "white", "padding": "50px 58px", "font-size": "40px" });
}); $('.wood').mouseleave(function () {
    $('#overSeven').hide();
    $('#detailSeven').hide();
})



$('.name').mouseenter(function () {
    $('#overEight').show().css("background", "rgba(66, 65, 15, 0.8)");
    $('#detailEight').show().css({ "border": "3px solid white", "color": "white", "padding": "50px 5px", "font-size": "40px" });
}); $('.name').mouseleave(function () {
    $('#overEight').hide();
    $('#detailEight').hide();
})


$("#submit").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var exampleFormControlTextarea1 = $("#exampleFormControlTextarea1").val();

    if (name == '' || email == '' || exampleFormControlTextarea1 == '') {

        alert("Please check the missing field")
    } else {

        alert(name + " we have received your message. Thank you fro reaching out to us.");
    }
})

