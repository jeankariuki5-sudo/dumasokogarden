import axios from 'axios';
import React, { useState } from 'react'

const Addproducts = () => {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [photo, setPhoto] = useState("");


    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading("Please wait as we add the product")

        try {
            const formdata = new FormData();

            formdata.append("product_name", productName);
            formdata.append("product_description", description);
            formdata.append("product_cost", cost);
            formdata.append("product_photo", photo);

            const response = await axios.post('https://jeankariuki.alwaysdata.net/api/add_product', formdata)

            setLoading("");
            setSuccess(response.data.message)

            setProductName("");
            setDescription("");
            setCost("");
            setPhoto("")

            e.target.reset()

            setTimeout(() => {
                setSuccess("");
            }, 5000);
        }

        catch (error) {
            setLoading("");
            setError("Something went wrong")

            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }


    return (
        <div className='row justify-content-center mt-4'>
            <div className='card col-md-6 shadow p-4'>
                <h1 className='text-primary'>Add Product</h1>

                <h5 className="text-info">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <h5 className="text-danger">{error}</h5>

                <form onSubmit={handleSubmit}>

                    <p className='text-start'>Product Name</p>
                    <input type="text"
                        className='form-control'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required />
                    {/* {productName}  */}

                    <p className="text-start">Description</p>
                    <textarea className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required></textarea>
                    {/* {description} */}

                    <p className="text-start">Cost (Ksh)</p>
                    <input type="text"
                        className='form-control'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        required />
                    {/* {cost} */}

                    <p className="text-start">Product Photo</p>
                    <input type="file"
                        className='form-control'
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required />

                    <input type="submit"
                        className='btn btn-primary form-control'
                        value='Add Product' />


                </form>

            </div>
        </div>
    )
}

export default Addproducts
