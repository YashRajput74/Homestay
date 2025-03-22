function elementExists(selector, text) {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).some(element => element.textContent.trim() === text);
}
function addingNavComponents() {
    document.querySelector("header").classList.add("secondary");
    document.querySelector("nav").classList.add("secondPage");
    document.querySelector(".list_Room").classList.add("secondPageBorder");
    document.querySelector(".hero").classList.add("heightAuto");
    document.querySelector(".stickySection").style.display="none";
    document.querySelector("footer").style.display="none";

    let navList = document.querySelector("nav ul");
    let inspireMeLi = navList.querySelector("li:nth-child(2)");
    let mobileNav = document.querySelector(".mobileNav");
    let inspireMeAnchor = mobileNav.querySelector(".mobileNav > a:nth-child(2)");

    if (!elementExists("nav ul li", "₹ INR")) {
        inspireMeLi.textContent = "₹ INR";
    }

    if (!elementExists("nav ul li", "CONTACT HOSTS")) {
        let newLi = document.createElement("li");
        newLi.textContent = "CONTACT HOSTS";
        navList.insertBefore(newLi, inspireMeLi);
    }


    if (!elementExists(".mobileNav a", "₹ INR")) {
        inspireMeAnchor.textContent = "₹ INR";
    }

    if (!elementExists(".mobileNav a", "CONTACT HOSTS")) {
        let newAnchor = document.createElement("a");
        newAnchor.textContent = "CONTACT HOSTS";
        mobileNav.insertBefore(newAnchor, inspireMeAnchor);
    }
}
function addHeroComponents(){
    if (document.querySelector(".hero form .bigButtons")) {
        return;
    }
    let heroFormSection=document.querySelector(".hero form");
    let searchButton=heroFormSection.querySelector("button");
    let newButton=document.createElement("button");
    newButton.textContent="Sorting";
    newButton.classList.add("bigButtons");
    heroFormSection.insertBefore(newButton,searchButton.nextSibling);
    let newButton2=document.createElement("button");
    newButton2.textContent="futureSlider";
    newButton2.classList.add("bigButtons");
    heroFormSection.insertBefore(newButton2,searchButton.nextSibling);
    let newButton3=document.createElement("button");
    newButton3.textContent="Filter";
    newButton3.classList.add("bigButtons");
    heroFormSection.insertBefore(newButton3,searchButton.nextSibling);
}
/* function addFilterSortingUI(){
    let tpl=`
    <ul class=""sortBylist>
        <li>Our Picks</li>
        <li>Most Reviewed</li>
        <li>Distance</li>
    </ul>
    `
    document.querySelector("body").innerHTML+=tpl;
}
addFilterSortingUI(); */
function stayContainerRender(param){
    let value=param;
    let arrayOfHomes=data.cityHomes[value];
    let numberOfHomes=data.cityHomes[value].length;
    let tpl=`
    <div class="headingDiv">
        <div class="subHeader">
            <div>List</div>
            <div>Map</div>
        </div>
        <h1>Rooms to Rent and Homestays in ${data.cities[value].name}, India</h1>
        <p>We have found ${numberOfHomes} homestays in ${data.cities[value].name}, India for your stay. Renting a room with Homestay in ${data.cities[value].name}, India offers host family accommodation, ideal for all types of travel including tourists, students, gap year, interns or city break weekenders.</p>
    </div>
    ${arrayOfHomes.map((item)=>{
        return `
        <div class="tilesDiv">
            <div style="background-image: url(https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI${data.homes[item].backgroundimgUrl})">
                <div><img src="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI${data.homes[item].imgurl}"></div>
            </div>
            <div id="tile" class="tileContentDiv">
                <h3>${data.homes[item].name}</h3>
                <h4>${data.homes[item].address}</h4>
                <div><img src="https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"><p>${data.homes[item].reviews} Reviews</p></div>
                <p>Distance from centre of ${data.cities[value].name}: ${data.homes[item].distance}</p>
                <p>From <span>₹${data.homes[item].price}</span> per night</p>
            </div>
        </div>`
    }).join('')}`;
    document.querySelector(".stayContainer").innerHTML=tpl;
}
function cityPageMain(param){
    let tpl=`
        <div class="cityContainer">
            <div class="mapContainer">
                A map appears here.
            </div>
            <div class="stayContainer">
                
            </div>
        </div>
    `;
    document.querySelector("main").innerHTML=tpl;
    stayContainerRender(param);
}