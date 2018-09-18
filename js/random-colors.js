/**-------------------------------------------------------------------------------------------**/
/**                                        Random-color                                       +*/  
/**-------------------------------------------------------------------------------------------**/

	function randomColor(arg){

		const $classSelector = $(arg.selector)
		const $propiedad = arg.property

		const $transicion = arg.transition || 0

		const $opacityRandom = arg.randomOpacity || false
		const $opacityLevel = arg.opacityLevel || false

		const $claros = arg.lighten || false
		const $obscuros = arg.darken || false
		const $semiClaros = arg.semiLighten || false
		const $semiObscuros = arg.semiDarken || false
		const $medios = arg.middle || false

		const $random = Math.random()
		const $rojo = Math.round(Math.random() * (255-0) + 0)
		const $azul = Math.round(Math.random() * (255-0) + 0)
		const $verde = Math.round(Math.random() * (255-0) + 0)
		const $colorRandom = Math.round(Math.random() * (360-0) + 0)


		$classSelector.css("transition", `${$transicion}s`) //opcion para agregar variado
		
		/*----------Ejecución de Errores-------------*/
		if ($claros && $obscuros || $claros && $semiObscuros || $claros && $semiClaros || $claros && $medios || $obscuros && $semiClaros || $obscuros && $semiObscuros || $obscuros && $medios || $semiClaros && $semiObscuros || $semiClaros && $medios || $semiObscuros && $medios){
			throw new Error ("lo Siento elige solo 1 opcion: Claro, Semiclaro, Obscuro, Semiobscuro o Medio o ninguno.")
		}
		
		/*----------Agregar la opacidad-------------*/
		if ($opacityRandom && $opacityLevel){
			throw new Error ("lo Siento elige Un solo tipo de Opacidad")
		}
		else if ($opacityRandom){
			$classSelector.css($propiedad, `rgba(${$rojo}, ${$azul}, ${$verde}, ${$random})`)
		}
		else if ($opacityLevel){
			$classSelector.css($propiedad, `rgba(${$rojo}, ${$azul}, ${$verde}, ${$opacityLevel})`)
		}

		/*----------Colocacion de los tonos-------------*/
		else if($claros){
			$classSelector.css($propiedad, `hsl(${$colorRandom}, 100%, 90%)`)
		}
		else if($obscuros){
			$classSelector.css($propiedad, `hsl(${$colorRandom}, 100%, 10%)`)
		}

		else if($semiClaros){
			$classSelector.css($propiedad, `hsl(${$colorRandom}, 100%, 70%)`)
		}
		else if($semiObscuros){
			$classSelector.css($propiedad, `hsl(${$colorRandom}, 100%, 30%)`)
		}

		else if($medios){
			$classSelector.css($propiedad, `hsl(${$colorRandom}, 100%, 50%)`)
		}

		/*----------Combinación de los tonos con opacidad-------------*/
		else if($opacityRandom && $obscuros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 0%, ${$random})`)
		}
		else if($opacityRandom && $claros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 100%, ${$random})`)
		}
		else if($opacityRandom && $semiObscuros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 10%, ${$random})`)
		}
		else if($opacityRandom && $semiClaros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 90%, ${$random})`)
		}
		else if($opacityRandom && $medios){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 50%, ${$random})`)
		}



		else if($opacityLevel && $obscuros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 0%, ${$opacityLevel})`)
		}
		else if($opacityLevel && $claros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 100%, ${$opacityLevel})`)
		}
		else if($opacityLevel && $semiObscuros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 10%, ${$opacityLevel})`)
		}
		else if($opacityLevel && $semiClaros){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 90%, ${$opacityLevel})`)
		}
		else if($opacityLevel && $medios){
			$classSelector.css($propiedad, `hsla(${$colorRandom}, 100%, 50%, ${$opacityLevel})`)
		}

		/*----------Ejecucion de la funcion por defecto-------------*/
		else{
			$classSelector.css($propiedad, `rgb(${$rojo}, ${$azul}, ${$verde})`)
		}
		
	}
