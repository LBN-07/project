<?php
$host = "localhost"; // Keep this as localhost on Hostinger
$db_user = "U170752626_AITS_TPT";
$db_password = "balasai07@LBN";
$db_name = "u170752626_AITS"; 

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$uname = $_POST['username'];
$rollNo = $_POST['rollNo'];
$phone = $_POST['phoneNo'];
$pass = $_POST['password'];

$hashedPassword = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO student (username, roll_number, phone_number, password) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $uname, $rollNo, $phone, $hashedPassword);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
