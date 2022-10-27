<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola</title>
    <link rel="stylesheet" href="CSS/index.css">
</head>

<body>
    <?php
    include 'modulos/enlace.php';
    $query = "SELECT id_curso, nombre, imagen, enlace FROM cursos";
    $result = mysqli_query($conn, $query);
    ?>

    <section id="indiceIndex">
        <p id="tituloIndex">¿Qué vamos a aprender hoy?</p>

        <div id="cursosIndex">
            <?php while ($row = mysqli_fetch_assoc($result)) { ?>

                <div class="bloqueIndex">
                    <p><?= $row['nombre'] ?></p>

                    <div class="divManualIndex" style="background-image:url(<?= $row['imagen'] ?>) ;">
                    </div>
                    <a href="">
                        <p>Iniciar actividad</p>
                    </a>

                    <a href="<?= $row['enlace'] ?>">
                        <p class="btnIndex" style="background-color:#f00;"> Ver PDF guía</p>
                    </a>
                </div>
            <?php
            };
            ?>
        </div>

    </section>

            

    <p>laratest mundo</p>

</body>

</html>