import Link from 'next/link';

export default function Location() {
  return (
    <div className="mapa">
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome market 👋 aqui en ubicaion
              <Link className="header_item" href="./about">
              about
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
