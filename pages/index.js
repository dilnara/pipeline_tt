import TopBar from '../components/TopBar/TopBar'
import Bottom from '../components/Bottom/Bottom'
import Copyright from '../components/Copyright/Copyright'
import Table from '../components/Table/Table'
import Filters from '../components/Filters/Filters'
import Markers from '../components/Markers/Markers'
import Design from '../components/Design'

import Data from './data';

import styles from '../styles/Pipeline.module.css'

export default function Pipeline() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <TopBar menu={Data.topMenuItems} />
        <Design
          title={'Препараты\nв разработке'}
          subtitle={'Обратите внимание:'}
          description={'данные обновляются ежеквартально.'}
        />
        <Filters filters={Data.filters} />
        <Markers markers={Data.markers} />
        <Table headers={Data.tableHeaders} titles={Data.tableTitles} data={Data.tableData} />
      </div>
      <div style={{width: '100%', height: 1, backgroundColor: '#F4F4F4', marginTop: 120}} />
      <div className={styles.content}>
        <Bottom socials={Data.linksSocials} menu={Data.bottomMenuItems} />
        <Copyright />
      </div>
    </div>
  );
}
