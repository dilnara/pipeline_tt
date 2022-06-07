import styles from './Design.module.css'

import Image from 'next/image'
import imgShape from '../../public/pattern/shape.png'
import imgMainSmall from '../../public/pattern/main-small.png'
import imgMain from '../../public/pattern/main.png'
import imgDots from '../../public/pattern/dots.png'

export default function Design({title, subtitle, description}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerleft}>
        <div className={styles.title}>
          {title}
        </div>
        <div>
          <Image src={imgShape}/>
        </div>
        <div style={{marginTop: 30, alignSelf: 'center'}}>
          <Image src={imgMainSmall}/>
        </div>
      </div>
      <div className={styles.containerright}>
        <div style={{position: 'absolute', top: 200, left: 0}}>
          <Image src={imgDots}/>
        </div>
        <div style={{position: 'absolute', top: 60, left: -25}}>
          <Image src={imgMain}/>
        </div>
        <div className={styles.description}>
          <div className={styles.headline}/>
          <div>
            <div className={styles.subtitle}>{subtitle}</div>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
