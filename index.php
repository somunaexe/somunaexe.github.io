<?php
//Somunachimso Bernard Nzenwa_AGG801_@00652263
session_start(); //starts the user's session
$view = new stdClass();
$view->pageTitle = "Somuna's Portfolio";
require_once("Views/index.phtml");
