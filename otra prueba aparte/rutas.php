<?php

switch ($_GET['ruta']) {
    case 'inicio':
        header("Location: index.php");
        break;
    case 'create':
        header("Location: modulos/CRUD/Create.php");
        break;
    case 'cliente':
        header("Location: modulos/CRUD/registroClientes.php");
        break;
}

?>