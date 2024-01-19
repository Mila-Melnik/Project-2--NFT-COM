const product = [
    {
        id: 0,
        image: 'assets/images/Blue.jpg',
        title: 'Blue',
        price: 0.15,
    },
    {
        id: 1,
        image: 'assets/images/Green.jpg',
        title: 'Green',
        price: 0.15,
    },
    {
        id: 2,
        image: 'assets/images/Pastel.jpg',
        title: 'Pastel',
        price: 0.12,
    },
    {
        id: 3,
        image: 'assets/images/Pink.jpg',
        title: 'Pink',
        price: 0.12,
    },
    {
        id: 4,
        image: 'assets/images/Purple.jpg',
        title: 'Purple',
        price: 0.15,
    },
    {
        id: 5,
        image: 'assets/images/Red.jpg',
        title: 'Red',
        price: 0.12,
    }, 
     {
        id: 6,
        image: 'assets/images/Turquoise.jpg', 
        title: 'Turquoise',
        price: 0.15,
    },
    {
        id: 7,
        image: 'assets/images/Violet.jpg',
        title: 'Violet',
        price: 0.12,
    },
    {
        id: 8,
        image: 'assets/images/Yellow.jpg',
        title: 'Yellow',
        price: 0.12,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>ETH ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "ETH";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "ETH"+" "+total;
            return(
                `<div class='cart-item'>
                <div class='cart-img'>
                    <img class='cart-img' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>ETH ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}