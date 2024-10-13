import React, { useContext, useEffect, useState } from 'react';
import { FetchWishlistContext } from './../../../Context/WishList';
import Product from '../Product/Product';

export default function WishList() {
    const { wishlist } = useContext(FetchWishlistContext);
    const [wish, setWish] = useState([]);

    useEffect(() => {
        if (wishlist && wishlist.result) {
            // Transform the wishlist result
            const transformedWish = wishlist.result.map(item => ({
                productId: item._id, // Change _id to productId
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                category: item.category,
                bestSeller: item.bestSeller,
                offer: item.offer,
                description: item.description,
                image: item.image,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
            }));
            setWish(transformedWish); // Update the wish state with transformed data
        }
    }, [wishlist]);

    console.log(wish);

    return (
        <>
            <Product categoryProducts={wish} categoryName={"Wish List"} />
        </>
    );
}
