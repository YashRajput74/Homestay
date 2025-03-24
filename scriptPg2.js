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
    newButton.textContent="SORTING";
    newButton.classList.add("bigButtons");
    newButton.classList.add("sort");
    heroFormSection.insertBefore(newButton,searchButton.nextSibling);
    let newButton2=document.createElement("button");
    newButton2.textContent="futureSlider";
    newButton2.classList.add("bigButtons");
    newButton2.classList.add("slider");
    heroFormSection.insertBefore(newButton2,searchButton.nextSibling);
    let newButton3=document.createElement("button");
    newButton3.textContent="FILTERS (0)";
    newButton3.classList.add("bigButtons");
    newButton3.classList.add("filter");
    heroFormSection.insertBefore(newButton3,searchButton.nextSibling);
}
function tilesRender(arrayOfHomes,value){
    var tpl= arrayOfHomes.map((item)=>{
        return `
        <div class="tilesDiv">
            <div style="background-image: url(https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI${item.backgroundimgUrl})">
                <div><img src="https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI${item.imgurl}"></div>
            </div>
            <div id="tile" class="tileContentDiv">
                <h3>${item.name}</h3>
                <h4>${item.address}</h4>
                <div><img src="https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"><p>${item.reviews} Reviews</p></div>
                <p>Distance from centre of ${data.cities[value].name}: ${item.distance}</p>
                <p>From <span>₹${item.price}</span> per night</p>
            </div>
        </div>`
    }).join('');
    document.querySelector(".headingDiv~div").innerHTML=tpl;
}

function stayContainerRender(param){
    let value=param;
    let arrayOfHomes=data.cityHomes[value];
    let homestoDisplay = arrayOfHomes.map(homeId => data.homes[homeId]);
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
    <div>
    </div>
    `;
    document.querySelector(".stayContainer").innerHTML=tpl;
    tilesRender(homestoDisplay,value)
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
function addFilterSortingUI(){
    let tpl=`
    <ul class="sortByList">
        <li class="selected" data-value="normal">Our Picks</li>
        <li data-value="reviews">Most Reviewed</li>
        <li data-value="distance">Distance</li>
    </ul>`
    tpl+=`<div class="filterByList">
                <div>
                    <p>DISTANCE FROM CENTER</p>
                    <ul>
                    </ul>
                    <p>MEALS (0)</p>
                    <ul>
                        <li>Meals Provided</li>
                        <li>Use of Kitchen</li>
                    </ul>
                </div>
                <div>
                    <p>HOST WELCOMES (0)</p>
                    <ul>
                        <li>Males</li>
                        <li>Females</li>
                        <li>Couples</li>
                        <li>Families</li>
                        <li>Students</li>
                    </ul>
                    <p>PETS (0)</p>
                    <ul>
                        <li>No pets</li>
                    </ul>
                </div>
                <div>
                    <p>HOBBIES (0)</p>
                    <ul>
                        <li>Cooking</li>
                        <li>Golf</li>
                        <li>Tennis</li>
                        <li>Hiking</li>
                        <li>Cycling</li>
                    </ul>
                    <p>ACCESSIBILITY (0)</p>
                    <ul>
                        <li>Wheelchair Accessible</li>
                    </ul>
                </div>
                <div>
                    <p>AMENITIES (0)</p>
                    <ul>
                        <li>Wireless Internet</li>
                        <li>TV</li>
                        <li>Garden</li>
                        <li>Bikes for use</li>
                        <li>Parking</li>
                        <li>Swimming Pool</li>
                        <li>Gym at home</li>
                    </ul>
                </div>
                <div>
                    <span>15 Homestays</span>
                    <span>-</span>
                    <span>Clear filters</span>
                </div>
            </div>`
    document.querySelector(".hero").innerHTML+=tpl;
}
function visibiltyOfLists(){
    document.querySelectorAll('nav li').forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.stopPropagation();
            let subList = item.querySelector('.subList');
            if (!subList) return;
            document.querySelectorAll('.subList').forEach(function (list) {
                if (list !== subList) {
                    list.style.display = "none";
                }
            });
            subList.style.display = subList.style.display === "block" ? "none" : "block";
        });
    });
    document.addEventListener("click", function () {
        document.querySelectorAll('.subList').forEach(function (list) {
            list.style.display = "none";
        });
    });
    document.addEventListener("click", (event) => {
        let sortByList = document.querySelector(".sortByList");
        let sortButton = document.querySelector(".sort");
        if (!sortButton.contains(event.target) && !sortByList.contains(event.target)) {
            sortByList.style.display = "none";
            sortButton.style.backgroundColor = "";
        }
    });
    document.addEventListener("click", (event) => {
        let filterByList = document.querySelector(".filterByList");
        let filterButton = document.querySelector(".filter");
        if (!filterButton.contains(event.target) && !filterByList.contains(event.target)) {
            filterByList.style.display = "none";
            filterButton.style.backgroundColor = "";
        }
    });
}
function sortFunction(event){
    let sorter=event.target.dataset.value;
    document.querySelectorAll(".sortByList>li").forEach((item)=>item.classList.remove("selected"));
    event.target.classList.add("selected");
    let selectedCity= document.querySelector("#placeToGO").value;
    let cityHomes=data.cityHomes[selectedCity];
    let homesToSort = cityHomes.map(homeId => data.homes[homeId]);

    if (sorter === "reviews") {
        homesToSort.sort((a, b) => parseInt(b.reviews) - parseInt(a.reviews));
    } 
    else if (sorter === "distance") {
        homesToSort.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } 
    else if (sorter === "normal") {
        homesToSort = homesToSort;
    }
    tilesRender(homesToSort, selectedCity);
}
function formRenderVisibility(event){
    if (event.target.tagName.toLowerCase() === "button") {
        event.preventDefault();
        if (event.target.classList.contains("searchButton")) {
            let selectedOption = document.querySelector("#placeToGO");
            selectedCity = selectedOption.value;
            addingNavComponents();
            addHeroComponents();
            cityPageMain(selectedCity);
        }
        else if(event.target.classList.contains("sort")){
            let list = document.querySelector(".sortByList");
            let isListVisible = list.style.display === "block";
            list.style.display = isListVisible ? "none" : "block";
            if (isListVisible) {
                event.target.style.backgroundColor = "";
            } else {
                event.target.style.backgroundColor = "#574F4C";
            }
        }
        else if(event.target.classList.contains("filter")){
            let list = document.querySelector(".filterByList");
            let isListVisible = list.style.display === "grid";
            list.style.display = isListVisible ? "none" : "grid";
            if (isListVisible) {
                event.target.style.backgroundColor = "";
            } else {
                event.target.style.backgroundColor = "#574F4C";
            }
        }
    }
}
function filterFunction(event){
    let li=event.target;
    if(li.classList.contains("selected")){
        li.classList.remove("selected");
    }
    else{
        li.classList.add("selected");
    }
}
function init(){
    renderMain();
    addFilterSortingUI();
    addEventsListeners();
}
init();