import './styles.css';

const numbers = [2, 5, 7, 1, 8, 12];
const arr = ['źrebak', 'łąka', 'zegarek', 'auto', 'kanapa', 'placek'];

const myText = 'ala_ma_kota_a_tomek_ma_psa';

const formatter = (text) => {
  text = text.replace('a', 'A');
  text = text.split('_');
  let textAfterFormat = '';
  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1) {
      textAfterFormat = textAfterFormat + text[i] + '.';
    } else {
      textAfterFormat = textAfterFormat + text[i] + ' ';
    }
  }
  console.log(textAfterFormat);
};
formatter(myText);

const pxY = '1080px';
const pxX = '1920px';
const CalculatePixels = (x, y) => {
  x = parseInt(x);
  y = parseInt(y);
  const totalPx = x * y;
  return String(totalPx) + 'px';
};

const getInfoAboutValue = (value) => {
  console.log(
    'Typ wartości:',
    typeof value,
    '\nWartość:',
    value,
    '\nWartość logiczna:',
    Boolean(value)
  );
};
getInfoAboutValue(undefined);
getInfoAboutValue(null);
getInfoAboutValue('abc');
getInfoAboutValue(123);

const checker = (e) => {
  const text = e.replaceAll('kurde', 'psia jucha');
};

export function ValuesAndComments() {
  return (
    <div>
      {arr
        .sort((a, b) => {
          return a.localeCompare(b);
        })
        .map((item) => {
          return <p>{item}</p>;
        })}
      {numbers
        .sort((a, b) => a - b)
        .reverse()
        .map((item) => {
          return <p>{item}</p>;
        })}
      <p>1920px X 1080px</p>
      {CalculatePixels(pxX, pxY)}
      <input onChange={checker} />
    </div>
  );
}
