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
/*Buscador de Contenido*/
	sideTxt = document.querySelector('#sideText')
	sideBar = document.querySelector('#sideList')
	sideLst = document.querySelectorAll('.sidebar :is(strong, em, li):not(.excluded)')
	
	sideTxt.oninput = (e) => {
		term = e.target.value.toLowerCase()
		searchFilter(sideLst, term, 'filter')
		searchList('.filter')
	}
	const searchFilter = (array, data, className = 'filter') => array.forEach( el => el.innerText.toLowerCase().includes(data) ? el.classList.add(className) : el.classList.remove(className))
	
	const searchList = (className) => {
		sideBar.innerHTML = ''
		results = document.querySelectorAll(className)
		results.forEach(r => sideBar.innerHTML += `<option value=${r.innerText}>${r.innerText}<option>`)
	}
/*Formulario de Contacto*/
	contact = document.querySelector('#contact')
	fields  = contact.querySelectorAll('input', 'textarea')

	contact.onsubmit = (e) => fields.forEach(f => console.log(`${f.name}: ${f.value}`))
/*Prevenciones de Comportamientos*/
	forms = document.querySelectorAll('form')

	forms.forEach(f => f.addEventListener('submit', (e) => e.preventDefault()))
