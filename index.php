<?php

include('TCPDF-main/tcpdf.php');

$var1 = $_POST["attribute1"];

if (isset($_POST['attribute1'])) {
    $pdf = new TCPDF('P','mm','A4');
    $pdf->setPrintHeader(false);
    $pdf->setPrintFooter(false);
    $pdf->AddPage();
    $html =
    "
    <style>
    div {
    color: #fcbfff;
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
