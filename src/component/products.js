import React, {useEffect, useState}from "react";
import axios from 'axios';
import Card from "./card";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Filter from "./filter";


const Products = ( {handleClick}) => {
const [products, setProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [filterOptions, setFilterOptions] = useState({
    gender: null,
    color: null,
    priceRange: null,
    type: null,
  });

    const getProducts = async() =>{
        try{
            const res = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
            const updatedProducts = res.data.map((product) => ({
                ...product,
                quantity: 1, // Set default quantity to 1 for each product
                quantityLimit: product.quantity, // Set the apiQuantityLimit to the 'quantity' property from the API response
              }));
              setProducts(updatedProducts);
        }catch(error){
            console.error('getProducts error:', error)
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

//     const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
  const handleFilterChange = (options) => {
    setFilterOptions(options);
  };

  const filteredProducts = products.filter((product) => {
 
    const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const genderMatches = !filterOptions.gender || product.gender === filterOptions.gender;
    // console.log(product)
    const colorMatches = !filterOptions.color || product.color === filterOptions.color;
    const priceMatches = !filterOptions.priceRange || product.price === filterOptions.priceRange;
    const typeMatches = !filterOptions.type || product.type === filterOptions.type;

    return nameMatches && genderMatches && colorMatches && priceMatches && typeMatches;
  });
  
  

    return(
        <>
        <Box className='pt-4 d-flex justify-content-centre'
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                >
                <TextField fullWidth label="Search" id="fullWidth" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </Box>
            <Filter onFilterChange={handleFilterChange} />
            
           <div className="row">
            {filteredProducts.map((product) => (
                        <div key={product.id} className="col align-self-center m-2">
                            <Card product={product} handleClick={handleClick}/>
                        </div>
                    ))}
           </div>
           </>
    )
}

export default Products