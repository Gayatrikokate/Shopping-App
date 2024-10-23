import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Men');

  useEffect(() => {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderProducts = () => {
    if (!data) return null;

    const category = data.categories.find(cat => cat.category_name === selectedCategory);
    if (!category) return null;

    return (
      <div style={{ display: 'flex', overflowX: 'auto' }}>
      {category.category_products.map(product => (
        <Card key={product.id} item={product} />
      ))}
      </div>
    );
  };
  
 
  // console.log(data.categories);


  return (
    <div className="App">
      <h1 className="mt-3 text-4xl font-extrabold ">Select Your Choice</h1>

      <div>
        <div className="mt-5 flex justify-center font-semibold space-x-4 p-4 bg-gray-200">
          <button onClick={() => handleCategoryChange('Men')} className="rounded-full w-60 px-4 py-2 bg-white text-black hover:bg-black hover:text-white">Men</button>
          <button onClick={() => handleCategoryChange('Women')} className="rounded-full w-60 px-4 py-2 bg-white text-black hover:bg-black hover:text-white">Women</button>
          <button onClick={() => handleCategoryChange('Kids')} className="rounded-full w-60 px-4 py-2 bg-white text-black hover:bg-black hover:text-white">Kids</button>
        </div>
      </div>

      <div>
        {renderProducts()}
      </div>
    </div>
  );
}

export default App;
