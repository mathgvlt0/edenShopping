
  let response = await fetch("https://dummyjson.com/products")
  let responseAsJson = await response.json();
  let products = responseAsJson.products;
  console.log(products);
  
  const app = document.querySelector("#app");
  let dollard = "$";
  
  function article(products){
    for(let i = 0; i < products.length; i++){
      let newArticle = document.createElement('article');
      let newH2 = document.createElement('h2');
      let newImg = document.createElement('img');

      let newP = document.createElement('p');

        newH2.textContent = products[i].title;
        newImg.setAttribute("src", products[i].images[0]);
        newImg.setAttribute("class", "imgP")
        newP.textContent = products[i].price + dollard;
        newArticle.appendChild(newH2);
        newArticle.appendChild(newImg);
        newArticle.appendChild(newP);
        app.appendChild(newArticle);
      
    }
    let popup = document.querySelector("#popup") 

    let images = document.querySelectorAll(".imgP");

    for(let i = 0; i < images.length; i++){
      images[i].addEventListener('click', ()=>{
        popup.innerHTML = ""
        // console.log(products[i]);     
        for(let o = 0; o < products[i].images.length; o++){
          let imgg = document.createElement('img')
          imgg.setAttribute('src', products[i].images[o])
          popup.appendChild(imgg)
          popup.style.display ="flex"
        }
        const btn = document.querySelector('button')
        btn.addEventListener('click', ()=>{
          
        })
      })
    }
  }

  article(products);





// newImg.addEventListener('click', () => {
//   let newDiv = document.createElement('div');
//   newDiv.setAttribute('id', 'popup');
//   newArticle.appendChild(newDiv);
//   newDiv.style.backgroundColor ="darkseagreen"
  
//   newDiv.style.display = "flex"
// })



