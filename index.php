<?php

include('TCPDF-main/tcpdf.php');

$attribute1 = $_POST["attribute1"];
$attribute2 = $_POST["attribute2"];

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
    $pdf->TextField('Character Name', 50, 5);
    $pdf->writeHTMLcell(30, 20, 15, 20, 'Home World:');
    $pdf->TextField('Home World', 50, 5);
    $pdf->writeHTMLcell(30, 20, 15, 80, 'WS:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute1), 35 ,80);
    $pdf->writeHTMLcell(30, 20, 15, 90, 'BS:');
    $pdf->TextField('field', 10, 5,array(),array('v'=>$attribute2), 35 ,90);

    /*$pdf->cell(190,10,"WS: $var1",1,1,'C');*/
    $pdf->Output();
}
