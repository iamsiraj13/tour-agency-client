import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [singleData, setSingleData] = useState({})
    const {user} = useAuth();

    const onSubmit = orderData => {
        orderData.email = user.email;
        const orderInfo = {...singleData,orderData}
        fetch('http://localhost:5000/orderBook',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(orderInfo)
        })
        .then(res=>res.json())
        .then(result => {
            if(result.insertedId){
                alert("Place Order Successfull")
            }
        })
    };

    useEffect(()=>{
        fetch(`http://localhost:5000/singlePakage/${id}`)
        .then(res => res.json())
        .then(data => setSingleData(data))
    },[id])
    return (
        <div>
            <div className="bg-info py-4">
                <h2 className="text-center">Pakage Details Page</h2>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={singleData.photoUrl} alt="" />
                        <h2>{singleData.name}</h2>
                        <p>{singleData.descriptioni}</p>

                    </div>
                    <div className="col-md-6">
                        <h4>Place Order</h4>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="my-3">
                                    <input {...register("name")} className="form-control" placeholder="Name" defaultValue={user? user.displayName:''}/>
                                </div>
                                <div className="my-3">
                                    <input {...register("email")} className="form-control" placeholder="Email" defaultValue={user? user.email:''}/>
                                </div>
                                <div className="my-3">
                                    <input {...register("address")} className="form-control" placeholder="Adress"/>
                                </div>
                                <input type="submit" value="Place Order" className="btn btn-outline-danger" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;