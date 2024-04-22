import styles from './page.module.css';
import pcLogo from '../assets/logo-pccomponentes.svg';
import logoAcer from '../assets/brans/acer.png';
import logoApple from '../assets/brans/apple.png';
import logoAsus from '../assets/brans/asus.png';
import logoDell from '../assets/brans/dell.png';
import logoHp from '../assets/brans/hp.png';
import logoIbm from '../assets/brans/ibm.png';
import logoMicro from '../assets/brans/microsoft.png';
import Image from 'next/image';

export default function Index() {
  const logoList = [
    logoAcer,
    logoApple,
    logoAsus,
    logoDell,
    logoHp,
    logoIbm,
    logoMicro,
  ];

  return (
    <div className={styles.page + ' p-4'}>
      <h1 className="font-">Home</h1>
      <h3>Aliados</h3>
      <div className="grid gap-4">
        {logoList.map((logoData, index) => (
          <Image
            key={index}
            src={logoData}
            height={120}
            width={400}
            alt={logoData + 'alternative text'}
          />
        ))}
      </div>
    </div>
  );
}
