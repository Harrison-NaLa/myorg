import Link from 'next/link';

export default function Location() {
  return (
    <div className="mapa">
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              <span>
                Aqui esta el Location
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Link className="header_item" href="./about">
        about
      </Link>
    </div>

  );
}
