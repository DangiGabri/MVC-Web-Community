$(document).ready(function(){
    $('#btnLogout').hide();
    $('#btnLogin').click(function(){
        $('#contentLogin').show();
        $('#contentSignin').hide();
        $('#contentLogin').empty();
        var text = $('<div align="center">Nickname:<input type="text" id="nickSI" value=""></br>Password:<input type="password" id="passSI" value=""></br><button type="button" class="btn btn-primary navbar-btn" id="inviaLogin">INVIA</button></div>');
        $('#contentLogin').append(text);
        $('#inviaLogin').click(function() {
            var nick = $('#nickSI').val();
            var pass = $('#passSI').val();
            var json = {"nick":nick, "pass":pass};
            $.getJSON('scriptphp/getLogin.php',json,function(response){
                if(response){
                    alert(response);
                    $('#contentLogin').hide();
                    $('#btnLogout').show();
                }
            });
        });
    });
    
    $('#btnLogout').click(function(){
        $.getJSON('scriptphp/getLogout.php',function(response){
            if(response){
                    alert(response);
                    $('#btnLogout').hide();
                }
            });
    });
    
    $('#btnSignin').click(function(){
        $('#contentLogin').hide();
        $('#contentSignin').show();
        $('#contentSignin').empty();
        var text = $('<div align="center">Nome:<input type="text" id="nomeSU" value=""></br>Cognome:<input type="text" id="cognomeSU" value=""></br>Nickname:<input type="text" id="nickSU" value=""></br>E-Mail:<input type="text" id="emailSU" value=""></br>Password:<input type="password" id="passSU" value=""></br><button type="button" class="btn btn-primary navbar-btn" id="inviaSignin">INVIA</button></div>');
        $('#contentSignin').append(text);
        $('#inviaSignin').click(function() {
            var nick = $('#nickSU').val();
            var pass = $('#passSU').val();
            var email = $('#emailSU').val();
            var nome = $('#nomeSU').val();
            var cognome = $('#cognomeSU').val();
            var json = {"nick":nick, "pass":pass, "nome":nome, "cognome":cognome, "email":email};
            $.getJSON('scriptphp/getRegistrazione.php',json,function(response){
                if(response){
                    alert(response);
                    $('#contentSignin').hide();
                    $('#btnLogout').show();
                }
            });
        });
    });
});