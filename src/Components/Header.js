import React from 'react';

const Header = () => {
    //Componente que mostrara el titulo de nuestra pagina Web
    //Hacemos uso de tailwin para dar diseño a nuestro titulo h1
    return (
        <header>
            
            <h1 className="text-8xl font-light text-center my-20">My To-Do List</h1>
            
        </header>
    );
};
export default Header;
