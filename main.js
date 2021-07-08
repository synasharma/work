cart=0;
qty="";
type="";
qty_array=[];
name_array=[];
cartValue="";
function next()
{
    window.location="index2.html";
}

function cart_click()
{
    arrayvalue="";
    for (i=0;i<name_array.length;i++)
    {
arrayvalue=arrayvalue+name_array[i]+"&nbsp;&nbsp;"+qty_array[i]+'<br>'
cartValue=cartValue+name_array[i]+qty_array[i]
    }
    document.getElementById("output").innerHTML=arrayvalue;
  
}

function add1()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("jackfruit").value;
qty_array.push(qty);
name_array.push("Jackfruit");
alert("Jackfruit "+qty);
}

function add2()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("mithai").value;
alert("Jackfruit Mithai "+qty);
qty_array.push(qty);
name_array.push("Jackfruit Mithai");
}

function add3()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("oil").value;
alert("Coconut Oil "+qty);
qty_array.push(qty);
name_array.push("Coconut Oil");
}

function add4()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("barfi").value;
alert("Coconut Barfi "+qty);
qty_array.push(qty);
name_array.push("Coconut Barfi");
}

function add5()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("mango").value;
type=document.getElementById("mango_t").value;
alert("Mango "+ type  + qty);
qty_array.push(qty);
name_array.push("Mango_"+type);
}

function add6()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("coconut").value;
alert("Coconut  "+qty);
qty_array.push(qty);
name_array.push("Coconut");
}

function add7()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("varatti").value;
alert("Mango Varatti  "+qty);
qty_array.push(qty);
name_array.push("Mango Varatti");
}

function add8()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("jackfruit_powder").value;
alert("Jackfruit Powder "+qty);
qty_array.push(qty);
name_array.push("Jackfruit Powder");
}

function add9()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("Hair oil").value;
alert("Herbal Coconut Hairl oil "+qty);
qty_array.push(qty);
name_array.push("Herbal Coconut Hairl oil");
}

function add10()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("jackfruit_seed_powder").value;
alert("Jackfruit Seed Powder "+qty);
qty_array.push(qty);
name_array.push("Jackfruit Seed Powder");
}

function add11()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("mango_pickle").value;
alert("Mango Pickle "+qty);
qty_array.push(qty);
name_array.push("Mango Pickle");
}

function savecart() {
    if (window.localStorage)
    {
        localStorage.cart = JSON.stringify(cartValue);
    }
}

function clearcart()
{
document.getElementById("output").innerHTML="";
localStorage.removeItem("cart");
}
