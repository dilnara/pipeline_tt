import Image from 'next/image'
import imgArrow from '../../public/arrow-right/arrow-right.png'

import {MARKERS} from '../../constants';

import styles from './Markers.module.css'

const buttonStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
};

const badgeStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginRight: 15,
};

const markerToColor = (marker) => {
  if (marker === MARKERS.ORFA) return '#0067BB';
  if (marker === MARKERS.AUTO) return '#78E6D0';
  if (marker === MARKERS.ONCO) return '#FA6469';
  if (marker === MARKERS.OTHER) return '#402985';
}

export default function Markers(props) {
  return (
    <div className={styles.markers}>
      {props.markers.map((marker, rank)=>(
        <div key={`marker-${rank}`} className={styles.marker}>
          <div style={{...badgeStyle, backgroundColor: markerToColor(marker.marker)}} />
          <div>{marker.title}</div>
          {marker.marker !== MARKERS.OTHER &&
          <div style={{...buttonStyle, backgroundColor: markerToColor(marker.marker)}}>
            <Image src={imgArrow} />
          </div>
          }
        </div>
      ))}
    </div>
  );
}
