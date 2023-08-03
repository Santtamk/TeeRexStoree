import React from "react";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Button } from "@mui/material";
import "./header.css";
import Snackbar from '@mui/material/Snackbar';




export default function Header({size, setShow}) {


    return (
        <header className="header">
            <div className="container  pt-2">
                <Button  className="btn btn-dark"onClick={() =>setShow(true)}><h3>TeeRex Store</h3></Button>
                <Button variant="light" startIcon={<ShoppingCartSharpIcon />} onClick={() =>setShow(false)}> {size}</Button>
               
            </div>
        </header>
        
    )
}