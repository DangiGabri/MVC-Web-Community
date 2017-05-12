<?php
    session_start();
    
    include 'conn.php';
  
    try{
		$dbh = new PDO('mysql:host='.$host.';dbname='.$dbNome,$username,$password);
		$stm = $dbh->prepare('SELECT * FROM WebCommunity.Utente WHERE password=:password and nickname=:username');
		if($stm->execute() == true){
			$_SESSION['esiste']=1;
			echo json_encode('Registrato.');
		}
		else{
			echo json_encode('Username non valido.');
		}
	}catch(PDOException $e){
		$e->getMessage();
		echo json_encode('Errore!!');
	}  
?>