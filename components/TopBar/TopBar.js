import Image from 'next/image'

import Menu from './Menu'

import styles from './Topbar.module.css'
import imgLogo from '../../public/logo/logo.png'

export default function TopBar(props) {
  return (
    <div className={styles.topbar}>
      <Image
        src={imgLogo}
        alt="Biocad"
      />
      <Menu menu={props.menu} />
      <div className={styles.switcher}>ENG</div>
    </div>
  );
}
