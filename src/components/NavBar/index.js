import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './style.css';



const NavBar = () => {
    
        const goBack = useNavigate();
     
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Git-Search</NavLink>
            <button onClick={() => goBack(-1)}>Back</button>
        </nav>
        <main>
            <Outlet />
        </main>
        </>
    );
    }

export default NavBar;
