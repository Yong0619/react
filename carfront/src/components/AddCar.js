import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

function AddCar({addCar}) {
    const [open, setOpen ] = useState(false);
    //인풋 입력값 상태관리
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        price: ""
    });
    const handleChange =(e)=> {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setCar({
            brand: "",
            model: "",
            color: "",
            year: "",
            price: ""
        })
    }
    const handleSave = () => {
        addCar(car);
        handleClose();
    }
        
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>New Car</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                // 모달창 크기 크게
                aria-describedby="alert-dialog-description" maxWidth="sm" fullWidth={true}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input placeholder='Brand' name="brand" value={car.brand} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}} />
                    <br/> 
                    <input placeholder='Model' name="model" value={car.model} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/> 
                    <input placeholder='Color' name="color" value={car.color} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/> 
                    <input placeholder='Year' name="year" value={car.year} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/> 
                    <br/>   
                    <input placeholder='Price' name="price" value={car.price} onChange={handleChange} 
                    style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/> 
                </DialogContent> 
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>  
                    <Button onClick={handleSave}>Save</Button>  
                </DialogActions>       
            </Dialog>
        </div>
    );
}

export default AddCar;
