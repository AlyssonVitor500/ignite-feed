import styles from './Avatar.module.css';

import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    noBorder?: boolean;
}

export function Avatar({ noBorder = false, ...props }: AvatarProps) {
    return (
        <img 
            {...props}
            className={noBorder ? styles.avatarWithoutBorder : styles.avatarWithBorder}
        />
    );
}