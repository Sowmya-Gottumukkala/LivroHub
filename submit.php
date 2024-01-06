<?php
var_dump($_POST); // This will print the POST data for debugging purposes
//if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$Name = $_POST['Name'];
$E_mail = $_POST['E_mail'];
$book_Title = $_POST['book_Title'];
$author = $_POST['author'];
$additional_info = $_POST['additionalInfo'];


  $conn = new mysqli('localhost','root','','request_book');
  	 if ($conn->connect_error) {
	    die('Connection Failed:' .$conn->connect_error);
	 } else {
$stmt = $conn->prepare("INSERT INTO book_livro (Name, E_mail, book_Title, author, additional_info) 
                     VALUES (?, ?, ?, ?, ?)");

	   $stmt->bind_param("sssss", $Name, $E_mail, $book_Title, $author, $additional_info);

	    $stmt->execute();
	    echo "submission successful";
	    $stmt->close();
	    $conn->close();
	 }
  
  // Create a new PDO connection
 // $pdo = new PDO("mysql:host=localhost;dbname=request_book;charset=utf8", "root");

  // Prepare the SQL statement
 /// $stmt = $pdo->prepare("INSERT INTO requests (name, email, book_title, author, additional_info) VALUES (?, ?, ?, ?, ?)");

  // Execute the statement
 // $success = $stmt->execute([$name, $email, $bookTitle, $author, $additionalInfo]);

 // if ($success) {
 //   $response = array('status' => 'success', 'message' => 'Form data submitted successfully');
//  } else {
  //  $response = array('status' => 'error', 'message' => 'Error submitting form data');
  //}

  // Send the response back to JavaScript
  //echo json_encode($response);

?>