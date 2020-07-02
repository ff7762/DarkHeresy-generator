<?php

require_once __DIR__ . '/vendor/autoload.php';

//Grab variables that are posted from the form.
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$message = $_POST['message'];

// Create new PDF instance
$mpdf = new \Mpdf\Mpdf();

//create our PDF

$data = '';

$data .= '<h1>Your Details</h1>';

$data .= '<strong>First Name</strong> ' . $fname . '<br />';
$data .= '<strong>Last Name</strong> ' . $lname . '<br />';

if($message)
{
    $data .= '<br /><strong>Message</strong><br />' . $message;
}

//Write PDF
$mpdf->WriteHTML($data);

// Output to browser
$mpdf->Output('myfile.pdf', 'D');
