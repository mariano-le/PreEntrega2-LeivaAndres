import { AppBar, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <AppBar className='toolbar-navbar' sx={{ backgroundColor: "#0E21A0" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <NavLink className="navbar-link" to="/">
                    <Typography sx={{color: '#EC53B0'}}> 
                        Simulador 2.0
                    </Typography>                    
                </NavLink>
                <NavLink className="navbar-link" to="/">
                    <Typography sx={{color: '#9D44C0'}}>
                        Categorías
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography sx={{color: '#9D44C0'}}>
                        Productos
                    </Typography>
                </NavLink>
                <AddShoppingCartIcon /> <span>(0)</span>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;