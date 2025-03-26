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
    if (!elementExists("nav ul li", "CONTACT HOSTS")) {
        let newLi = document.createElement("li");
        newLi.textContent = "CONTACT HOSTS";
        navList.insertBefore(newLi, inspireMeLi);
        newLi.addEventListener("click",()=>{
            let div=document.querySelector(".specialDiv");
            if(div.style.display=="block"){
                div.style.display="none";
            }
            else{
                div.style.display="block";
            }
        })
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
    let newButton3=document.createElement("button");
    newButton3.textContent="FILTERS";
    newButton3.classList.add("bigButtons");
    newButton3.classList.add("filter");
    heroFormSection.insertBefore(newButton3,searchButton.nextSibling);
}
function filterFunction(data){
    let selectedFilters=document.querySelectorAll(".filterByList li.selected");
    let filteredValues=Array.from(selectedFilters).map(li=>li.dataset.value);
    filteredValues.forEach(filter=>{
        data=data.filter(home=>{
            if (filter === 'males' && home.males === 1) {
                return true;
            }
            if (filter === 'females' && home.females === 1) {
                return true;
            }
            if (filter === 'couples' && home.couples === 1) {
                return true;
            }
            if (filter === 'families' && home.families === 1) {
                return true;
            }
            if (filter === 'students' && home.students === 1) {
                return true;
            }
            if (filter === 'pets' && home.pets === 0) {
                return true;
            }
            if (filter === 'mealsProvided' && home.mealsProvided === 1) {
                return true;
            }
            if (filter === 'useKitchen' && home.useKitchen === 1) {
                return true;
            }
            if (filter === 'cooking' && home.cooking === 1) {
                return true;
            }
            if (filter === 'golf' && home.golf === 1) {
                return true;
            }
            if (filter === 'tennis' && home.tennis === 1) {
                return true;
            }
            if (filter === 'hiking' && home.hiking === 1) {
                return true;
            }
            if (filter === 'cycling' && home.cycling === 1) {
                return true;
            }
            if (filter === 'wheelchair' && home.wheelchair === 1) {
                return true;
            }
            if (filter === 'wirelessInternet' && home.wirelessIntenet === 1) {
                return true;
            }
            if (filter === 'TV' && home.TV === 1) {
                return true;
            }
            if (filter === 'garden' && home.garden === 1) {
                return true;
            }
            if (filter === 'bikes' && home.bikes === 1) {
                return true;
            }
            if (filter === 'parking' && home.parking === 1) {
                return true;
            }
            if (filter === 'pool' && home.pool === 1) {
                return true;
            }
            if (filter === 'gym' && home.gym === 1) {
                return true;
            }
            return false;
        });
    });
    return data;
}
function tilesRender(){
    let value=document.querySelector("#placeToGO").value;
    let sortedData=sortFunction();
    let arrayOfHomes=filterFunction(sortedData);
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
    document.querySelectorAll(".tilesDiv").forEach(tile=>{
        secondObserver.observe(tile);
    });
    document.querySelectorAll(".noOfHomes").forEach(item=>{
        item.textContent=arrayOfHomes.length+" homestays";
    });
}
function stayContainerRender(){
    let value=document.querySelector("#placeToGO").value;
    let numberOfHomes=data.cityHomes[value].length;
    let tpl=`
    <div class="headingDiv">
        <h1>Rooms to Rent and Homestays in ${data.cities[value].name}, India</h1>
        <p>We have found <span class="noOfHomes">${numberOfHomes} homestays</span> in ${data.cities[value].name}, India for your stay. Renting a room with Homestay in ${data.cities[value].name}, India offers host family accommodation, ideal for all types of travel including tourists, students, gap year, interns or city break weekenders.</p>
    </div>
    <div>
    </div>
    `;
    document.querySelector(".stayContainer").innerHTML=tpl;
    tilesRender();
}
function cityPageMain(){
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
    stayContainerRender();
}
function clearAllFilters(){
    let selectedLi=document.querySelectorAll(".filterByList ul li.selected");
    selectedLi.forEach((item)=>{
        item.classList.remove("selected");
    })
    updateNumber();
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
                        <li data-value="mealsProvided">Meals Provided</li>
                        <li data-value="useKitchen">Use of Kitchen</li>
                    </ul>
                </div>
                <div>
                    <p>HOST WELCOMES (0)</p>
                    <ul>
                        <li data-value="males">Males</li>
                        <li data-value="females">Females</li>
                        <li data-value="couples">Couples</li>
                        <li data-value="families">Families</li>
                        <li data-value="students">Students</li>
                    </ul>
                    <p>PETS (0)</p>
                    <ul>
                        <li data-value="pets">No pets</li>
                    </ul>
                </div>
                <div>
                    <p>HOBBIES (0)</p>
                    <ul>
                        <li data-value="cooking">Cooking</li>
                        <li data-value="golf">Golf</li>
                        <li data-value="tennis">Tennis</li>
                        <li data-value="hiking">Hiking</li>
                        <li data-value="cycling">Cycling</li>
                    </ul>
                    <p>ACCESSIBILITY (0)</p>
                    <ul>
                        <li data-value="wheelchair">Wheelchair Accessible</li>
                    </ul>
                </div>
                <div>
                    <p>AMENITIES (0)</p>
                    <ul>
                        <li data-value="wirelessInternet">Wireless Internet</li>
                        <li data-value="TV">TV</li>
                        <li data-value="garden">Garden</li>
                        <li data-value="bikes">Bikes for use</li>
                        <li data-value="parking">Parking</li>
                        <li data-value="pool">Swimming Pool</li>
                        <li data-value="gym">Gym at home</li>
                    </ul>
                </div>
                <div>
                    <span class="noOfHomes">15</span>
                    <span>-</span>
                    <span class="clearAllFilters">Clear filters</span>
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
function sorterButtons(event){
    let selectedLi=document.querySelectorAll(".sortByList>li");
    selectedLi.forEach((item)=>item.classList.remove("selected"));
    event.target.classList.add("selected");
    if (document.querySelectorAll(".sortByList>li.selected").length === 0) {
        document.querySelector(".sortByList li[data-value='normal']").classList.add("selected");
    }
    tilesRender();
}
function sortFunction(){
    let selectedCity= document.querySelector("#placeToGO").value;
    let cityHomes=data.cityHomes[selectedCity];
    let homesToSort = cityHomes.map(homeId => data.homes[homeId]);
    let sortingList=document.querySelector(".sortByList");
    let selectedLi=sortingList.querySelector("li.selected");
    let sorter=selectedLi.dataset.value;
    if (!selectedLi) {
        return homesToSort;
    }
    if (sorter === "reviews") {
        homesToSort.sort((a, b) => parseInt(b.reviews) - parseInt(a.reviews));
    } 
    else if (sorter === "distance") {
        homesToSort.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } 
    else if (sorter === "normal") {
        homesToSort = homesToSort;
    }
    return homesToSort;
}
function formRenderVisibility(event){
    if (event.target.tagName.toLowerCase() === "button") {
        event.preventDefault();
        if (event.target.classList.contains("searchButton")) {
            addingNavComponents();
            addHeroComponents();
            cityPageMain();
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
function updateNumber(){
    const categories=document.querySelectorAll(".filterByList p");
    categories.forEach(pTag=>{
        let ulTag=pTag.nextElementSibling;
        if(ulTag && ulTag.tagName=="UL"){
            let selectedLi=ulTag.querySelectorAll("li.selected");
            let pTagText=pTag.textContent.split(" ");
            pTagText[pTagText.length-1]=`(${selectedLi.length})`;
            pTag.textContent=pTagText.join(" ");
        }
    })
    tilesRender();
}
function filterButtons(event){
    let li=event.target;
    if(li.classList.contains("selected")){
        li.classList.remove("selected");
    }
    else{
        li.classList.add("selected");
    }
    updateNumber();
}
function init(){
    renderMain();
    addFilterSortingUI();
    addEventsListeners();
}
init();