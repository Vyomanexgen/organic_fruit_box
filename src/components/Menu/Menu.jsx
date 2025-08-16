import './menu.css'
import freshFruitsImg from '../../assets/fresh_fruits.jpg'
import veggisAndSproutsImg from '../../assets/veggis.jpeg'
import dryFruitsImg from '../../assets/dry-fruits-500x500.webp'

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="headline-for-menu">
                <h1>OUR MENU</h1>
            </div>
            <div className="types-of-menu ">
                <div className=" menu-type">
                    <div className="menu-img-container">
                     <img src={freshFruitsImg} />    
                    </div>
                    <div className="menu-title">
                        Fresh Fruits
                    </div>
                    <ul className=" fresh-fruits menu-list">
                        <li>Apple</li>
                        <li>Kiwi</li>
                        <li>Pomegranate</li>
                        <li>Dragon fruit</li>
                        <li>Black grapes</li>
                        <li>green grapes</li>
                        <li>watermelon</li>
                        <li>Muskmelon</li>
                        <li>orange</li>
                        <li>guava</li>
                    </ul>
                </div>
                <div className="menu-type">
                     <div className="menu-img-container">
                     <img src={veggisAndSproutsImg} />    
                    </div>
                    <div className="menu-title">
                        Veggis & Sprouts
                    </div>
                    <ul className="veggis-and-sprouts menu-list">
                        <li>Whole</li>
                        <li>green moong</li>
                        <li>beans</li>
                        <li>Green gram</li>
                        <li>Moong dal</li>
                        <li>Keera</li>
                        <li>Carrot</li>
                        <li>Beetroot</li>
                    </ul>
                </div>
                <div className=" menu-type">
                     <div className="menu-img-container">
                     <img src={dryFruitsImg} />    
                    </div>
                    <div className="menu-title">
                        Dry Fruits
                    </div>
                    <ul className="dry-fruits menu-list">
                        <li>Almonds</li>
                        <li>Kaju</li>
                        <li>Dates</li>
                        <li>Walnuts</li>
                        <li>Pistachios</li>
                        <li>Cashews</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu