const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


bar.addEventListener('click', ()=>{
        nav.classList.add('active');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})


const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img');

 smallImg[0].onclick = function(){
     mainImg.src = smallImg[0].src;
}

 smallImg[1].onclick = function(){
     mainImg.src = smallImg[1].src;
}
 smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
 }
smallImg[3].onclick = function(){
         mainImg.src = smallImg[3].src;
}

// smallImg.forEach((small) =>{
// small.addEventListener('click', ()=>{
// mainImg.src = smallImg.src
// })
//  })

// // Enters to Sproduct page by clicking any product
// const allProduct = document.querySelectorAll('.product .pro-container .pro')
// console.log(allProduct);

// allProduct.forEach(product =>{
//     product.addEventListener('click', ()=>{
//         window.location.href = 'product.html'
//     })
// })
