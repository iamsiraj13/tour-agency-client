import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddPakage = () => { 
    const history = useHistory(); 
     
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addPakage',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Data added Successfully done')
            }

            history.push('/home')
        })
    
    };

    const  handleAddPakage=()=>{

    }
    return (
        <div className="container py-5">
            <h2 className="text-center">Add Pakage From Here</h2>
            <div className=" w-50 mx-auto mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input {...register("name")} className="form-control border border-dark" placeholder="name" />
                    </div>
                    <div className="mb-3">
                        <input {...register("descriptioni")} className="form-control border border-dark" placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <input type="number" {...register("price")} className="form-control border border-dark" placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <input  {...register("photoUrl")} className="form-control border border-dark" placeholder="Photo Url-- https://" />
                    </div>

                    <input onClick={handleAddPakage} type="submit" value="Add New Pakage" className="btn btn-warning"/>
                </form>
            </div>
        </div>
    );
};

export default AddPakage;