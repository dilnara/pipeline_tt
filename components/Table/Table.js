import React, {useState, useEffect} from 'react';

import {MARKERS} from '../../constants';

import styles from './Table.module.css'

const graphTdStyle = {width: 100};
const textTdStyle = {padding: 8};
const markerTdStyle = {padding: 8, width: 20};
const markerStyle = {width: 4, height: 20};
const pointStyle = {left: 49, borderRadius: 10, width: 6, height: 6, backgroundColor: '#0C204D', position: 'relative'};
const graphStyle = {height: 1, backgroundColor: '#0C204D', position: 'absolute'};

const markerToColor = (marker) => {
  if (marker === MARKERS.ORFA) return '#0067BB';
  if (marker === MARKERS.AUTO) return '#78E6D0';
  if (marker === MARKERS.ONCO) return '#FA6469';
  if (marker === MARKERS.OTHER) return '#402985';
}

const phaseToGraph = (phase, rank) => {
  const tbl = document.getElementById('table-pipeline');
  const tblRows = tbl ? tbl.rows : [];
  let top = 0;
  const graphRawIdx = rank + 2; //skip two headers rows

  for (let i = 0; i <= graphRawIdx; ++i) {
    if (i < graphRawIdx) top += tblRows[i].offsetHeight;
    if (i === graphRawIdx) top += Math.floor(tblRows[i].offsetHeight/2.0);
  }

  const width = 50 + phase*100 + 1;
  const right = 500 - width + 5;
  return <div key={`graph-${rank}`} style={{ width, right, top, ...graphStyle}}/>
}

const phaseToPoint = (phase1, phase2) => {
  if (phase1 === phase2) {
    return <div style={pointStyle}/>
  }
  return null;
}

export default function Table({headers, titles, data}) {
  const [tableReady, setTableReady] = useState(false);

  useEffect(()=>{
    //rerender graphs with table info
    setTableReady(true);
  }, []);

  return (
    <div className={styles.container}>
    <table className={styles.table} id="table-pipeline">
      <tbody>
        <tr>
          <td colSpan={4}>{titles[0]}</td>
          <td colSpan={5}>{titles[1]}</td>
        </tr>
        <tr>
          {headers.map((title, rank) =>
            <th key={`table-th-${rank}`} colSpan={rank === 0 ? 2 : 1}>
              {title}
            </th>
          )}
        </tr>
        {
          data.map((row, rank) =>
          (
            <tr key={`table-row-${rank}`}>
              <td style={markerTdStyle}>
                <div style={{...markerStyle, backgroundColor: markerToColor(row.marker)}}/>
              </td>
              <td style={textTdStyle}>{row.title}</td>
              <td style={textTdStyle}>{row.description}</td>
              <td style={textTdStyle}>{row.pro}</td>
              <td style={graphTdStyle}>{phaseToPoint(0, row.phase)}</td>
              <td style={graphTdStyle}>{phaseToPoint(1, row.phase)}</td>
              <td style={graphTdStyle}>{phaseToPoint(2, row.phase)}</td>
              <td style={graphTdStyle}>{phaseToPoint(3, row.phase)}</td>
              <td style={graphTdStyle}>{phaseToPoint(4, row.phase)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
    {tableReady && data.map((row, rank) => phaseToGraph(row.phase, rank))}
    </div>
  );
}
