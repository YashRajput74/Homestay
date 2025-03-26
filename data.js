const reviewData=[
    {
        name: "Petra",
        place: "Trinidad",
        imgLink: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zOTIwMjM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e24f02b99017e211b365902047504d2e11bcae23&style=small",
        review: "¡Alojarse en la casa de Maida fue lo más destacado del viaje! De buen corazón, divertid..."
    },
    {
        name: "Carolin",
        place: "Dublin",
        imgLink: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yODQzODY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--723d18cd0ad5f189381d3f2a62d317a6f880da83&style=small",
        review: "I spent a wonderful month in Ireland living with Fiona and Liam. We had some very inter..."
    },
    {
        name: "Terri",
        place: "Ibaraki",
        imgLink: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zODEzNjE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--42d6ce7d0ef459d2a32a91a87759010c6b93978c&style=small",
        review: "What a wonderful, good natured family with a fabulous sense of humor I truly appreciate..."
    }
];
const benefitData=[
    {
        title: "True value",
        content: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience."
    },
    {
        title: "Real Homes",
        content: "We will always offer rooms in real homes with local hosts. Our accommodation is different because you stay with locals and become part of the local community."
    },
    {
        title: "Sustainable tourism",
        content: "We promote sustainable local tourism by ensuring you're spending stays within local communities, minimising your environmental impact."
    }
]
const inspirationData=[
    {
        imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--d186e6909c5047db5eec1cd60eb223947ad18f7e&style=medium',
        title: 'Fancy a City Break'
    },
    {
        imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMyP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--db91429d6d57b079d776a90e1af20d5793177605&style=medium',
        title: 'Calling all Students'
    },
    {
        imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDI5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f2d54a82eae10bcb8a2fb709499edb85a3dedc4e&style=medium',
        title: 'Heading on an Adventure?'
    }
]
const placesData=[
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzY5MTY3P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--3e4536dcb659349ef4aaa3d7864ba31ddfbe4a31&style=medium',
        ownerName: 'Kate',
        location: 'LONDON, UNITED KINGDOM',
        price: '6173'
    },
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS85NDU3NzE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e1942a91c9f1928428d43137fe8d6d016fd19dba&style=medium',
        ownerName: 'Nev',
        location: 'SHIPLEY, UNITED KINGDOM',
        price: '3067'
    },
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzY3Nz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--2cec0abbaa0fc576380382dd67f1f7f02447420e&style=medium',
        ownerName: 'Joy',
        location: 'MELBOURNE, AUSTRALIA',
        price: '3074'
    },
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS85NjgwNjQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--68ae2ee74cb6bc440b2b7b31fb126c56ecbc3d5a&style=medium',
        ownerName: 'Peter',
        location: 'CAMBRIDGE, UNITED KINGDOM',
        price: '1683'
    },
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS83NzE4OTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3f82258c99629e740a8942332aa3c09229b6ae79&style=medium',
        ownerName: 'Colin',
        location: 'LONDON, UNITED KINGDOM',
        price: '5612'
    },
    {
        imgLink: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjgwMTA1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--761c7cdc3a6858ce0e4b79b5658b680c49decf8b&style=medium',
        ownerName: 'Deboragh',
        location: 'NOTTINGHAM, UNITED KINGDOM',
        price: '1871'
    }
]
const extraFields=[
    "mealsProvided","useKitchen","males","females","couples","families","students","pets","cooking","golf","tennis","hiking","cycling","wheelchair","wirelessIntenet","TV","garden","bikes","parking","pool","gym"
]
const data={
    cities:{
        "1": {name: "Jaipur, Rajasthan"},
        "2": {name: "NCR"}
    },
    homes:{
        "1": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS80ODcyODg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dcd46168aa00354b004f1112379670f1d6951e51&style=medium",
            "imgurl": "mZ2lkOi8vaHN0L0F2YXRhci83MTYxNT9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--bc61c0f0fdd6fe9160799cb949e340b9749651e7&style=small",
            "name": "Kalpana Yoga Homestay",
            "address": "KALPANA IN AJMER ROAD, JAIPUR",
            "reviews": "19",
            "distance": "1.9km",
            "price": "1,933",
        },
        "2": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81Njk4MTY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0a8cb4845d11f214fd233005690435507d3c6592&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8xNDc1MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--1759bfa24813d05388cb5b139ab6edefa6ab74f8&style=small",
            "name": "Homestay Near Jaipur airport",
            "address": "MANISHA IN INTERNATIONAL AIRPORT, JAIPUR",
            "reviews": "9",
            "distance": "9.2km",
            "price": "1,400",
        },
        "3": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzAwNTc_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3ee8cd47968b18e0e2892f1e360a78cf3658eb96&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yMDI0NDg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e9f56b53b826a8156a295b7e47bf58b6a47b6342&style=small",
            "name": "Palm Villa",
            "address": "HIMANSHU IN BAPU NAGAR,JAIPUR",
            "reviews": "3",
            "distance": "2.6km",
            "price": "700",
        },
        "4": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS85NDI2NTg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--23d568c1b4147f5dc0e661b62d8ae9a3a7996245&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
            "name": "Neetu's Home Stay",
            "address": "MAHENDRA IN BANIPARK,JAIPUR",
            "reviews": "2",
            "distance": "3.3km",
            "price": "1,026",
        },
        "5": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTgxODk5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1f1b89f69222e0f059ab1fc295d1f9353841eae9&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yNDk0MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ce2079715b36d8b45bea95d6e23a076ba27a5994&style=small",
            "name": "Bunglow80",
            "address": "SHALINI IN TILAK NAGAR,JAIPUR",
            "reviews": "1",
            "distance": "4.1km",
            "price": "999",
        },
        "6": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xOTgwNzE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8189f4b77e4ca3961ed1e5fb6598e483abc38a05&style=listing",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzIwMTExNj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--c2178b587e04ac2016dd2711ee045e5c2a970cb5&style=thumb",
            "name": "Happy Caring hosts Jaipur",
            "address": "SHARMILS IN VAISHALI NAGAR, JAIPUR",
            "reviews": "0",
            "distance": "5.0km",
            "price": "2,000",
        },
        "7": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTYyMDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--38c3b692cc7a65454b72bdcbf749f267cc46c23c&style=listing",
            "imgurl": "http://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yOTI4OTE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3d075ed0613ec1533b1ea3576e93c61c65da4677&style=small",
            "name": "Come for your best time in Jaipur",
            "address": "ADARSH IN JAGATPURA,JAIPUR",
            "reviews": "0",
            "distance": "9.14km",
            "price": "500",
        },
        "8": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTU1Mjk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dec42531b4a81c899885be6691c883c7c3e5fb09&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8xMjM5Nzg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--4d87db9aa1d90de1912f58ef1643700617db115f&style=small",
            "name": "K.D House",
            "address": "KULDEEP IN KALWAR ROAD, JHOTWARA,JAIPUR",
            "reviews": "0",
            "distance": "7.0km",
            "price": "720",
        },
        "9": {
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTQxNDA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--5de77af9edec5233d3631a5f3522fc0ba1126cff&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
            "name": "Shanti villa",
            "address": "DR. RANU IN PARK FACING OPP NRI COLONY, JAIPUR",
            "reviews": "0",
            "distance": "4.2km",
            "price": "1,333",
        },
        "10": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjQzNjEzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--b5e2d5122d65915459e5af9fc2348c1e61fa808a&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yOTM0NjA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--80083a40ec6a0da7fe14c9c49a6b28cf4d253ea9&style=small",
            "name": "Pushpanjali-the boutique stay",
            "address": "MAMTA IN AJMER ROAD,JAIPUR",
            "reviews": "0",
            "distance": "4.2km",
            "price": "2000",
        },
        "11": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDk2NjE1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--a83d2ef67e2c631ab77b2ca2fc743bc02313b58f&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yNTc1Njk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--6f7c1317bc82e4a50b394a8fcfa35babdb84ca3e&style=small",
            "name": "Lovely room in a historic bungalow!",
            "address": "Hari in C-Scheme, Jaipur",
            "reviews": "19",
            "distance": "1.9km",
            "price": "1,000",
        },
        "12": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5ODk3P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--5486a174563a99d8df7f0d638caa1cad0ec9a451&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zNDMwNDI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e2a03e0d9d650e509fad03c8e11ee52c24b75ef2&style=small",
            "name": "Town of old forts and temples ",
            "address": "Manoj in Amer, Jaipur",
            "reviews": "9",
            "distance": "12.4km",
            "price": "700",
        },
        "13": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzMyMDczP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--93040b9aa32485b9c571589f473dbdc9f0196410&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zMTc4NTk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--108815849a65d55bcf84a6433d21caef6da8c2fb&style=small",
            "name": "Spacious 2-BHK with Big Terrace",
            "address": "UTKARSH in Near Dev nagar, Jaipur",
            "reviews": "3",
            "distance": "4.2km",
            "price": "600",
        },
        "14": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzE0MDIxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1e6df641236ad2f0f1be2f0941c4ad088999f3dd&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zMTEwMjM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3c1ed69e5d1b3a41334a405769deaa73a180aad6&style=small",
            "name": "Homestay at home",
            "address": "TEENA IN BANI PARK,JAIPUR",
            "reviews": "2",
            "distance": "3.3km",
            "price": "833",
        },
        "15": {
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTk1MjkzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--6ba0ebbfde0bd632eca994cb7f2327135907bd01&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yODIwMjI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8c3c423b29c5fa1257d6762398ee17e5224d0d18&style=small",
            "name": "Srishti Homestay",
            "address": "HARSHletDHAN IN VAISHALI NAGAR,JAIPUR",
            "reviews": "1",
            "distance": "5.4km",
            "price": "1000",
        },
        "16" :{
                "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNTUwNzE5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--e3cfcfd3476dbc06224555baf6697aa4d67ab916&style=listing",
                "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci80MDY1ODE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--62d73b96c089b694eefbc4f1cc8d91077537c2a5&style=small",
                "name": "Cozy Stay in the heart of Gurgaon",
                "address": "Lekha in DLF 1, Gurgaon",
                "reviews": "1",
                "distance": "22.4 km",
                "price": "1,666",
        },
        "17":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDYzODc2P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f549af437ba8fae0ee579559df295b173030f1af&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yNTAzODI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--f611bd39963356bac4190aab2c0508aa8e753723&style=small",
            "name": "Comfy homestay with WiFi",
            "address": "Tarun in Near corner sweets, New Delhi",
            "reviews": "1",
            "distance": "9.0 km",
            "price": "666",
        },
        "18":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81NDk0MjU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--160e8b5adb0741e7830e107eb50e2b3af3996e2f&style=listing",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzE2ODEyND9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--485a2f1ffa1d7b4b02efb240b080af97118b9e4a&style=thumb",
            "name": "Bed and Breakfast",
            "address": "Madhu in Jangpura, Delhi",
            "reviews": "7",
            "distance": "6.3 km",
            "price": "2,106",
        },
        "19":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzkxNTA2P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--c4005e9c0241032a8015dbd050f6349a67995895&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zNDM1Mjk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3643dcb2d96583c3d747a41a0c4b89ccebf90675&style=small",
            "name": "Bliss - A cheerful room and workpla",
            "address": "Sangeeta  in Green Park, New Delhi",
            "reviews": "3",
            "distance": "9.1 km",
            "price": "2,000",
        },
        "20":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDU0MzIxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--9f229a9463f79bac14406cfd445e986939242d2c&style=listing",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8xMzkwMzQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--c013c7faaae3ac5db87496bf7efb36974857bb0c&style=small",
            "name": "Peace Home-2 minutes 2 metro lines",
            "address": "Naresh  in Kirti Nagar, New Delhi",
            "reviews": "16",
            "distance": "7.8 km",
            "price": "2,500",
        },
        "21":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzgzOTg4P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--2298e4292b193443e70a6d0081dcfb88e50023ff&style=medium",
            "imgurl": "_Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzEzODQxMjQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--d1b6a1b27ef291242f2ad6f63b5d23bb9b274c24&style=thumb",
            "name": "Nina Kochhar's Homestay",
            "address": "NINA IN CIVIL LINES, DELHI",
            "reviews": "1",
            "distance": "4.0km",
            "price": "3000",
        },
        "22":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82NDM5MDQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--7e596b649a3035c51feb4b51b62ff120d62de259&style=medium",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzE2NTI4NT9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--5d2baaeaa987615502cfdd86822c904a94152168&style=thumb",
            "name": "Homestay in Hauz Khas",
            "address": "AJAY IN HAUZ KHAS, NEW DELHI",
            "reviews": "2",
            "distance": "9,4 km",
            "price": "2,833",
        },
        "23":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNTQ5OTIzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--4b9c2856b4053ad4e59908ebc18a8fda0cb51ef1&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci80MDYyODE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--9a3b341fd3781f8e5a24a21a1f2576d69ada8c6f&style=small",
            "name": "Satvik cozy homestay",
            "address": "KULDEEP IN AZADPUR, DELHI",
            "reviews": "0",
            "distance": "9.8 km",
            "price": "500",
        },
        "24":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNTIzMjYwP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--4270d6e89cbff53f90a2f1c333f4b999a59b34c3&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zOTY0OTM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--43e3786ef2ca456104426666fc3c2749d2ed96ac&style=small",
            "name": "Charming CR Park Retreat",
            "address": "PREETI IN KALKAJI, CHITTRANJAN PARK",
            "reviews": "0",
            "distance": "10.0 km",
            "price": "1,333",
        },
        "25":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNTQzMDA1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--3688973cdabb11bfd96666a59faefa129cc512bb&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8zNTI3NjE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--c7ade7184fffd14036a81bbdb40f3d9d74c573ac&style=small",
            "name": "Pooja's Abode",
            "address": "TANMAY IN CHANDANHULLA, DELHI",
            "reviews": "0",
            "distance": "18.7 km",
            "price": "1,428",
        },
        "26":{
            "backgroundimgUrl": "xZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjE1MTg1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--4fb7008b8a669b2396ae0888e6b89f3591330286&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8yMTcyMDg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--2d3e47b642192cb32acd633712a4e631e3bca5ba&style=small",
            "name": "Cozy and Spacious palce to enjoy",
            "address": "UDIT IN PULBANGASH METRO STATION, DELHI",
            "reviews": "0",
            "distance": "3.9 km",
            "price": "1,214",
        },
        "27":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xODEzNDA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--a14d4085a086901e1239f81202a9d84e7d567807&style=medium",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzIwNDI1Nj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--26f34fab52ebfb65d3537cddca6b1086f6c27274&style=thumb",
            "name": "Host Family enjoys reading",
            "address": "JATANDER INN NCR NOIDA, NOIDA",
            "reviews": "3",
            "distance": "14.0 km",
            "price": "1,906",
        },
        "28":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82NTEzMzk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--18249b82e4a4b8c5a9adf22660db543ababca9b6&style=medium",
            "imgurl": "nZ2lkOi8vaHN0L0F2YXRhci8xMzU4NTA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0dda547f6b7876190fb9a917fa178425f256e527&style=small",
            "name": "BRAND NEW, SAFE AND SECURE",
            "address": "DEEPAK IN VERY CALM QUIET AND GREEN, GURUGRAM",
            "reviews": "3",
            "distance": "22.0 km",
            "price": "1,833",
        },
        "29":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82NTg3Nzc_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--b8d150c964ca2dfc1426d8e841d8972180ca8a38&style=medium",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzY1Njg0OD9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--dabca721047dd9fb650785302dd840a717be7cdb&style=thumb",
            "name": "Live with grandad",
            "address": "GURDIP IN MG ROAD, GURUGRAM",
            "reviews": "0",
            "distance": "22.5 km",
            "price": "1,200",
        },
        "30":{
            "backgroundimgUrl": "wZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNjc1ODM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--38ebac6e612ab61ed4ab31bc47bde2711612211d&style=medium",
            "imgurl": "-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzE2NzU4Mj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--38fab64cffdafa442b6b4987afa63fbb4709ce02&style=thumb",
            "name": "We live in Love and Peace",
            "address": "RUUMA IN NIZAMUDDIN EAST, NEW DELHI",
            "reviews": "2",
            "distance": "5.9 km",
            "price": "4,450",
        }
    },
    cityHomes:{
        "1": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        "2":[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    }
}
function addDataFields(){
    for (let homeID in data.homes) {
        let home = data.homes[homeID];
        extraFields.forEach(field=>{
            home[field]= Math.round(Math.random()+0.2);
        })
    }
}
addDataFields();