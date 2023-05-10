import React from 'react';
import styles from './FormBanner.module.sass';

export default function FormBanner() {
    return (
        <div className={styles.banner}>
            <img
                className={styles.bannerLogo}
                src={process.env.PUBLIC_URL + 'img/VK_logo.png'}
                alt="Лого ВК"
            />
        </div>
    );
}
