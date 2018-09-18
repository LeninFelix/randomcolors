$(document).ready(function(){
	/**-------------------------------------------------------------------------------------------**/
	/**                                                                                           +*/  
	/**-------------------------------------------------------------------------------------------**/
		
		const CLASS_TITULOS = document.querySelectorAll(".back-home .titulo h2")
		for( let i = 0; i < CLASS_TITULOS.length; i++){
			
			randomColor({
				selector: CLASS_TITULOS[i],
				property: "color",
				semiDarken: true,
			})
		}

		const CLASS_TITULO_SPAN = document.querySelectorAll(".back-home .titulo-general span")

		for( let i = 0; i < CLASS_TITULO_SPAN.length; i++){

			randomColor({
				selector: CLASS_TITULO_SPAN[i],
				property: "color",
				middle: true,
				transition: .6,
			})
			
		}
			
		document.querySelector(".home .titulo-general h1").addEventListener("click", function(){
			for( let i = 0; i < CLASS_TITULO_SPAN.length; i++){

				randomColor({
					selector: CLASS_TITULO_SPAN[i],
					property: "color",
					middle: true,
					transition: .6,
				})
				
			}
		})

		// demo Background
		;(function(){
			const $btnBackColor = document.querySelector(".caja-color-back .btn-color-back")
			const $backColor = document.querySelector(".caja-color-back .back-color")

			$btnBackColor.addEventListener("click", function(){

				randomColor({
					selector: $backColor,
					property: "background-color",
					transition: .3,
				})
							
			})
		})()


		//Tonos Puros
		;(function(){
			const $btnObscurosColor = document.querySelector(".caja-color-tono .btn-colores-obscuros")
			const $btnSemiObscurosColor = document.querySelector(".caja-color-tono .btn-colores-semiobscuros")
			const $btnClarosColor = document.querySelector(".caja-color-tono .btn-colores-claros")
			const $btnSemiClarosColor = document.querySelector(".caja-color-tono .btn-colores-semiclaros")
			const $backColor = document.querySelector(".caja-color-tono .btns")

			$btnObscurosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					darken: true,
					transition: .3,
				})
				
			})

			$btnSemiObscurosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					semiDarken: true,
					transition: .3,
				})
			})

			$btnClarosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					lighten: true,
					transition: .3,
				})
			})

			$btnSemiClarosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					semiLighten: true,
					transition: .3,
				})
			})

		})()

		//Tonos Opacos
		;(function(){
			const $btnOpacityObscurosColor = document.querySelector(".caja-color-opacidad .btn-colores-obscuros")
			const $btnOpacitySemiObscurosColor = document.querySelector(".caja-color-opacidad .btn-colores-semiobscuros")
			const $btnOpacityClarosColor = document.querySelector(".caja-color-opacidad .btn-colores-claros")
			const $btnOpacitySemiClarosColor = document.querySelector(".caja-color-opacidad .btn-colores-semiclaros")
			const $backColor = document.querySelector(".caja-color-opacidad .btns")

			$btnOpacityObscurosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					darken: true,
					randomOpacity: true,
					transition: .3,
				})
				
			})

			$btnOpacitySemiObscurosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					semiDarken: true,
					randomOpacity: true,
					transition: .3,
				})
			})

			$btnOpacityClarosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					lighten: true,
					randomOpacity: true,
					transition: .3,
				})
			})

			$btnOpacitySemiClarosColor.addEventListener("click", function(){
				randomColor({
					selector: $backColor,
					property: "background-color",
					semiLighten: true,
					randomOpacity: true,
					transition: .3,
				})
			})

		})()




		
});		













