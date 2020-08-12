import React from 'react'
import classNames from 'classnames'

type MenuType = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  mode?: MenuType;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelect,
    children,
  } = props

  const classes = classNames('bee-menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
