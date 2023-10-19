import React from 'react';
import Feature from "./Feature.js";
import '../css/Carousel.css';


import pic01 from '../images/room1.jpeg'
import pic02 from '../images/room2.webp'
import pic03 from '../images/room3.webp'

// const imageArray = [
//     "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
//     "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
//     "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
//     "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
//   ].map((image) => ({
//     id: crypto.randomUUID(),
//     image
// }));


const features = [
    {
        id: 1,
        pic: pic01,
        address: "1234 Goon Street, Los Angeles, CA 90001, USA ",
        price: "$1,000/mo",
        description: "Charming bungalow with vintage appeal, nestled in a quiet neighborhood. Cozy and comfortable living awaits."
    },
    
    {
        id: 2,
        pic: pic02,
        address: "5678 Oak Avenue, Los Angeles, CA 90002, USA",
        price: "$1,250/mo",
        description: "Modern urban oasis with stunning city views. Stylish design, abundant natural light, and great amenities."
    },

    {
        id: 3,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
    {
        id: 4,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
    {
        id: 5,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
    {
        id: 6,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
    {
        id: 7,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
    {
        id: 8,
        pic: pic03,
        price: "$1,200/mo",
        address: "9876 Maple Lane, Los Angeles, CA 90003, USA ",
        description: "Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."
    },
]
  
const Carousel = () => {
    // const images = imageArray;
    const speed = 19000;

    return (
        <div id="carousel-wrapper">
        <div className="inner">
            <div className="wrapper">
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {features.map((item) => (
                        <Feature
                        key={item.id}
                        content={item}
                        />
                    ))}
                </section>

                {/* REDUNDANCIES MAKE IT SMOOTHER – ONLY 3ISH NEEDED */}
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {features.map((item) => (
                        <Feature
                        key={item.id}
                        content={item}
                        />
                    ))}
                </section> 
                <section className="section" style={{ "--speed": `${speed}ms` }}>
                    {features.map((item) => (
                        <Feature
                        key={item.id}
                        content={item}
                        />
                    ))}
                </section>

                
            </div>
        </div>
        </div>
    );
};
  
  
export default Carousel;
  


// <section style={{ "--speed": `${speed}ms` }}>
//     {images.map(({ id, image }) => (
//         <div className="image" key={id}>
//         <img src={image} alt={id} />
//         </div>
//     ))}
// </section>

{/* {features.map((feature) => (
                        console.log(feature)
                    ))} */}