import "./styles.css";

const createPages = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    home.classList.add("home");
    home.classList.add("pages");
    menu.classList.add("menu");
    menu.classList.add("pages");
    contact.classList.add("contact");
    contact.classList.add("pages");

    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);

    const rhome = () => home;
    const rmenu = () => menu;
    const rcontact = () => contact;

    return { rhome, rmenu, rcontact };
};

const addToHome = function () {
    const home = document.querySelector(".home");
    home.innerHTML = "";
    const title = document.createElement("div");
    const info = document.createElement("div");
    const timings = document.createElement("div");
    const adress = document.createElement("div");

    title.classList.add("title");
    info.classList.add("info");
    timings.classList.add("timings");
    adress.classList.add("adress");

    title.textContent = "Beary's Breakfast Bar";
    info.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

    const end = document.createElement("div");
    end.classList.add("end");
    end.textContent = "Goldilocks";

    info.appendChild(end);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.textContent = "Hours";

    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm <br> Wednesday: 6am - 6pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 10pm";

    timings.appendChild(hours);
    timings.appendChild(text);

    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "Location";

    const l = document.createElement("div");
    l.classList.add("l");
    l.textContent = "123 Forest Drive, Forestville, Maine";

    adress.appendChild(location);
    adress.appendChild(l);

    home.appendChild(title);
    home.appendChild(info);
    home.appendChild(timings);
    home.appendChild(adress);

    home.classList.add("hidden");
};

const addToMenu = function () {
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Menu";
    menu.appendChild(title);

    const categoryBeverages = document.createElement("div");
    categoryBeverages.classList.add("category");

    const categoryBeveragesName = document.createElement("div");
    categoryBeveragesName.classList.add("category-name");
    categoryBeveragesName.textContent = "Beverages";

    const dishItemHoneyTea = document.createElement("div");
    dishItemHoneyTea.classList.add("dish-item");

    const dishNameHoneyTea = document.createElement("div");
    dishNameHoneyTea.classList.add("dish-name");
    dishNameHoneyTea.textContent = "Honey Tea";

    const descriptionHoneyTea = document.createElement("div");
    descriptionHoneyTea.classList.add("description");
    descriptionHoneyTea.textContent = "A warm, Sweat tea made with the highest quality honey and a bit of lemon to start your day off right!";

    const prSpanHoneyTea = document.createElement("span");
    prSpanHoneyTea.textContent = "$2";

    categoryBeverages.appendChild(categoryBeveragesName);
    dishItemHoneyTea.appendChild(dishNameHoneyTea);
    descriptionHoneyTea.appendChild(prSpanHoneyTea);
    dishItemHoneyTea.appendChild(descriptionHoneyTea);
    categoryBeverages.appendChild(dishItemHoneyTea);

    const dishItemBearyTea = document.createElement("div");
    dishItemBearyTea.classList.add("dish-item");

    const dishNameBearyTea = document.createElement("div");
    dishNameBearyTea.classList.add("dish-name");
    dishNameBearyTea.textContent = "Beary Tea";

    const descriptionBearyTea = document.createElement("div");
    descriptionBearyTea.classList.add("description");
    descriptionBearyTea.textContent = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";

    const prSpanBearyTea = document.createElement("span");
    prSpanBearyTea.textContent = "$3";

    dishItemBearyTea.appendChild(dishNameBearyTea);
    descriptionBearyTea.appendChild(prSpanBearyTea);
    dishItemBearyTea.appendChild(descriptionBearyTea);
    categoryBeverages.appendChild(dishItemBearyTea);


    menu.appendChild(categoryBeverages);

    const categorySides = document.createElement("div");
    categorySides.classList.add("category");

    const categorySidesName = document.createElement("div");
    categorySidesName.classList.add("category-name");
    categorySidesName.textContent = "Sides";

    const dishItemToastAndJam = document.createElement("div");
    dishItemToastAndJam.classList.add("dish-item");

    const dishNameToastAndJam = document.createElement("div");
    dishNameToastAndJam.classList.add("dish-name");
    dishNameToastAndJam.textContent = "Toast & Jam";

    const descriptionToastAndJam = document.createElement("div");
    descriptionToastAndJam.classList.add("description");
    descriptionToastAndJam.textContent = "A slice of Toast, your choice of bread, and our homemade blackberry or raspberry jam";

    const prSpanToastAndJam = document.createElement("span");
    prSpanToastAndJam.textContent = "$1";

    categorySides.appendChild(categorySidesName);
    dishItemToastAndJam.appendChild(dishNameToastAndJam);
    descriptionToastAndJam.appendChild(prSpanToastAndJam);
    dishItemToastAndJam.appendChild(descriptionToastAndJam);
    categorySides.appendChild(dishItemToastAndJam);

    const dishItemFreshFruit = document.createElement("div");
    dishItemFreshFruit.classList.add("dish-item");

    const dishNameFreshFruit = document.createElement("div");
    dishNameFreshFruit.classList.add("dish-name");
    dishNameFreshFruit.textContent = "Fresh Fruit";

    const descriptionFreshFruit = document.createElement("div");
    descriptionFreshFruit.classList.add("description");
    descriptionFreshFruit.textContent = "A small bowl of fresh fruit, whatever we find at the market for the day";

    const prSpanFreshFruit = document.createElement("span");
    prSpanFreshFruit.textContent = "$3";

    dishItemFreshFruit.appendChild(dishNameFreshFruit);
    descriptionFreshFruit.appendChild(prSpanFreshFruit);
    dishItemFreshFruit.appendChild(descriptionFreshFruit);
    categorySides.appendChild(dishItemFreshFruit);

    menu.appendChild(categorySides);

    const categoryMainDishes = document.createElement("div");
    categoryMainDishes.classList.add("category");

    const categoryNameMainDishes = document.createElement("div");
    categoryNameMainDishes.classList.add("category-name");
    categoryNameMainDishes.textContent = "Main Dishes";

    const dishItemPanCakes = document.createElement("div");
    dishItemPanCakes.classList.add("dish-item");

    const dishNamePanCakes = document.createElement("div");
    dishNamePanCakes.classList.add("dish-name");
    dishNamePanCakes.textContent = "Pan Cakes";

    const descriptionPanCakes = document.createElement("div");
    descriptionPanCakes.classList.add("description");
    descriptionPanCakes.textContent = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";

    const prSpanPanCakes = document.createElement("span");
    prSpanPanCakes.textContent = "$5";

    descriptionPanCakes.appendChild(prSpanPanCakes);
    categoryMainDishes.appendChild(categoryNameMainDishes);
    dishItemPanCakes.appendChild(dishNamePanCakes);
    dishItemPanCakes.appendChild(descriptionPanCakes);
    categoryMainDishes.appendChild(dishItemPanCakes);

    const dishItemFrenchToast = document.createElement("div");
    dishItemFrenchToast.classList.add("dish-item");

    const dishNameFrenchToast = document.createElement("div");
    dishNameFrenchToast.classList.add("dish-name");
    dishNameFrenchToast.textContent = "French Toast";

    const descriptionFrenchToast = document.createElement("div");
    descriptionFrenchToast.classList.add("description");
    descriptionFrenchToast.textContent = "Two slices of the best French Toast you will ever eat, served with our locally sourced maple syrup";

    const prSpanFrenchToast = document.createElement("span");
    prSpanFrenchToast.textContent = "$5";

    descriptionFrenchToast.appendChild(prSpanFrenchToast);
    dishItemFrenchToast.appendChild(dishNameFrenchToast);
    dishItemFrenchToast.appendChild(descriptionFrenchToast);
    categoryMainDishes.appendChild(dishItemFrenchToast);

    menu.appendChild(categoryMainDishes)
    menu.classList.add("hidden");

}

const addToContact = function () {
    const contact = document.querySelector(".contact");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Contact";

    const personMamaBear = document.createElement("div");
    personMamaBear.classList.add("person");

    const personNameMamaBear = document.createElement("div");
    personNameMamaBear.classList.add("person-name");
    personNameMamaBear.textContent = "Mama Bear";

    const detailsMamaBear = document.createElement("div");
    detailsMamaBear.classList.add("details");
    detailsMamaBear.innerHTML = "Chef <br> 555-555-554 <br> themail@real.com";

    const personPapaBear = document.createElement("div");
    personPapaBear.classList.add("person");

    const personNamePapaBear = document.createElement("div");
    personNamePapaBear.classList.add("person-name");
    personNamePapaBear.textContent = "Papa Bear";

    const detailsPapaBear = document.createElement("div");
    detailsPapaBear.classList.add("details");
    detailsPapaBear.innerHTML = "Manager <br> 555-555-555 <br> notfake@real.com";

    const personBabyBear = document.createElement("div");
    personBabyBear.classList.add("person");

    const personNameBabyBear = document.createElement("div");
    personNameBabyBear.classList.add("person-name");
    personNameBabyBear.textContent = "Baby Bear";

    const detailsBabyBear = document.createElement("div");
    detailsBabyBear.classList.add("details");
    detailsBabyBear.innerHTML = "Waiter <br> 555-555-556 <br> real@notfake.com";

    contact.appendChild(title);

    personMamaBear.appendChild(personNameMamaBear);
    personMamaBear.appendChild(detailsMamaBear);
    personPapaBear.appendChild(personNamePapaBear);
    personPapaBear.appendChild(detailsPapaBear);
    personBabyBear.appendChild(personNameBabyBear);
    personBabyBear.appendChild(detailsBabyBear);

    contact.appendChild(personMamaBear);
    contact.appendChild(personPapaBear);
    contact.appendChild(personBabyBear);
};


createPages();
addToHome();
addToMenu();
addToContact();


