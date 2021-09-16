/*Barra de Navegacion*/	
	menuBtn = document.querySelector('nav .btn')
	menuLst = document.querySelector('nav .menu')
	
	menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'
/*Galeria de Imagenes*/
	slide = document.querySelectorAll('#header .slide li')
	prev  = document.querySelector('#header .icon-prev')
	next  = document.querySelector('#header .icon-next')

	window.setInterval(() => next.click(), 5000)
	prev.onclick = () => changeItem(slide, false)
	next.onclick = () => changeItem(slide, true)

	const changeItem = (array, type, className = 'active') => {
		for(i = 0; i < array.length; i++){
			if(array[i].classList.contains(className)){
				array[i].classList.remove(className)
				getDirection(array, type, i)
		}	} 	newItem.classList.add(className)	
	}
	const getDirection = (array, type, i) => { 
		switch(type){
			case true: newItem = ( i < array.length - 1 ? array[i + 1] : array[0] )
		break;
			default: newItem = ( i > 0 ? array[i - 1] : array[array.length -1] )
	}	}
/*Redes Sociales*/
	socialBtn = document.querySelector('#footer .social .btn')
	socialBar = document.querySelector('#footer .social')
	
	socialBtn.onclick = () => socialBar.classList.toggle('active') ? socialBtn.classList.replace('icon-add','icon-rem') : socialBtn.classList.replace('icon-rem','icon-add') 
/*Mapa de Contacto*/
	map = document.querySelector('#footer iframe')
	sizeBtn = document.querySelector('#footer .btn.opacity')

	sizeBtn.onclick = () => map.classList.toggle('active') ? sizeBtn.classList.replace('icon-max', 'icon-min') : sizeBtn.classList.replace('icon-min', 'icon-max')
/*Background Video*/
	bgVid = document.querySelector('.bg-content')
	vid = document.querySelector('.bg-content video')
	btn = document.querySelector('.bg-content .btn')

	bgVid.onclick = () => vid.paused ? ( vid.play(), btn.innerHTML = 'PAUSE' ) : ( vid.pause(), btn.innerHTML = 'PLAY')
/*Mostrar Ejemplos*/
	titles = document.querySelectorAll('.example h4')
	example = document.querySelectorAll('.flex, .grid')

	titles.forEach((t,i) => t.onclick = () => example[i].classList.toggle('active'))
/*Prevencion de Comportamientos*/
	forms = document.querySelectorAll('form')

	forms.forEach(f => f.addEventListener('submit', (e) => {
		e.preventDefault()
  		formData = new FormData(e.target)
  		formProps = Object.fromEntries(formData)
	}	)	)
	const getData = (obj, title) => {
		let message = `${title} \n`
		props = Object.keys(obj)
		props.forEach( p => message+= `<strong>${p.slice(7)}:</strong> ${obj[p]} \n`)
		console.log(message)
	}
	const sendData = (title) => {
  		confirm('¿Seguro deseas enviar el formulario?') ? 
  			getData(formProps, title) : 
  			alert('El envio ha sido cancelado, puedes enviar el formulario cuando quieras')
	}
/*Buscador de Contenido*/
	sideTxt = document.querySelector('#sideText')
	sideBar = document.querySelector('#sideList')
	sideLst = document.querySelectorAll('.sidebar li:not(.excluded)')
	
	sideTxt.oninput = (e) => {
		term = e.target.value.toLowerCase()
		searchFilter(sideLst, '', 'hidden')
		term.length >= 2 ? 
			searchFilter(sideLst, term) : 
			sideLst.forEach(s => s.classList.remove('hidden','filter'))
		searchList(sideBar)
	}
	const searchFilter = (array, data, className = 'filter') => array.forEach( el => el.innerText.toLowerCase().includes(data) ? el.classList.add(className) : el.classList.remove(className))
	
	const searchList = (el, tag, className = 'filter') => {
		el.innerHTML = ''
		results = document.querySelectorAll(className)
		results.forEach(r => el.innerHTML += `<option value=${r.innerText}></option>`)
	}
/*Formulario de Contacto*/
	contact = document.querySelector('#contact')
	fields  = contact.querySelectorAll('input', 'textarea')

	contact.addEventListener('submit', () => sendData('DATOS DE CONTACTO'))