import Brand from "./Brand";
import CartContainer from "./CartContainer";
import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";

const Navbar = () =>{
    return (
        <nav className ="navbar navbar-expand-lg bg-body-tertiary ">
<div className ="container-fluid colorNav">
<Brand/>
<MenuButton/>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
        <CategoryItem isActive={false} name="Hombres"/>
        </li>
        <li className ="nav-item">
        <CategoryItem isActive={false} name="Mujeres"/>
        </li>
        <li className ="nav-item">
        <CategoryItem isActive={false} name="Niños"/>
        </li>
        <li className ="nav-item">
        <CategoryItem isActive={false} name="Accesorios"/>
        </li>
        <li className ="nav-item bg-warning">
        <CategoryItem isActive={true} name="OFERTAS"/>
        </li>
    </ul>
    </div>
    <CartContainer />
</div>
</nav>
);
};
export default Navbar;