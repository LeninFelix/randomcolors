<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php include "header.php" ?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

<body>


<div class="wrapper">

	<?php //include "menu.php" ?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php 
	if (isset($_GET['p'])) {
	$pagina = 'pages/'. $_GET['p'] . '.php'; 
	include $pagina;	
	?>	
	<?php
	} else {
	?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<div class="back-home">
			
		<div class="home">
				
			<div class="titulo-general">
				<h1>
					<span>R</span>
					<span>a</span>
					<span>n</span>
					<span>d</span>
					<span>o</span>
					<span>m</span>
					<span>C</span>
					<span>o</span>
					<span>l</span>
					<span>o</span>
					<span>r</span>
					<span>s</span>
				</h1>
			</div>

			<div class="descripcion">

				<h2>Si no me crees, Da click en el Título!!</h2>

				<h2 style="color: #f00;">Este plugin requiere la dependendencia de Jquery</h2>
				
				<p>Este es un plugin que nos ayuda a crear colores random, tanto en background, bordes, color de texto!</p>

			</div>

			<div class="caja-color-back">

				<div class="titulo">
					<h2>Genera el color de background de esta sección</h2>
				</div>

				<div class="back-color caja-fondo">
					
					<div class="btn-color btn-color-back">
						<p>Cambiar</p>
					</div>
					
				</div>
				
			</div>
			
			<div class="caja-color-tono">

				<div class="titulo">
					<h2>Elige si quieres colores random claros, obscuros, semiclaros o semiobscuros.</h2>
				</div>

				<div class="btns caja-fondo">
					
					<div class="btn-color btn-colores-obscuros">
						<p>Obscuros</p>
					</div>
					<div class="btn-color btn-colores-semiobscuros">
						<p>SemiObscuros</p>
					</div>
					
					<div class="btn-color btn-colores-claros">
						<p>Claros</p>
					</div>
					<div class="btn-color btn-colores-semiclaros">
						<p>SemiClaros</p>
					</div>
					
				</div>

			</div>

			<div class="caja-color-opacidad">
				
				<div class="titulo">
					<h2>También puedes elegir si incluyen opacidad aleatoria</h2>
				</div>

				<div class="btns caja-fondo">
					
					<div class="btn-color btn-colores-obscuros">
						<p>Obscuros</p>
					</div>
					<div class="btn-color btn-colores-semiobscuros">
						<p>SemiObscuros</p>
					</div>
					
					<div class="btn-color btn-colores-claros">
						<p>Claros</p>
					</div>
					<div class="btn-color btn-colores-semiclaros">
						<p>SemiClaros</p>
					</div>
						
					</div>
					
				</div>

			</div>

		</div>
			
	</div>
	
	

	<?php
	} //cierra el codigo
	?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
	
	<?php //include "footer.php" ?>

</div>
     
</body>
</html> 