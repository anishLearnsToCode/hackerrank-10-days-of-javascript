var btn = document.createElement("Button");

btn.innerHTML = "0";
btn.id = "btn";
document.body.appendChild(btn);

btn.onclick = function() {
    btn.innerHTML++;
}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
</head>

<body>
<script src="js/button.js" type="text/javascript"></script>
</body>
</html>


#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}
