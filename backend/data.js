import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'Sajjan',
            email:'sajjanmcneese@gmail.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin : true,
        },
        {
            
                name:'Samir',
                email:'samirmcneese@gmail.com',
                password : bcrypt.hashSync('1234', 8),
                isAdmin : false,
            
        },
    ],
    products:[
        {
            
            name:'Newari Dress',
            category:'Dress',
            images:'/images/p1.jpg',
            price:89.99,
            countInStock:144,
            rating:4.9,
            numReviews : 1084 ,
            description:'Traditional Newari Dress',
        },
        {
            
            name:'Sherpa Hats',
            category:'Hats',
            images:'/images/p2.jpg',
            price:39.99,
            countInStock:121,
            rating:4.9,
            numReviews : 2249 ,
            description:'Cold Proof',
        },
        {
            
            name:'Nepal Printed tshirt',
            category:'Tshirt',
            images:'/images/p3.jpg',
            price:29.99,
            countInStock:87,
            rating:4.1,
            numReviews : 4050 ,
            description:'Cotten Tshirt',
        },
        {
            
            name:'Daura Suruwal',
            category:'Dress',
            images:'/images/p4.jpg',
            price:99.99,
            countInStock:0,
            rating:4.9,
            numReviews : 1023 ,
            description:'Festival Dress',
        },
        {
            
            name:'GoldStar Shoes',
            category:'Shoes',
            images:'/images/p5.jpg',
            price:69.99,
            countInStock:221,
            rating:4.4,
            numReviews : 1010 ,
            description:'Great for Hiking',
        },
        {
            
            name:'Yak made',
            category:'Sweater',
            images:'/images/p6.jpg',
            price:79.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Cold',
        }, 
        {
            
            name:'Woolen Pants',
            category:'Unisex',
            images:'/images/p7.jpg',
            price:79.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Cold',
        }, 
        {
            
            name:'Hemp Pants',
            category:'Unisex',
            images:'/images/p8.jpg',
            price:79.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Summer',
        }, 
        {
            
            name:'Dress Set',
            category:'Unisex',
            images:'/images/p9.jpg',
            price:129.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Ocassional Dress',
        }, 
        {
            
            name:'Sherpa Hat',
            category:'Unisx',
            images:'/images/p10.jpg',
            price:29.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Cold',
        }, 
        {
            
            name:'Ski Board',
            category:'Gadgets',
            images:'/images/p11.jpg',
            price:123.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Snow',
        }, 
        {
            
            name:'Lord Buddaha Figure',
            category:'Decoration',
            images:'/images/p12.jpg',
            price:69.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Buddism',
        }, 
        {
            
            name:'Nepali Dress',
            category:'Mens',
            images:'/images/p13.jpg',
            price:149.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for Festival',
        }, 
        {
            
            name:'Nepali Hat',
            category:'Mens',
            images:'/images/p14.jpg',
            price:49.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Festival season',
        }, 
        {
            
            name:'Woolen Sweater',
            category:'Unisex',
            images:'/images/p15.jpg',
            price:89.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Great for cold',
        }, 
        {
            
            name:'Moon Earing',
            category:'Womens',
            images:'/images/p16.jpg',
            price:39.99,
            countInStock:113,
            rating:4.5,
            numReviews : 1014 ,
            description:'Casual outing',
        }, 
    ],
};
export default data;