<?php

include('TCPDF-main/tcpdf.php');

$attribute1 = $_POST["attribute1"];
$attribute2 = $_POST["attribute2"];
$attribute3 = $_POST["attribute3"];
$attribute4 = $_POST["attribute4"];
$attribute5 = $_POST["attribute5"];
$attribute6 = $_POST["attribute6"];
$attribute7 = $_POST["attribute7"];
$attribute8 = $_POST["attribute8"];
$attribute9 = $_POST["attribute9"];
$attribute10 = $_POST["attribute10"];
$attribute11 = $_POST["attribute11"];
$name = $_POST["name"];

if (isset($_POST['attribute1'])) {
    $pdf = new TCPDF('P','mm','A4');
    $pdf->setPrintHeader(false);
    $pdf->setPrintFooter(false);
    $pdf->SetMargins(0, 0, 0, true);
    $pdf->AddPage();
    $width = $pdf->getPageWidth();
    $height = $pdf->getPageHeight();
    $pdf->SetAutoPageBreak(false, 0);
    $pdf->Image('assets/background.jpg', 0, 0, $width, $height, 'JPG', '', '', false, 300, '', false, false, 0, false, false, true);
    $pdf->Image('assets/logo.png', 0.5*$width, 10, 22, 40, 'PNG', '', '', false, 300, '', false, false, 0, false, false, true);
    $html =
    "
    <style>
    div {
        height: 200px;
    }
    </style>

    <h1 style=color:#ff11ff></h1>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <hr>


    "
    ;
    $pdf->writeHTML($html, true, 0, true, 0);
    $pdf->writeHTMLcell(20, 20, 15, 10, 'Acolyte:');
    $pdf->TextField('Character Name', 40, 5,array(),array('v'=>$name), 35 , 10);
    $pdf->writeHTMLcell(30, 20, 15, 20, 'Home World:');
    $pdf->TextField('Home World', 50, 5);
    $pdf->writeHTMLcell(30, 20, 15, 80, 'WS:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute1), 35 ,80);
    $pdf->writeHTMLcell(30, 20, 15, 90, 'BS:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute2), 35 ,90);
    $pdf->writeHTMLcell(30, 20, 15, 100, 'S:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute3), 35 ,100);
    $pdf->writeHTMLcell(30, 20, 15, 110, 'T:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute4), 35 ,110);
    $pdf->writeHTMLcell(30, 20, 15, 120, 'AG:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute5), 35 ,120);
    $pdf->writeHTMLcell(30, 20, 55, 80, 'INT:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute6), 75 ,80);
    $pdf->writeHTMLcell(30, 20, 55, 90, 'PER:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute7), 75 ,90);
    $pdf->writeHTMLcell(30, 20, 55, 100, 'WP:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute8), 75 ,100);
    $pdf->writeHTMLcell(30, 20, 55, 110, 'FE:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute9), 75 ,110);
    $pdf->writeHTMLcell(30, 20, 55, 120, 'Wounds:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute10), 75 ,120);
    $pdf->writeHTMLcell(30, 20, 50, 130, 'Fate points');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute11), 75 ,130);



    /*$pdf->cell(190,10,"WS: $var1",1,1,'C');*/
    $pdf->Output();
}
