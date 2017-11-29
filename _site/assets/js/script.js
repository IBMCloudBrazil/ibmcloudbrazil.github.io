var xmlhttp = new XMLHttpRequest();
var url = "http://172.24.10.72:3000/api/machines";
let ENDPOINT = "http://172.24.10.72:80";
let DELETE_API = "/deleteMachine/"

// Função para deletar ICP
function deletarMaquina(id) {
    var r = confirm("Deletar ICP: " + id + " ?");
    if (r == true) {
        console.log('ICP ' + id + ' will be deleted');
        Materialize.toast('ICP ' + id + ' will be deleted', 2000);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
                status();
            }
        };
        xmlhttp.open("POST", ENDPOINT + DELETE_API + id, true);
        xmlhttp.send();
    } else {
        console.log('ICP ' + id + ' will not be deleted');
        Materialize.toast('ICP ' + id + ' will not be deleted', 2000);
    }
}
// Função para deletar ICP




//CONSULTA NO CLOUDANT MAQUINAS EXISTENTES E FAZ APPEND AO HTML
function status() {
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr)
            $(".cardHolder").remove();
            var color;
            if (myArr.length >= 6) {
                $('#btnPlay').addClass('grey');
                $('#btnPlay').removeClass('waves-effect waves-light');
                $('#btnPlay').addClass('tooltipped');
                $('#btnPlay').attr('data-position', 'bottom');
                $('#btnPlay').attr('data-delay', '50');
                $('#btnPlay').attr('data-tooltip', 'We are at our max capacity, try again later!');
                $('.tooltipped').tooltip({
                    delay: 50
                });


            } else {
                $('#btnPlay').addClass('waves-effect waves-light');
                $('#btnPlay').removeClass("grey");
                $('#btnPlay').removeClass("tooltipped");
                $('#btnPlay').removeAttr('data-position');
                $('#btnPlay').removeAttr('data-delay');
                $('#btnPlay').removeAttr('data-tooltip');
                console.log('remove')
                $('#btnPlay').tooltip('remove');
                


            }
            for (i = 0; i < myArr.length; i++) {

                var splittedStr = myArr[i]["delete_day"].split("/")

                var data = new Date(splittedStr[2], parseInt(splittedStr[1]) - 1, splittedStr[0])
                var now = new Date(Date.now())
                now = new Date(1900 + now.getYear(), now.getMonth(), now.getDate())

                var oneDay = 24 * 60 * 60 * 1000

                var diff = Math.round((data.getTime() - now.getTime()) / (oneDay));

                if (diff < 1) color = "redCarbon"
                else if (diff <= 7) color = "yellowCarbon"
                else color = "greenCarbon"

                $(".showroom").append('<!-- ISSO É UM CARD -->' +
                    '<div class="col s12 m6 l4 cardHolder ">' +
                    '<div class="card cardShowRoom valign-wrapper ">' +
                    '<div class="row cardTable ">' +
                    '<h5 class="col s12 cardLineFirst valign-wrapper"><b>PROJECT:&#160;</b>' + myArr[i]["_id"] + '</h5>' +
                    '<div class="col s12 cardLine valign-wrapper"><a href="https://' + myArr[i]["ip"] + ':8443" target="_blank"><b>IP:&#160;</b>' + myArr[i]["ip"] + '</a></div>' +
                    '<div class="col s12 cardLineBeforeLast valign-wrapper"><p><b>Status:&#160;</b>' + myArr[i]["status"] + '</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper"><p class="textLastLine"><b>C:&#160;</b>' + myArr[i]["date"] + '</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper"><p class="' + color + ' dateDelete textLastLine"><b>&#160;&#160;DP:&#160;</b>' + myArr[i]["delete_day"] + '&#160;&#160;</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper">&#160;&#160;&#160;<i onclick="deletarMaquina(this.id)" class="delete material-icons" id="' + myArr[i]["_id"] + '">delete_forever</i></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- ISSO É UM CARD -->');

            }
            for (i = 0; i < myArr.length; i++) {

                var splittedStr = myArr[i]["delete_day"].split("/")

                var data = new Date(splittedStr[2], parseInt(splittedStr[1]) - 1, splittedStr[0])
                var now = new Date(Date.now())
                now = new Date(1900 + now.getYear(), now.getMonth(), now.getDate())

                var oneDay = 24 * 60 * 60 * 1000

                var diff = Math.round((data.getTime() - now.getTime()) / (oneDay));

                if (diff < 1) color = "redCarbon"
                else if (diff <= 7) color = "yellowCarbon"
                else color = "greenCarbon"

                $(".main").append('<!-- ISSO É UM CARD -->' +
                    '<div class="col s12 m6 l4 cardHolder ">' +
                    '<div class="card cardShowRoom valign-wrapper ">' +
                    '<div class="row cardTable ">' +
                    '<h5 class="col s12 cardLineFirst valign-wrapper"><b>PROJECT:&#160;</b>' + myArr[i]["_id"] + '</h5>' +
                    '<div class="col s12 cardLine valign-wrapper"><a href="https://' + myArr[i]["ip"] + ':8443" target="_blank"><b>IP:&#160;</b>' + myArr[i]["ip"] + '</a></div>' +
                    '<div class="col s12 cardLineBeforeLast valign-wrapper"><p><b>Status:&#160;</b>' + myArr[i]["status"] + '</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper"><p class="textLastLine"><b>C:&#160;</b>' + myArr[i]["date"] + '</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper"><p class="' + color + ' dateDelete textLastLine"><b>&#160;&#160;DP:&#160;</b>' + myArr[i]["delete_day"] + '&#160;&#160;</p></div>' +
                    '<div class="col s4 cardLineLast valign-wrapper">&#160;&#160;&#160;<i onclick="deletarMaquina(this.id)" class="delete material-icons" id="' + myArr[i]["_id"] + '">delete_forever</i></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- ISSO É UM CARD -->');

            }
        } else {
            console.log("CLOUDANT SERVER OFFLINE")
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//CONSULTA NO CLOUDANT MAQUINAS EXISTENTES E FAZ APPEND AO HTML




$(document).ready(function () {

    //PEGA PELA PRIMEIRA VEZ AS MAQUINAS NO CLOUDANT
    status();
    //PEGA PELA PRIMEIRA VEZ AS MAQUINAS NO CLOUDANT

    //Botao refresh lista icps
    $('.refresh, .hamburguer, .viewCreate, .viewICPS').click(function () {
        console.log("REFRESH")
        status();
    })
    //Botao refresh lista icps




    //botoes para criar ou ver lista de icps
    var view = "main";
    var animandoView = false;
    $('.viewCreate').click(function () {
        if (view != "main" && !animandoView) {
            animandoView = true;
            console.log("main");
            $('.' + view).addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.' + view).addClass("hide");
                $('.' + view).removeClass("animated slideOutLeft");
                $('.main').removeClass("hide");
                $('.main').addClass("animated slideInRight");
                setTimeout(() => {
                    $('.main').removeClass("animated slideInRight");
                    view = "main";
                    animandoView = false;
                }, 1000);
            }, 1000);


        }
        // Funcao para fechar menu hamburger
        $('.hamburguer').addClass("animated slideOutLeft");
        setTimeout(() => {
            $('.hamburguer').attr('src', 'images/hamburguer.png');
            $('.hamburguer').removeClass("animated slideOutLeft");
            $('.hamburguer').addClass("animated slideInLeft");
        }, 1000)
        setTimeout(() => {
            $('.hamburguer').removeClass("animated slideInLeft");
        }, 2000)
        animando = true;
        console.log("off");
        $('.menu').removeClass("animated slideInLeft");
        $('.menu').addClass("animated slideOutLeft");
        setTimeout(() => {
            $('.menu').addClass("displaynone");
            $('.menu').removeClass("animated slideOutLeft");
            switch_btn = false;
            animando = false;
        }, 1000)
    })
    $('.viewICPS').click(function () {
        if (view != "showroom" && !animandoView) {
            animandoView = true;
            console.log("showroom")
            $('.' + view).addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.' + view).addClass("hide");
                $('.' + view).removeClass("animated slideOutLeft");
                $('.showroom').removeClass("hide");
                $('.showroom').addClass("animated slideInRight");
                setTimeout(() => {
                    $('.showroom').removeClass("animated slideInRight");
                    view = "showroom";
                    animandoView = false;
                }, 1000);
            }, 1000);

            // Fun��o para fechar o menu hamburger
            $('.hamburguer').addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.hamburguer').attr('src', 'images/hamburguer.png');
                $('.hamburguer').removeClass("animated slideOutLeft");
                $('.hamburguer').addClass("animated slideInLeft");
            }, 1000)
            setTimeout(() => {
                $('.hamburguer').removeClass("animated slideInLeft");
            }, 2000)
            animando = true;
            console.log("off");
            $('.menu').removeClass("animated slideInLeft");
            $('.menu').addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.menu').addClass("displaynone");
                $('.menu').removeClass("animated slideOutLeft");
                switch_btn = false;
                animando = false;
            }, 1000)

        }
    })
    //botoes para criar ou ver lista de icps




    //FUNÇÃO PARA INSTALAR O ICP
    $('#btnPlay').click(function () {
        var hostname = document.getElementById('hostname').value;
        if (!$("#btnPlay").hasClass("grey")) {
            if (hostname == "" || hostname == " " || hostname == null) {
                Materialize.toast('Please fill up the hostname', 2000);
            } else {
                $("#hostname").val('');
                var obj = {
                    "hostname": hostname
                }
                xhrPost('/savefile', obj, function (result) {
                    console.log(result);
                    status();
                    Materialize.toast('ICP ' + hostname + ' will be deployed', 2000);
                }, function (err) {
                    console.log(err);
                    Materialize.toast('error deploying ICP ' + hostname, 2000);
                })
            }
        }

    })
    //FUNÇÃO PARA INSTALAR O ICP




    //ANIMAÇÃO MENU HAMBURGUER
    var switch_btn = false;
    var animando = false;
    $('.hamburguer').click(function () {

        //ABRIR MENU
        if (!switch_btn && !animando) {
            $('.hamburguer').addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.hamburguer').attr('src', 'images/close.png');
                $('.hamburguer').removeClass("animated slideOutLeft");
                $('.hamburguer').addClass("animated slideInLeft");
            }, 1000)
            setTimeout(() => {
                $('.hamburguer').removeClass("animated slideInLeft");
            }, 2000)
            setTimeout(() => {
                animando = true;
                console.log("on");
                $('.menu').removeClass("displaynone");
                $('.menu').addClass("animated slideInLeft");
                setTimeout(() => {
                    animando = false;
                    switch_btn = true;

                }, 1000)
            }, 1000)

            //FECHAR MENU
        } else if (switch_btn && !animando) {
            $('.hamburguer').addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.hamburguer').attr('src', 'images/hamburguer.png');
                $('.hamburguer').removeClass("animated slideOutLeft");
                $('.hamburguer').addClass("animated slideInLeft");
            }, 1000)
            setTimeout(() => {
                $('.hamburguer').removeClass("animated slideInLeft");
            }, 2000)
            animando = true;
            console.log("off");
            $('.menu').removeClass("animated slideInLeft");
            $('.menu').addClass("animated slideOutLeft");
            setTimeout(() => {
                $('.menu').addClass("displaynone");
                $('.menu').removeClass("animated slideOutLeft");
                switch_btn = false;
                animando = false;
            }, 1000)

        }



    })
    //ANIMAÇÃO MENU HAMBURGUER




})