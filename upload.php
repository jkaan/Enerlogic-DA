<?php

mysql_connect('localhost', 'xoria_da', '4mbbgz1I') or die(mysql_error());
mysql_select_db('xoria_da') or die (mysql_error());
// Read the file contents into a string variable,
// and parse the string into a data structure

 
if(isset($_POST['submit']))
{
	if ($_FILES["file"]["error"] > 0)
	{
		echo "<b><font color='red'>Error: " . $_FILES["file"]["error"] . "</font></b><br></font></b>";
	}
	else
	{
		echo "Upload: " . $_FILES["file"]["name"] . "<br>";
		echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
		if (file_exists("upload/" . $_FILES["file"]["name"]))
		{
			echo "<b><font color='red'>".$_FILES["file"]["name"] . " already exists. </font></b>";
		}
		else
		{
			move_uploaded_file($_FILES["file"]["tmp_name"],
			"upload/" . $_FILES["file"]["name"]);
			echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
			$file = "upload/" . $_FILES["file"]["name"];

			$str_data = file_get_contents($file);
			$data = json_decode($str_data,true);
			echo "<br>Stad: ".$data["locatie"]."";

			$qry = mysql_query("SELECT * FROM stad WHERE Naam = '".$data["locatie"]."'");
			$num_rows = mysql_num_rows($qry);
			if($num_rows == 0)
			{
				mysql_query("INSERT INTO stad (Naam) VALUES ('".$data["locatie"]."')");
			}
	
			$qry = mysql_query("SELECT * FROM stad WHERE Naam = '".$data["locatie"]."'");
			$row = mysql_fetch_array($qry);
			
			mysql_query("INSERT INTO klant (KlantId, StadId) VALUES ('".$data["_id"]['$id']."','".$row['StadId']."')");
			
			$datum = $data['consumptions']['interval'];
			//var_dump($datum);
			
			$qry = mysql_query("SELECT * FROM klant WHERE ");
			foreach($data['consumptions']['interval'] as $d)
			{
				foreach($d as $d1){
					foreach($d1 as $d2){
					//var_dump($d2);
					$pieces = preg_split('/[TT . +]/', $d2['datetime']);
					//var_dump($pieces);
					$datum = $pieces[0]. ' '. $pieces[2];
					$datum = date("Y-m-d H:i:s", strtotime($datum));
					//var_dump($datum);
					mysql_query("INSERT INTO meetstand (EnergieType, Datum, Waarde, KlantId) VALUES ('".$data["energy_type"]."', '".$datum."', '".$d2['reading']."', '".$data["_id"]['$id']."' )");
					}
				}
			}
			mysql_close();
		}
	}
}
?>
<form action="" method="post"
enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file"><br>
<input type="submit" name="submit" value="Submit">
</form>