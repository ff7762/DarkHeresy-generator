<?php

include('TCPDF-main/tcpdf.php');

$pdf = new TCPDF('P','mm','A4');

$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);

$pdf->AddPage();

//add contents
$pdf->cell(190,10,"$var1",1,1,'C');

$pdf->Output();
