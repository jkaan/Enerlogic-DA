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
GROUP BY S.StadId, M.EnergieType");

$execute = mysql_query($query);
echo "<table>"; 
echo "<tr>";
echo "<td>Locatie</td>"; 
echo "<td>EnergieType</td>" ;
echo "<td>Waarde</td>" ;
echo "</tr>" ;
$gasArray = array();
$energieArray = array();
while($row = mysql_fetch_array($execute))
{
	echo "<tr>"; 
	echo "<td>";
	echo $row['Naam'];
	echo "</td><td>";
	if($row['EnergieType'] == 0)
	{
		echo 'Gas';
		$gasArray[$row['Naam']] = $row['gemiddelde'];
	}else
	{
		echo 'Energie';
		$energieArray[$row['Naam']] = $row['gemiddelde'];		
	}
	echo "</td><td>";	
	echo $row['gemiddelde'];
	echo "</td></tr>";
}
echo "</table>";
echo "<br>";
$zuinigstestadGas = min($gasArray);
$zuinigstestadEnergie = min($energieArray);
echo "Zuinigste locatie gas: ";
foreach($gasArray as $key => $value)
{
	if($zuinigstestadGas == $value)
	{
		echo $key;
	}
}
echo "<br>";
echo "Zuinigste locatie Energie: ";
foreach($energieArray as $key => $value)
{
	if($zuinigstestadEnergie == $value)
	{
		echo $key;
	}
}


?>