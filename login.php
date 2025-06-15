<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "atm"; // Ensure this DB exists and has a 'customers' table

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get email and password from POST
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Simple validation
if (empty($email) || empty($password)) {
  echo "Please fill all fields.";
  exit;
}

// Fetch user
$sql = "SELECT * FROM customers WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
  if ($user['password'] === $password) {
    // Remove password before sending back to frontend
    unset($user['password']);

    // Send entire user as JSON
    header('Content-Type: application/json');
    echo json_encode($user);
  } else {
    echo "Wrong password.";
  }
} else {
  echo "User not found.";
}

$stmt->close();
$conn->close();
?>
