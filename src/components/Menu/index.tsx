import classNames from 'classnames';
import { useState } from 'react';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { Link } from '../Link';
import styles from './Menu.module.scss';

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: 'About me', to: '#about-me' },
        { name: 'Experience', to: '#experience' },
        { name: 'Skills', to: '#skills' },
        { name: 'Projects', to: '#projects' },
        { name: 'Contact', to: '#contact' },
    ];

    const menuLinks = (
        <>
            {links.map(({ name, to }) => (
                <div key={name} className={styles.link} onClick={() => setIsMenuOpen(false)}>
                    <Link to={to}>{name}</Link>
                </div>
            ))}
            <Link to="https://drive.google.com/file/d/1huQ561ZbkP2KMQtcB2hXg5PLGG2ACrjF/view?usp=sharing" scheme="big">
                Resume
            </Link>
        </>
    );

    return (
        <div className={styles.container}>
            <div className={styles.desktop}>{menuLinks}</div>
            <div className={styles.mobile}>
                <RiMenuFill className={styles.icon} onClick={() => setIsMenuOpen(true)} />
                <div className={classNames(styles.overlay, { [styles.overlayOpen]: isMenuOpen })}>
                    <div className={styles.overlayHeader}>
                        <RiCloseFill className={styles.icon} onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <div className={styles.overlayBody}>{menuLinks}</div>
                </div>
            </div>
        </div>
    );
};
