// ----------------------------change page--------------------------
document.getElementById("lux").addEventListener("click",()=>{
    document.getElementById("home").style.display="none"
    document.getElementById("perfPage").style.display="block"
    document.getElementById("cartContainer").style.display="none"
})
document.getElementById("png").addEventListener("click",()=>{
    document.getElementById("home").style.display="block"
    document.getElementById("perfPage").style.display="none"
    document.getElementById("cartContainer").style.display="none"
})
document.getElementById("cartbtn").addEventListener("click",()=>{
    document.getElementById("cartContainer").style.display="flex"
    document.getElementById("home").style.display="none"
    document.getElementById("perfPage").style.display="none"
})




let link = "https://perfume-api.onrender.com/perfume"
fetch(link).then((res)=>{
    return res.json();
})
.then((data)=>{
    renderPerfume(data);
})
let div = document.getElementById("renderPerfumeData")
let cartArr= JSON.parse(localStorage.getItem("cart")) ||[]
function renderPerfume(data){
    
    data.forEach((el) => {
        let indiv= document.createElement("div");
        let imgg= document.createElement("img");
        imgg.src="img/bestseller.png"
       let img= document.createElement("img")
       img.src=el.url
       let title=document.createElement("h4")
       title.innerText=el.title
       let price=document.createElement("p")
        price.innerText="MRP: ₹"+el.price
        let btn = document.createElement("button")
        btn.textContent= "Add to Cart"
        btn.addEventListener("click",()=>{
            alert("Product Succesfully Added")
            cartArr.push(el)
            localStorage.setItem("cart",JSON.stringify(cartArr))
        })
        indiv.append(imgg,img,title,price,btn)
        div.append(indiv)
});
}
let cartdiv = document.getElementById("rendercartdata")
function rendercart(data){
 
    data.forEach((el) => {
       let indiv= document.createElement("div");
       let img= document.createElement("img")
       img.src=el.url
       let title=document.createElement("h4")
        title.innerText=el.title
       let price=document.createElement("p")
        price.innerText="MRP: ₹"+el.price
        let btn = document.createElement("button")
        btn.textContent= "Delete"
        btn.addEventListener("click",()=>{
           
        })
        indiv.append(img,title,price,btn)
        cartdiv.append(indiv)
});
}
rendercart(cartArr)



document.getElementById("signIn").addEventListener("click",()=>{
    window.location.href="signin.html"
})
let totalpro=document.getElementById("total-pro")
totalpro.innerText=cartArr.length;
let count=0;
for(let i=0;i<cartArr.length;i++){
    count+=cartArr[i].price
}
let totalprice=document.getElementById("grand-total")
totalprice.innerText=count;


document.getElementById("four").addEventListener("click",()=>{
    window.location.href="payment.html"
})