<?php
mysql_connect('localhost', 'xoria_da', '4mbbgz1I') or die(mysql_error());
mysql_select_db('xoria_da') or die (mysql_error());


$query = ("SELECT 
	S.Naam AS Naam, 
	(sum(M.waarde) /
		count(DISTINCT M.KlantId)) AS gemiddelde, 
M.EnergieType AS EnergieType

FROM 
`meetstand` AS M, 
`klant` AS K, 
`stad` AS S 

WHERE 
M.KlantId = K.KlantId AND 
K.StadId = S.StadId
AND S.Naam = '".$_GET['location']."' 
GROUP BY S.StadId, M.EnergieType");

$execute = mysql_query($query);
while($row = mysql_fetch_array($execute))
{
	if($row['EnergieType'] == 0)
	{
		echo 'Gas: '.$row['gemiddelde'];
	}else
	{
		echo 'Energie: '.$row['gemiddelde'] ;	
	}
	echo "<br>";
}


?>