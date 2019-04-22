<?php
$name = $_POST['name'];
$cname = $_POST['compname'];
$visitor_email = $_POST['mail'];
$contact = $_POST['contact'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$sub_join = strtok($message, ".");

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = "smtp.gmail.com";                 // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'strategicdummy@gmail.com';  // SMTP username
    $mail->Password = '3427840619';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($visitor_email, $name);    
    $mail->addAddress('enquiry@sprg.com.hk','SPRG'); 
    // $mail->addAddress('maymi.k@strategicdigitalab.com','May Mi Ko Ko'); 
    // $mail->addAddress('lelai.m@strategicdigitalab.com','Lelai Mangasang');    // Add a recipient
    // $mail->addAddress('charis.m@strategicdigitalab.com');     // Add a recipient

    $mail->addCustomHeader('MIME-Version: 1.0','Content-type: text/html; charset=iso-8859-1');    //Content
    $mail->isHTML(true); 
    $mail->Subject = 'SPRG visitor message:'.$subject;
    $mail->Body    = "<html><head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <title></title>
        </head><body style='font-family:verdana;'>
        <span style='font-weight:bold;font-family:verdana;margin:0;margin-top:15px;'>Name:</span>{$name} <br>
        <span style='font-weight:bold;font-family:verdana;margin:0;margin-top:15px;'>Company Name:</span>{$cname}<br>
        <span style='font-weight:bold;font-family:verdana;margin:0;margin-top:15px;'>Contact:</span>{$contact}<br>
        <span style='font-weight:bold;font-family:verdana;margin:0;margin-top:15px;'>Message:</span><br>{$message}<br>\r\n
        </body></html>";

    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';


    // header('Location:thank.html');
    // echo "<script>window.location = 'thank.html'</script>";
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>