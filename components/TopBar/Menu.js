import styles from './Menu.module.css'

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      {props.menu && props.menu.map(({name, onClick}, rank) =>
        <div key={`top-menu-item-${rank}`} className={styles.item} onClick={onClick}>
          {name}
        </div>
      )}
    </div>
  );
}
