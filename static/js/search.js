function start(){
    const button = document.querySelectorAll(".btn")
    const item = document.querySelectorAll(".card_filter")
    const searchbox = document.querySelectorAll(".search_input")

    button.forEach(b=>b.addEventListener("click",(e)=>{
      e.preventDefault()
      const filter = e.target.dataset.filter
      console.log(filter)
      
      item.forEach(i=>{
        if(filter==='ALL'){
          i.style.display = 'block'
        }
        else {
          if(i.classList.contains(filter)){
            i.style.display='block'
          }
          else{
            i.style.display = 'none'
          }
        }
      })
    }))
    searchbox= document.addEventListener("keyup",(e)=>{
      const searchfilter = e.target.value.toLowerCase().trim()
      console.log(searchfilter)

      item.forEach((i)=>{
        if (i.textContent.includes(searchfilter)){
        i.style.display='block'}
        else{
          i.style.display='none'
        }
      })
    })
  }
  