let burguerMenu = document.querySelector(".burguerFlex")
burguerMenu.addEventListener("click", crossLine)

function crossLine() {
    this.classList.toggle("menu");
}

// let headerTag = document.getElementById('beach-header')
// let footerTag = document.getElementById('beach-footer')

// callTemplates();

// async function callTemplates() {
//   let templates = document.createElement('template')
//   templates.innerHTML = await (
//     await fetch('../public/templates.html')).text()

//   let headerTemplate = templates.content.getElementById( 'beach-header' )
//   let footerTemplate = templates.content.getElementById( 'beach-footer' )
  
//   headerTag.innerHTML = headerTemplate.innerHTML
//   footerTag.innerHTML = footerTemplate.innerHTML

//   console.log(headerTag.innerHTML)

// }




