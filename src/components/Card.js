import React from "react";

const Card = (props) => {
    console.log("PROPS:" , props)
const discountPercentage = ((props.item.compare_at_price - props.item.price) / props.item.compare_at_price) * 100;

return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img
            className="w-full"
            src={props.item.image}
            alt="Cloth"
        />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
                <span>{props.item.title}</span>
                <span>{props.item.vendor}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${props.item.price}</span>
                <span className="line-through text-gray-500">{props.item.compare_at_price}</span>
                <span className="text-green-500">{discountPercentage.toFixed(2)}% off</span>
            </div>
            <button
                className="w-full bg-gray-800 text-white font-bold py-2 px-4 mt-4 hover:bg-black transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    </div>
);
};

export default Card;
