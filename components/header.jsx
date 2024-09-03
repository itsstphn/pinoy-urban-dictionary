import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="bg">
      <div className="container mx-auto">
        <h1>Pinoy Urban Dictionary</h1>
        <div>
          <input type="text" />
          <div>
            <FontAwesomeIcon
              color="#FF220C"
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
          <div>
            <FontAwesomeIcon icon="fa-regular fa-user" />
          </div>
        </div>
      </div>
    </header>
  );
}
