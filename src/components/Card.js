const Card = ({ card, pickCard }) => {
    return (
      <div
        className={`card-box ${card.blocked && 'blocked'} ${
          card.active && 'active'
        }`}
      >
        <div className='card-content'>
          <img
            draggable={false}
            src={card.img}
            alt='image'
            onClick={() => {
              !card.blocked && !card.active && pickCard(card.id, card.value);
            }}
          />
        </div>
      </div>
    );
  };
  
  export default Card;
  
  //draggable obrazek nie jest ściągalny jak sie myszką go przeciągnie zeby nie było widać karty która jest pod spodem//
  //onClick jak kliknie sie obrazek to odapala sie funkcja pick card do ktorej jest przeyslane id i value karty//
  //pick card mozna kliknac wtedy kiedy karta nie jest zablokowana i kiedy nie jest aktywna/ jezeli klikniesz 2 karty to od razu 3 kliknac nie mozna zeby sie nie wysiwetliły wszystkie, blokoda 2 sekundy/