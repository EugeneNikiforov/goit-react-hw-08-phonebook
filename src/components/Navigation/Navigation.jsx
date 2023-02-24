import React from 'react'
import css from './Navigation.module.scss';


const Navigation = () => {
    return (
        <div className={css.header}>
            <p className={css.wellcomeInfo}>Wow, it's good to see you! 
            To start work, please, make a registration.</p>
        </div>
    )
}

export default Navigation;