import { Menu } from '../Menu';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>zielvna</h1>
            <Menu />
        </div>
    );
};
