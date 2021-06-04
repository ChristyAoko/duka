import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import shop from "../shop.jpg";

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name, 
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={shop} alt="shop" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt="pic" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">Hey There</h1>
                        <div className="prose lg:prose-xl text-white">
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}