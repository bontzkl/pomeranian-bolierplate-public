import './styles.css';
import { CookieIcon } from '../../../Components/Icons/CookieIcon';
export function CookieBanner() {
  return (
    <div className="container">
      <div>
        <CookieIcon className="cookie-icon" />
        <p className="header-paragraph">Pozwól na pliki Cookie!</p>
        <p>
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować użycie do swoich
          preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
          zgody”, aby następnie wybrać te które odpowiadają Twoim indywidualnym
          preferencjom.
        </p>
      </div>
    </div>
  );
}
