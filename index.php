<?php

include('TCPDF-main/tcpdf.php');

$var1 = $_POST["attribute1"];

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
    $html =
    "
    <style>
    div {
    background-color: #00bfff;
    }
    </style>

    <div class=background>
        <h1 style=color:#ff11ff>XHTML Form Example</h1>
    </div>
    "
    ;
    $pdf->writeHTML($html, true, 0, true, 0);
    $pdf->cell(190,10,"WS: $var1",1,1,'C');
    $pdf->Output();
}
