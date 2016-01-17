<?php
define('APP_STARTED', 'true');
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('short_open_tag', true);

require_once 'lib/db-info.php';

var_dump($db_credentials);
?>