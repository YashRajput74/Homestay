function videoSection(){
    var tpl=`
    <h1>Don't just visit, live it!</h1>
    <p>Homestay.com connects host families with students and independent travellers looking for accommodation. The Homestay community offers you the opportunity to live with a local and to truly discover your destination. We offer a wide selection of rooms for both long and short term accommodation that offer great value for money, leaving you with more to spend enjoying your trip.</p>
    <div>
        <iframe 
                src="https://www.youtube.com/embed/B0uYcxvPf1A" 
                title="Hello Homestay" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
        <div>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    `;
    document.querySelector("main>div:nth-child(1)").innerHTML=tpl;
}
function reviewSection(data){
    var tpl=`
    <div>
        ${data.map((item)=>{
            return `
            <div class="reviewDiv">
                <div><img src="${item.imgLink}"></div>
                <div>${item.review}</div>
                <div></div>
                <div><img src="https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"></div>
                <div></div>
                <div>Read ${item.name}'s review, ${item.place}> </div>
            </div>`
        }).join('')}
    </div>
    <button>See Customer Reviews</button>
    `;
    document.querySelector("main>div:nth-child(2)").innerHTML=tpl;
}
function listingProperty(){
    var tpl=`
        <div class="monetiseDiv">
            <div>
                <p>Monetise your spare room</p>
                <p>Earn extra income renting out your spare room to international students, tourists and professionals.</p>
                <button>List your property here</button>
            </div>
            <div></div>
        </div>
    `;

    document.querySelector("main>div:nth-child(3)").innerHTML=tpl;
}
function benefitDiv(data){
    var tpl=`
    <div class="benefitDiv">
        ${data.map((item)=>{
            return `<div>
                    <div><div class="circleIcon"></div></div>
                    <div>
                        <h5>${item.title}</h5>
                        <p>${item.content}</p>
                    </div>
                </div>`
        }).join('')}
    </div>
    `;
    document.querySelector("main>div:nth-child(4)").innerHTML=tpl;
}
function inspirationDiv(data){
    var tpl=`
        <h1>Homestay Inspiration</h1>
        <p>Be inspired by our unique mix of homestays around the world. We work with hosts that specialise in student stays, but also plenty that offer short term city breaks and even some that are totally off the beaten track letting you discover the beach, rainforest, countryside and mountains.</p>
        <div class="cellContainer">
            ${data.map((item)=>{
                return `<div class="cells" style="background-image: url(${item.imgUrl})">
                    <div>${item.title}</div>
                </div>`
            }).join('')}
        </div>
    `;
    document.querySelector("main>div:nth-child(5)").innerHTML=tpl;
}
function featuredPlaces(data){
    var tpl=`
        <h1>Homestays We Love</h1>
        <div class="cellContainer">
            ${data.map((item)=>{
                return `<div class="cells" style="background-image: url(${item.imgLink})">
                    <div>${item.ownerName}</div>
                </div>`
            }).join('')}
        </div>
    `;
    document.querySelector("main>div:nth-child(6)").innerHTML=tpl;
}
function renderMain(){
    videoSection();
    reviewSection(reviewData);
    listingProperty();
    benefitDiv(benefitData);
    inspirationDiv(inspirationData);
    featuredPlaces(placesData);
};
renderMain();

function scrollToSection(section) {
    var offSet = section.offsetTop;
    window.scrollTo({
        top: offSet,
        behavior: "smooth"
    });
}

document.querySelectorAll('.stickySection a').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = anchor.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        scrollToSection(targetElement);
    });
});

var observer = new IntersectionObserver((entries,observer)=>{
    var entry=entries[0]
    if(!entry.isIntersecting){
        document.querySelector(".findHomestayButton").style.display="block";
    }
    else{
        document.querySelector(".findHomestayButton").style.display="none";
    }
},{
    threshold: 0
})
observer.observe(document.querySelector(".hero"));