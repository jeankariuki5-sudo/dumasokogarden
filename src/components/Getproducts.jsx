import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

    // Initialize hooks to help you manage the state of your application
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    // Declare the navigate hook
    const navigate = useNavigate()

    // below we specify the image base url
    const img_url = "https://jeankariuki.alwaysdata.net/static/images/"

    // Create a function to help you fetch the products of your API
    const fetchProducts = async () => {
        try {
            // Update the loading hook
            setLoading("please wait...")

            // interact with your endpoint for fetching the products
            const response = await axios.get('https://jeankariuki.alwaysdata.net/api/get_product_details')

            // update the products hook with the response given by the API
            setProducts(response.data)

            // set the loading hook back to default
            setLoading("")
        }

        // If there is an error
        catch (error) {
            // set loading hook back to default
            setLoading("")

            // update the error hook with a message
            setError("Something went wrong")
        }
    }

    // we shall use the useEffect hook that automatically re-render new features in case of any changes
    useEffect(() => {
        fetchProducts()
    }, [])

    // console.log("The products fetched are:", products)

    return (
        <div className='row'>
            <h3 className="text-primary">Available Products</h3>

            {loading}
            <h4 className="text-danger">{error}</h4>

            {/* map the products fetched from the API to the user interface */}

            {products.map((product) => (
                <div className="col-md-3 justify-content-center mb-3">
                    <div className="card shadow">
                        <img
                            src={img_url + product.product_photo}
                            alt="product name"
                            className='product-img mt-3' />

                        <div className="card-body">
                            <h5 className="text-primary"> {product.product_name} </h5>

                            <p className="text-dark"> {product.product_description.slice(0, 70)}... </p>

                            <h4 className="text-warning"> Kes.{product.product_cost} </h4>

                            <button className="btn btn-outline-info" onClick={() => navigate("/makepayment", { state: { product } })}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))
            }

        </div >
    )
}

export default Getproducts
