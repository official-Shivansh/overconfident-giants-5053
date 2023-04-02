// ----------------------------change page--------------------------
document.getElementById("lux").addEventListener("click",()=>{
    document.getElementById("home").style.display="none"
    document.getElementById("perfPage").style.display="block"
})
document.getElementById("png").addEventListener("click",()=>{
    document.getElementById("home").style.display="block"
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
        indiv.append(imgg,img,title,price,btn)
        div.append(indiv)
});
}


document.getElementById("signIn").addEventListener("click",()=>{
    window.location.href="signin.html"
})