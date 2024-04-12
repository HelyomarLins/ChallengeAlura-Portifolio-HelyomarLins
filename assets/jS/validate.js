$(document).ready(function() {
    //adicionando onclick ao botão
    $('#mobile__btn').on('click', function(){
        //adicionando classe ao botão
        $('#menu__mobile').toggleClass('active');
        //adicionando X ao clicar botão
        $('#mobile__btn').find('i').toggleClass('bx-x');

        
    });
});
