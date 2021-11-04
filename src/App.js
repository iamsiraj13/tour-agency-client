import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddPakage from './Components/AddPakage/AddPakage';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import MyOrder from './Components/MyOrder/MyOrder';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/manageorder">
                        <ManageAllOrders></ManageAllOrders>
                    </PrivateRoute>
                    <PrivateRoute path="/order">
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    <PrivateRoute path="/placeOrder/:id">
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>
                    <Route path="/addPakage">
                        <AddPakage></AddPakage>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;