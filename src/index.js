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

};



createPages();
addToHome();


