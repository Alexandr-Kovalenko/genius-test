<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// Від кого
$mail->setForm('oleksandr-kovalenko-job@ukr.net', 'Олександр Коваленко');
// Кому відправити
$mail->addAddress('alexkovalenko121@gmail.com');
// Тема листа
$mail->Subject = 'Лист відправлений з форми genius-test';

$body = '<h1>Заголовок листа</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Ім*я: </strong> '.$_POST['name']. '</p>';
}

if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон: </strong> '.$_POST['tel']. '</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Електронна пошта: </strong> '.$_POST['email']. '</p>';
}

$mail->Body = $body;

// Відправляєм
if (!$mail->send()) {
    $message = 'Сталася помилка';
} else {
    $message = 'Дані відправлені';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>