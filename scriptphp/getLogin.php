<?php
	session_start();

	include 'conn.php';

	if($_SESSION['esiste']==0){
    try{
		$dbh = new PDO('mysql:host='.$host.';dbname='.$dbNome,$username,$password);
		$stm = $dbh->prepare('SELECT * FROM quintab_sito.dati WHERE Password= :password and Username= :username');
		$stm->bindValue(':username',$_POST['email']);
		$stm->bindValue(':password',$_POST['password']);
		$stm->execute();
		if($stm->rowCount()==1){
			$_SESSION['esiste']=1;
			if($_SESSION['acquista']==1)
				header("location: acquista.php");
			else
				header("location: sito.php");
    		}
    		else{
    			echo 'Username o password non valido.';
    		}
    	}catch(PDOException $e){
    		$e->getMessage();
    		echo 'Errore!!';
    	}
    }
?>