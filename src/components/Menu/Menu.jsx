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
                        <li>Black Grapes</li>
                        <li>Green Grapes</li>
                        <li>Watermelon</li>
                        <li>Muskmelon</li>
                        <li>Orange</li>
                        <li>Guava</li>
                    </ul>
                    <div className="btn-wrapper">
                        <button className="box-btn">Medium Box</button>
                        <button className="box-btn">Large Box</button>
                    </div>
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
                        <li>Green Moong</li>
                        <li>Beans</li>
                        <li>Green Gram</li>
                        <li>Moong Dal</li>
                        <li>Keera</li>
                        <li>Carrot</li>
                        <li>Beetroot</li>
                    </ul>
                    <div className="btn-wrapper">
                        <button className="box-btn">Medium Box</button>
                        <button className="box-btn">Large Box</button>
                    </div>
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
                    <div className="btn-wrapper">
                        <button className="box-btn">Medium Box</button>
                        <button className="box-btn">Large Box</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu