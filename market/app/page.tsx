import styles from './page.module.css';
import pcLogo from '../assets/logo-pccomponentes.svg';
import bg_home from '../assets/bg_home.webp';
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
      <h1 className="text-2xl text-center font-bold my-4">Bienvenido</h1>
      <div className="flex align-items-top w-full">
        <div className="w-full flex justify-center">
          <p className="w-64">
            On May 8, 1886, Dr. John Pemberton brought his perfected syrup to
            Jacobs Pharmacy in downtown Atlanta where the first glass of
            Coca‑Cola was poured. From that one iconic drink, we’ve evolved into
            a total beverage company. More than 2.2 billion servings of our
            drinks are enjoyed in more than 200 countries and territories each
            day. We are constantly transforming our portfolio, from reducing
            added sugar in our drinks to bringing innovative new products to
            market. We seek to positively impact people’s lives, communities and
            the planet through water replenishment, packaging recycling,
            sustainable sourcing practices and carbon emissions reductions
            across our value chain. Together with our bottling partners, we
            employ more than 700,000 people, helping bring economic opportunity
            to local communities worldwide.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={bg_home}
            height={120}
            width={400}
            alt={bg_home + 'alternative text'}
          />
        </div>
      </div>
      <h1 className="text-2xl text-center font-bold my-4">Aliados</h1>
      <div className="grid gap-6 justify-center">
        {logoList.map((logoData, index) => (
          <section key={index} className="bg-green-100 w-max border-gray-50 hover:shadow-2xl">
            <Image
              src={logoData}
              height={120}
              width={400}
              alt={logoData + 'alternative text'}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
