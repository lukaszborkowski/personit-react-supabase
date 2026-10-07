import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <>
      <h1>Nie ma takiej strony</h1>
      <p>
        Ta strona jeszcze nie powstała albo zmieniła adres. Wróć do <Link to="/">wprowadzenia</Link>.
      </p>
    </>
  )
}
