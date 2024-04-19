import Link from 'next/link';

export default function About() {
  return (
    <div className="about">
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              <span>
                Aqui esta el about
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Link className="header_item" href="./">
        Home
      </Link>
    </div>
  );
}
