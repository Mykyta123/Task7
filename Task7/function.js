
class Pizza {
    constructor(img, name, consist, weight, price){
        this.img = img;
        this.name = name;
        this.consist = consist;
        this.weight = weight;
        this.price = price;
    }
}

const Amerikano = new Pizza("img/amerikano.jpeg", "Американо", "Соус маринара, помидоры, сыр моцарелла, соус песто", "460 г", "85 грн");
const Bavarskaya = new Pizza("img/bavarskaya.jpeg", "Баварская", "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри", "500 г", "159 грн");
const Berluskoni = new Pizza("img/berluskoni.jpeg", "Берлускони", "Сыр моцарелла, соус маринара, соус ВВQ, чеснок, ананас, филе куриное sous-vide, перец болгарский", "550 г", "129 грн");
const Cheese = new Pizza("img/cheese.jpeg", "Сыры", "Соус BBQ, соус маринара, сыр моцарелла, горчица, филе куриное sous-vide, колбаски охотничьи, пепперони, конфитюр из лука, кукуруза, перец болгарский", "580 г", "149 грн");
const Diablo = new Pizza("img/diablo.jpeg", "Диабло", "Соус маринара, сыр моцарелла, шампиньоны, сыр дор-блю, помидоры, ветчина, соус песто", "500 г", "115 грн");
const Gurmeo = new Pizza("img/gurmeo.jpeg", "Гурмео", "Сыр моцарелла, пепперони, перец чили, перец болгарский, лук репчатый, соус ВВQ,соус чили, петрушка", "530 г", "159 грн");
const Kalcone = new Pizza("img/kalcone.jpeg", "Кальконе", "Баклажан, вешенки, перец болгарский, помидоры, соус песто, соус маринара", "520 г", "89 грн");
const Karbonara = new Pizza("img/karbonara.jpeg", "Карбонара", "Сливочный соус из белых грибов, сыр моцарелла, сыр дор-блю, пармезан, шампиньоны, вешенки, соус чесночный, масло трюфельное, петрушка", "530 г", "145 грн");
const Margarita = new Pizza("img/margarita.png", "Маргарита", "Соус BBQ, филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка", "580 г", "165 грн");
const Ovoshchnay = new Pizza("img/ovoshchnaya.jpeg", "Овощная", "Сыр моцарелла, сыр черный камамбер, соус из тунца, цуккини", "450 г", "149 грн");
const PiccaOtShefa = new Pizza("img/picca-ot-shefa.jpeg", "Пицца от шефа", "Сыр моцарелла, соус маринара, колбаски мюнхенские, колбаски охотничьи, огурец соленый, горчица, лук репчатый, лук зеленый", "620 г", "139 грн");
const Polo = new Pizza("img/polo.jpeg", "Поло", "Сливочный соус, сыр моцарелла, сыр дор-блю, сыр чеддер, груша, сыр пармезан, орех грецкий", "430 г", "145 грн");

var array = [];
array.push(Amerikano, Bavarskaya, Berluskoni, Cheese, Diablo, Gurmeo, Kalcone, Karbonara, Margarita, Ovoshchnay, PiccaOtShefa, Polo);

function grid(){
    let elem = document.getElementById("menu");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    
    for(let i=0; i<array.length; i++){
        let block = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let consist = document.createElement("p");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        weight.classList.add("weight");
        price.classList.add("price");
        
        img.src = array[i].img;
        name.innerText = array[i].name;
        consist.innerText = array[i].consist;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        elem.appendChild(block);
        block.appendChild(img);
        block.appendChild(name);
        block.appendChild(weight);
        block.appendChild(consist);
        block.appendChild(price);
    }
}

function list(){
    let elem = document.getElementById("menu");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    let list = document.createElement("ul");
    elem.appendChild(list);
for(let i=0; i<array.length; i++){
        let item = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("span");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        name.classList.add("ulname");
        weight.classList.add("ulweight");
        price.classList.add("ulprice");
        
        img.src = "img/pizza.png";
        name.innerText = array[i].name;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        list.appendChild(item);
        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(weight);
        item.appendChild(price);
    }
}

	function sortPrices() {

	array.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)); 

	let elem = document.getElementById("menu");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    
    for(let i=0; i<array.length; i++){
        let block = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let consist = document.createElement("p");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        weight.classList.add("weight");
        price.classList.add("price");
        
        img.src = array[i].img;
        name.innerText = array[i].name;
        consist.innerText = array[i].consist;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        elem.appendChild(block);
        block.appendChild(img);
        block.appendChild(name);
        block.appendChild(weight);
        block.appendChild(consist);
        block.appendChild(price);
    }

    let list = document.createElement("ul");
    elem.appendChild(list);
	for(let i=0; i<array.length; i++){
        let item = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("span");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        name.classList.add("ulname");
        weight.classList.add("ulweight");
        price.classList.add("ulprice");
        
        img.src = "img/pizza.png";
        name.innerText = array[i].name;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        list.appendChild(item);
        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(weight);
        item.appendChild(price);
    }
}

function sortWeights() {

	array.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0)); 

	let elem = document.getElementById("menu");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    
    for(let i=0; i<array.length; i++){
        let block = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let consist = document.createElement("p");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        weight.classList.add("weight");
        price.classList.add("price");
        
        img.src = array[i].img;
        name.innerText = array[i].name;
        consist.innerText = array[i].consist;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        elem.appendChild(block);
        block.appendChild(img);
        block.appendChild(name);
        block.appendChild(weight);
        block.appendChild(consist);
        block.appendChild(price);
    }

    let list = document.createElement("ul");
    elem.appendChild(list);
	for(let i=0; i<array.length; i++){
        let item = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("span");
        let weight = document.createElement("span");
        let price = document.createElement("span");
        name.classList.add("ulname");
        weight.classList.add("ulweight");
        price.classList.add("ulprice");
        
        img.src = "img/pizza.png";
        name.innerText = array[i].name;
        weight.innerText = array[i].weight;
        price.innerText = array[i].price;
        list.appendChild(item);
        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(weight);
        item.appendChild(price);
    }
}