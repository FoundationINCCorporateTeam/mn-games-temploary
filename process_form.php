<?php

// Database connection details
$serverName = "sql.bsite.net\MSSQL2016";
$database = "mngames_";
$username = "mngames"; // Replace with your actual username
$password = "MN4444";

// Connect to SQL Server
$connectionInfo = array(
    "UID" => $username,
    "PWD" => $password,
    "ConnectionPooling" => true
);
$conn = sqlsrv_connect($serverName, $connectionInfo);

// Check connection
if (!$conn) {
  die("Connection failed: " . sqlsrv_errors());
}

// Get form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Prepare SQL statement (prevents SQL injection)
$sql = "INSERT INTO your_table_name (name, email, message) VALUES (?, ?, ?)";
$stmt = sqlsrv_prepare($conn, $sql);

// Bind parameters to the statement
sqlsrv_bind_param($stmt, "sss", $name, $email, $message);

// Execute the statement
if (sqlsrv_execute($stmt)) {
  echo "Your message has been sent successfully!";
} else {
  echo "Error: " . sqlsrv_errors($stmt);
}

// Close connection
sqlsrv_close($conn);
?>
