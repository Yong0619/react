import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './CarList';
import Login from './Login';

function CarFront({isAuthenticated, logoutAuth, loginAuth}) {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>
                        CarShop {isAuthenticated ? <span onClick={logoutAuth}>Logout</span> : ""}
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* 로그인이 되어있으면 CarList 로그인이 안되어있으면 로그인 창을 띄움 */}
            {isAuthenticated ?<CarList /> : <Login loginAuth={loginAuth} /> }
        </div>
    );
}

export default CarFront;