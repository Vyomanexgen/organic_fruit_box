import './menu.css'
import freshFruitsImg from '../../assets/fresh_fruits.jpg'
import veggisAndSproutsImg from '../../assets/veggis.jpeg'
import dryFruitsImg from '../../assets/dry-fruits-500x500.webp'

const Menu = () => {
  const handleWhatsAppClick = (message) => {
    window.open(
      `https://wa.me/919912569025?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="menu-container">
      <div className="headline-for-menu">
        <h1>OUR MENU</h1>
      </div>
      <div className="types-of-menu ">

        {/* Fresh Fruits */}
        <div className="menu-type">
          <div className="menu-img-container">
            <img src={freshFruitsImg} alt="Fresh Fruits" />
          </div>
          <div className="menu-title">Fresh Fruits</div>
          <ul className="fresh-fruits menu-list">
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
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Fresh Fruits Medium Box")
              }
            >
              Medium Box
            </button>
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Fresh Fruits Large Box")
              }
            >
              Large Box
            </button>
          </div>
        </div>

        {/* Veggis & Sprouts */}
        <div className="menu-type">
          <div className="menu-img-container">
            <img src={veggisAndSproutsImg} alt="Veggis and Sprouts" />
          </div>
          <div className="menu-title">Veggis & Sprouts</div>
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
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Veggis & Sprouts Medium Box")
              }
            >
              Medium Box
            </button>
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Veggis & Sprouts Large Box")
              }
            >
              Large Box
            </button>
          </div>
        </div>

        {/* Dry Fruits */}
        <div className="menu-type">
          <div className="menu-img-container">
            <img src={dryFruitsImg} alt="Dry Fruits" />
          </div>
          <div className="menu-title">Dry Fruits</div>
          <ul className="dry-fruits menu-list">
            <li>Almonds</li>
            <li>Kaju</li>
            <li>Dates</li>
            <li>Walnuts</li>
            <li>Pistachios</li>
            <li>Cashews</li>
          </ul>
          <div className="btn-wrapper">
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Dry Fruits Medium Box")
              }
            >
              Medium Box
            </button>
            <button
              className="box-btn"
              onClick={() =>
                handleWhatsAppClick("Hello, I would like to order the Dry Fruits Large Box")
              }
            >
              Large Box
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
