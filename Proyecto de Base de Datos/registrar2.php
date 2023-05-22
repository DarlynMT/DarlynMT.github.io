<?php
$host = "localhost";
$user = "root";
$pass = "";

$connection = mysqli_connect($host, $user, $pass);
    $nom=$_POST['nombre'];
    $ape=$_POST['apellido'];
    $edad=$_POST['edad'];
    $sexo=$_POST['sexo'];
    $Direccion=$_POST['Direccion'];
    $correo=$_POST['correo'];
    $tel=$_POST['telefono'];
    $sis=$_POST['cctegoria'];
    $alergia=$_POST['alergico'];
    $gruposan=$_POST['gruposan'];
    $observaciones=$_POST['campotexto'];

if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysql_error();
        }
  else
        {
            echo "<b><h4>Hemos conectado al servidor</h45</b>" ;
        }
        $datab = "dbBDatos";
        $db = mysqli_select_db($connection,$datab);

        if (!$db)
        {
        echo "No se ha podido encontrar la Tabla";
        }
        else
        {
        echo "<h3>Tabla seleccionada:</h3>" ;
        }
        $instruccion_SQL = "INSERT INTO reg_user (nombre, apellido, edad, sexo, Direccion, correo, telefono, cctegoria, alergico, gruposan, observaciones)
        VALUES ('$nom','$ape','$edad','$sexo','$Direccion','$correo','$tel','$sis','$alergia','$gruposan','$observaciones')";
        $resultado = mysqli_query($connection,$instruccion_SQL);
        $consulta = "SELECT * FROM reg_user ";
        
$result = mysqli_query($connection,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}
echo "<table>";
echo "<tr>";
echo "<th><h5>id</th></h5>";
echo "<th><h5>Nombre</th></h5>";
echo "<th><h5>Apellido</th></h5>";
echo "<th><h5>Edad</th></h5>";
echo "<th><h5>Sexo</th></h5>";
echo "<th><h5>Direccion</th></h5>";
echo "<th><h5>Correo</th></h5>";
echo "<th><h5>Telefono</th></h5>";
echo "<th><h5>Categoria</th></h5>";
echo "<th><h5>Alergia</th></h5>";
echo "<th><h5>Grupo San</th></h5>";
echo "<th><h5>Observaciones</th></h5>";
echo "</tr>";
while ($colum = mysqli_fetch_array($result))
 {
    echo "<tr>";    
    echo "<td><h6>" . $colum['id']. "</td></h6>";
    echo "<td><h6>" . $colum['nombre']. "</td></h6>";
    echo "<td><h6>" . $colum['apellido']. "</td></h6>";    
    echo "<td><h6>" . $colum['edad']. "</td></h6>";
    echo "<td><h6>" . $colum['sexo']. "</td></h6>";
    echo "<td><h6>" . $colum['Direccion'] . "</td></h6>";
    echo "<td><h6>" . $colum['correo']. "</td></h6>";
    echo "<td><h6>" . $colum['telefono']. "</td></h6>";
    echo "<td><h6>" . $colum['cctegoria'] . "</td></h6>";
    echo "<td><h6>" . $colum['alergico'] . "</td></h6>";
    echo "<td><h6>" . $colum['gruposan'] . "</td></h6>";    
    echo "<td><h6>" . $colum['observaciones'] . "</td></h6>";
    echo "</tr>";
}
echo "</table>";

mysqli_close( $connection );

   
   echo'<a href="PROYECTO DE UASD LAB.html"> Volver Atrás</a>';


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   <title>consulta db</title>
    <style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
</head>
<body>
</body>
</html>