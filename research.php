<?php
//Somunachimso Bernard Nzenwa_AGG801_@00652263
session_start();//starts the user's session
require_once("Models/RentalUserDataSet.php");//calls the rental user dataset class
$view = new stdClass();//instantiate an stdClass
$view->pageTitle = "Sign up";//store the current name of the page

require_once("Views/research.phtml");
