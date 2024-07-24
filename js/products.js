const products=(product)=>{

  const containerTruffles = document.querySelector('[data-container="truffles"]')

  const { truffles } = product

  truffles.forEach(truffle => {
    const itemTruffles = document.createElement('li')
  
    itemTruffles.innerHTML = `
        <a>
          <img class="product-item" src="${truffle.image}" alt="">
        </a>
    `

    containerTruffles.appendChild(itemTruffles)
  });


  const containerCake = document.querySelector('[data-container="cake"]')

  const { cakes } = product

  cakes.forEach(cake => {
    const itemCakes = document.createElement('li')
  
    itemCakes.innerHTML = `
        <a>
          <img class="product-item" src="${cake.image}" alt="">
        </a>
    `

    containerCake.appendChild(itemCakes)
  });




}

export default products