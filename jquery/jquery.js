$(document).ready(function(){
    $('#btnLogin').click(function(){
        var text = $('<input type="text" name="nick" value=""></br><input type="password" name="pass" value=""></br><button type="button" class="btn btn-primary navbar-btn" id="inviaLogin">INVIA</button>');
        $('#contentLogin').append(text);
        $('#inviaLogin').click(function() {
            $.getJSON('scriptphp/getLogin',{'nick':$('#nick').val(), 'pass':$('#pass').val()},function(){
                
            });
        });
    });
    
    $('#btnLogout').click(function(){
        
    });
    
    $('#btnSignin').click(function(){
        var text = $('<input type="text" name="nick" value=""></br><input type="password" name="pass" value=""></br><button type="button" class="btn btn-primary navbar-btn" id="inviaLogin">INVIA</button>');
        $('#contentSignin').append(text);
    });
});