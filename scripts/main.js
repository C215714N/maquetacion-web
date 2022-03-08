// Declaraciones
	const d = document
/*Barra de Navegacion*/	
	menuBtn = d.querySelector('nav .btn')
	menuLst = d.querySelector('nav .menu')
	
	menuBtn.onclick = () => {
		menuLst.classList.toggle('active') ? 
		menuBtn.innerHTML = '&times;' : 
		menuBtn.innerHTML = '&equiv;'
	}
/*Galeria de Imagenes*/
	slide = d.querySelectorAll('#header .slide li')
	prev  = d.querySelector('#header .icon-prev')
	next  = d.querySelector('#header .icon-next')

	window.setInterval(() => next.click(), 5000)
	prev.onclick = () => changeItem(slide, false)
	next.onclick = () => changeItem(slide, true)

	const changeItem = (array, type, className = 'active') => {
		for(i = 0; i < array.length; i++){
			let item = array[i].classList
			if( item.contains(className) ){
				item.remove(className)
				getDirection(array, type, i)
		}	}	item.classList.add(className)	
	}
	const getDirection = (array, type, i) => { 
		switch(type){
		case true: 
			item = ( i < array.length - 1 ? array[i + 1] : array[0] ) 
		break;
		case false: 
			item = ( i > 0 ? array[i - 1] : array[array.length -1] ) 
		break;
		default: 
			item = array[i]
	}	}
/*Redes Sociales*/
	socialBtn = d.querySelector('.social .btn')
	socialBar = d.querySelector('.social')
	
	socialBtn.onclick = () => {
		socialBar.classList.toggle('active') ? 
		socialBtn.classList.replace('icon-add','icon-rem') : 
		socialBtn.classList.replace('icon-rem','icon-add')
	}
/*Mapa de Contacto*/
	map = d.querySelector('.map iframe')
	mapBtn = d.querySelector('.map .btn')

	mapBtn.onclick = () => {
		map.classList.toggle('active') ? 
		mapBtn.classList.replace('icon-max', 'icon-min') : 
		mapBtn.classList.replace('icon-min', 'icon-max')
	}
/*Background Video*/
	mediaBox = d.querySelector('.bg-content')
	mediaPlayer = d.querySelector('.bg-content video')
	mediaBtn = d.querySelector('.bg-content .btn')

	mediaBox.onclick = () => {
		mediaPlayer.paused ? 
		( mediaPlayer.play(), mediaBtn.innerHTML = 'PAUSE' ) : 
		( mediaPlayer.pause(), mediaBtn.innerHTML = 'PLAY' )
	}
/*Mostrar Ejemplos*/
	titles = d.querySelectorAll('.example h4')
	example = d.querySelectorAll('.show')

	titles.forEach((t,i) => {
		t.onclick = () => example[i].classList.toggle('active')
	}	)
/*Prevencion de Comportamientos*/
	forms = d.querySelectorAll('form')

	forms.forEach(f => f.addEventListener('submit', (e) => {
		e.preventDefault()
  		formData = new FormData(e.target)
  		formProps = Object.fromEntries(formData)
	}	)	)
	const getData = (obj, title) => {
		let message = `${title} \n`
		props = Object.keys(obj)
		props.forEach( p => message+= `<strong>${p}:</strong> ${obj[p]} \n`)
	}
	const sendData = (title) => {
  		confirm('¿Seguro deseas enviar el formulario?') ? 
  		getData(formProps, title) : 
  		alert('El envio ha sido cancelado, puedes enviar el formulario cuando quieras')
	}
/*Buscador de Contenido*/
	sideTxt = d.querySelector('#sideText')
	sideBar = d.querySelector('#sideList')
	sideLst = d.querySelectorAll('.sidebar li:not(.excluded)')
	
	sideTxt.addEventListener( 'input', (e) => {
		term = e.target.value.toLowerCase()
		searchFilter(sideLst, '', 'hidden')
			
		term.length >= 2 ? 
		searchFilter(sideLst, term) : 
		sideLst.forEach(s => s.classList.remove('hidden','filter'))
			
		searchList(sideBar, 'option')
	}	)
	const searchFilter = (array, data, className = 'filter') => { array.forEach( el => {
		el.innerText.toLowerCase().includes(data) ? 
		el.classList.add(className) : 
		el.classList.remove(className)
	}	)	}
	const searchList = (el, tag, array = d.querySelectorAll('.filter')) => {
		let results = []
		el.innerHTML = ''
		
		array.forEach( item => results.push(item.innerText))
		results = [...new Set(results)]
		
		results.forEach( r => el.innerHTML += `<${tag} value=${r}></${tag}>`)
	}
/*Formulario de Contacto*/
	contact = d.querySelector('#contact')
	fields  = contact.querySelectorAll('input', 'textarea')

	contact.addEventListener('submit', () => sendData('DATOS DE CONTACTO'))