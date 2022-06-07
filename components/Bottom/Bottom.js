import Image from 'next/image'

import styles from './Bottom.module.css'

const toChunks = (inputArray, perChunk = 3) => {
  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, []);
}

const Socials = ({links}) => {
  const socialRows = toChunks(links, 3);

  return (
    <div>
    {socialRows.map((row, rankRow)=>
      <div
        key={`social-links-${rankRow}`}
        className={styles.socials}
      >
        {
          row.map((social, rankSocial) =>
              <div className={styles.social} key={`social-link-${rankSocial}`}>
                <Image src={social.icon} />
              </div>
          )
        }
      </div>
    )}
    </div>
  );
}

const Menu = ({links}) => {
  const menuColumns = toChunks(links, 3);

  return (
    <div className={styles.menu}>
      {menuColumns.map((column, rankColumn)=>
        <div
          key={`menu-links-${rankColumn}`}
          className={styles.column}
        >
          {
            column.map((item, rankItem) =>
              <div className={styles.item} key={`menu-link-${rankItem}`}>
                {item.title}
              </div>
            )
          }
        </div>
      )}
    </div>
  );
}

export default function Bottom({socials, menu}) {
  return (
    <div className={styles.bottom}>
      <Socials links={socials} />
      <Menu links={menu} />
    </div>
  );
}
