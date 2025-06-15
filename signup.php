<?php
// Show all PHP errors (good for debugging)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection setup
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "atm"; // Make sure your DB name is exactly this

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("❌ Connection failed: " . $conn->connect_error);
}

// Get form data safely
$name = $_POST['name'] ?? '';
$account = $_POST['account'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$pin = $_POST['password'] ?? '';

// Input validation
if (!$name || !$account || !$phone || !$email || !$pin) {
  echo "❗ All fields are required.";
  exit;
}

// Optional: Add format validation here
if (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
  echo "❌ Invalid name format.";
  exit;
}
if (!preg_match("/^\d{4}$/", $account)) {
  echo "❌ Account must be 4 digits.";
  exit;
}
if (!preg_match("/^\d{10}$/", $phone)) {
  echo "❌ Phone must be 10 digits.";
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "❌ Invalid email format.";
  exit;
}
if (!preg_match("/^\d{4}$/", $pin)) {
  echo "❌ PIN must be 4 digits.";
  exit;
}

// Check if email already exists
$check = $conn->prepare("SELECT * FROM customers WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result && $result->num_rows > 0) {
  echo "⚠️ Email already registered.";
  exit;
}

// Insert new customer
$insert = $conn->prepare("INSERT INTO customers (name, account, phone, email, password) VALUES (?, ?, ?, ?, ?)");
if (!$insert) {
  echo "❌ Prepare failed: " . $conn->error;
  exit;
}

$insert->bind_param("sssss", $name, $account, $phone, $email, $pin);

if ($insert->execute()) {
  echo "✅ success";
} else {
  echo "❌ Error saving user: " . $insert->error;
}

$conn->close();
?>
