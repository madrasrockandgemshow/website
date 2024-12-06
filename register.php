
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $file = $_FILES['ad'];

    // Validate file upload
    $allowed_types = array('image/jpeg', 'image/png', 'application/pdf');
    if (in_array($file['type'], $allowed_types) && $file['size'] < 5000000) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($file["name"]);
        if (move_uploaded_file($file["tmp_name"], $target_file)) {
            mail($email, "Registration Confirmation", "Thank you for registering, $name!");
            echo "Registration successful!";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Invalid file format or file too large.";
    }
}
?>
