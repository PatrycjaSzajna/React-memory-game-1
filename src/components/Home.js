import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//data to obiekt, do którego przeslaliśmu usera i setUsera//
//destrukturyzacja//
//dzieki temu mam dostep do nadrzednej funkcji w głownej aplikacji app//
const Home = (props) => {
  const { user, setUser } = props.data;
  const history = useHistory();
  // useHistory przekierowuje uzytkownika miedzy stronami//


  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);
//username jest tym co wpiszemy w inputa//
//error rzeczy które sie wyswietla jak to pole zostanie źle uzupełnione//
//formValid czy formularz jest poprawny//

  const handleSubmit = (e) => {
    e.preventDefault();
    //dotyczy pola jak wysmely formularz//
    //i nie odświeży nam strony po wysłaniu formularza//

    // Sprawdzenie błędów w nazwie gracza
    //trim usuwa biale znaki czyli spacje na poczatku i na koncu//
    if (username.trim().length < 1) {
      setError('Podaj nazwę gracza');
    } else if (username.trim().length > 10) {
      setError('Nazwa jest za długa (max 10 znaków)');
    } else {
      setError('');
      setFormValid(true);
      setUser(username.trim());
    }
  };
  //setFormValid na true//
  //ustawia usera na to co jest wpisane w polu username//


  // Przekierowanie użytkownika do /game po prawidłowym ustawieniu nazwy
  useEffect(async () => {
    if (user && formValid) {
      await setFormValid(false);
      history.push('/game');
    }
  }, [user]);
  //useEffect jest odpalana zawsze przy pierwszym renderowaniu strony//
  //jezeli wpiszemy tablice po przecinku to renderuje po pierwszym renderze i wtedy kiedy zmieni sie ta wartość , jezeli tablica byłaby pusta to useEffect nie bedzie odpalony oprócz 1 renderu//
  //funkcja sprawdza czy isnieje użytkownik bo przy pierwszym renderze bedzie tam pusto zeby móc cokolwiek wpisac//
  //history to jest hook który pozwala przerzucac uzytkownika miedzy stronami, przerzucamy go na ścieżkę game//
//jezeli jest uzytkownik i jak formularz jest prawidłowyto przerzuć go do gry//
//został stworozny formValid, zakładamy odgórnie że jest źle wypełniony, jak wypelni sie go dobrze przerzuca sie go do gry i jak uzytkownik wchodzi na nowo na memory to tak jakby go wylogowuje i trzeba wpisac usera od poczatku i na nowo wysietli sie formularz//
//set state jest asynchroniczona i robimy tak jakby synchroniczna i dlatego jest użyty await dopóki sie to nie wykona, czyli poczekaj dopóki nie wykona sie to//
  


  //offset to jest div który jest pusty i ma szer navbara i jest po to by odsunac srodkowa zawartosc strony zeby nie wysietiła sie pod navbarem,
  //

  //fotmularz z bootstrapa//

  return (
    <>
      <div className='offset'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <form
              className='mb-3'
              style={{ maxWidth: '300px', margin: '0 auto' }}
              autoComplete='off'
            >
              <div className='mb-3'>
                <label
                  htmlFor='username'
                  className='form-label text-center'
                  style={{ display: 'block', fontSize: '20px' }}
                >
                  PODAJ NAZWĘ GRACZA
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  type='text'
                  className='form-control'
                  id='username'
                />
              </div>
              {error && <div className='alert alert-danger'>{error}</div>}
              <button
                onClick={handleSubmit}
                className='btn btn-primary'
                style={{ display: 'block', margin: '0 auto' }}
              >
                Graj
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
