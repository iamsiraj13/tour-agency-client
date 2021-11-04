import React, { useEffect, useState } from 'react';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [isDeleted, setIdDeleted] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/myorder`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])



    const handleDelete = (id) => {

        const procced = window.confirm('You want delete?')

        if (procced) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIdDeleted(true)
                    }
                    else {
                        setIdDeleted(false)
                    }
                })
        }

    }

    return (
        <div className="container">
            <div className="bg-warning text-center py-4">
                <h2>Your All Order</h2>
            </div>
            {
                orders.map(order => <div key={order._id} className="row mt-5 mb-4">
                    <div className="col-md-3">
                        <img className="img-fluid" src={order.photoUrl} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h4>{order.name}</h4>
                        <p>Order by: <strong>{order.orderData.name}</strong></p>
                        <p>{order.descriptioni}</p>
                        <p>$ - {order.price}</p>
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-danger">Cancel Order</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrder;