<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx; // We should use xlsx files, xls is outdated.
use PhpOffice\PhpSpreadsheet\Writer\Xls;

function insert($value, $cell){

    $inputFileName = './sampleData/example1.xlsx';

    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
    $sheet = $spreadsheet->getActiveSheet();

    $sheet->setCellValue("$cell", "$value");

    // Write an .xlsx file  
    $writer = new Xlsx($spreadsheet); 
    
    // Save .xlsx file to the current directory 
    $writer->save('./sampleData/example1.xlsx'); 


}

?>

