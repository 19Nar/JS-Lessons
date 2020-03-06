var myButton = document.getElementById("myBtn");

let ProductList =[];

function addProduct(){
    var inputProduct = document.getElementById("inputProduct").value;
    console.log(inputProduct);
    ProductList.push(inputProduct);

};

myButton.addEventListener("click", addProduct);

ProductList.forEach(
    (productName)=>{
    console.log(productName);
}
);
console.log(ProductList);

