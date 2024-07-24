export const request=()=> new Promise((resolve, reject)=>{

  fetch('../dados.json')
  .then(response =>{
    return response.json()
  })
  .then(result =>{
    resolve(result.product)
  })
  .catch(error =>{
    reject(error.message)
  })
  
  })
  
  