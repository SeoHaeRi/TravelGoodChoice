function start() {
  const button = document.querySelectorAll(".btn")
  var item = document.querySelectorAll(".card_filter")


  button.forEach(b => b.addEventListener("click", (e) => {
    e.preventDefault()
    const filter = e.target.dataset.filter


    item.forEach(i => {
      if (filter === 'ALL') {
        i.style.display = 'block'
      }
      else {
        if (i.classList.contains(filter)) {
          i.style.display = 'block'
        }
        else {
          i.style.display = 'none'
        }
      }
    })
  }))
}
function search_filter() {

  var item = document.querySelectorAll(".card_filter")
  var searchbox = document.querySelectorAll(".search_input")

  searchbox = document.addEventListener("keyup", (e) => {
    const searchfilter = e.target.value.toLowerCase().trim()


    item.forEach((i) => {
      if (i.textContent.includes(searchfilter)) {
        i.style.display = 'block'
      }
      else {
        i.style.display = 'none'
      }
    })
  })

}
