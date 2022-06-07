import Image from 'next/image'
import imgArrow from '../../public/arrow-down/arrow-down.png'

import styles from './Filters.module.css'

export default function Filters(props) {
  return (
    <div className={styles.filters}>
      {props.filters.map((filter, rank)=>(
        <div key={`filter-${rank}`} className={styles.dropdown}>
          <div className={styles.title}>
            {filter}
          </div>
          <div className={styles.button}>
            <Image src={imgArrow} />
          </div>
        </div>
      ))}
    </div>
  );
}
