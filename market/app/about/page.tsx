import Image from 'next/image';
import pcLogo from '../../assets/logo-pccomponentes.svg';

export default function About() {
  return (
    <div className="map">
      Welcome market 👋 Estas en sobre nosotros
      <Image src={pcLogo} height={120} width={400} alt="alternative" />
    </div>
  );
}
