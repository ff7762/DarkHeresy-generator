<?php

require_once __DIR__ . '/vendor/autoload.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$message = $_POST['message'];

// Create new PDF instance
$mpdf = new \Mpdf\Mpdf();

$data = '';

$data .= '<h1>Your Details</h1>';

$data .= '<strong>First Name</strong> ' . $fname . '<br />';
$data .= '<strong>Last Name</strong> ' . $lname . '<br />';

if($message)
{
    $data .= '<br /><strong>Message</strong><br />' . $message;
}

$mpdf->WriteHTML($data);

// Output to browser
$mpdf->Output('myfile.pdf', 'D');
