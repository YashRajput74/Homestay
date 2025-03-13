var reviewData=[
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
var benefitData=[
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
var inspirationData=[
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
var placesData=[
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
var data={
    cities:{
        "1": {name: Jaipur},
        "2": {name: Delhi},
        "3": {name: Banglore}
    },
    homes:{
        "1": {
            "name": ""
        }
    }
}