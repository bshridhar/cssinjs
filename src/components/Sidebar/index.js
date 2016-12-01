import React from 'react'

import Logo from '../Logo'
import GithubWidget from '../GithubWidget'
import MenuToggleWidget from '../MenuToggleWidget'
import Menu from '../Menu'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

class Sidebar extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      isActiveMenu: false
    }
  }

  // Just a trick. On menu click component recieve new props
  // If there is any new prop - just close menu (because props change only if we navigate through application)
  componentWillReceiveProps() {
    this.setState({
      isActiveMenu: false
    })
  }

  render() {
    const {classes} = this.props.sheet
    const toggleMenu = () => {
      this.setState({
        isActiveMenu: !this.state.isActiveMenu
      })
    }

    return (
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo type="white" />
        </div>
        <div className={classes.counter}>
          { /* TODO: Move REPO param in separated config */ }
          <GithubWidget repo="cssinjs/jss" />
        </div>
        <div className={classes.toggle} onClick={toggleMenu}>
          <MenuToggleWidget active={this.state.isActiveMenu} />
        </div>
        <div className={ this.state.isActiveMenu ? classes.menuActive :classes.menu}>
          <Menu />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(Sidebar)


//--------------------------------------------------------------
// const Sidebar = ({sheet}) => {
//   const {classes} = sheet

//   const toggleMenu = () => {
//     this.setState({
//       isActiveMenu: !this.state.isActiveMenu
//     })
//   }

//   return (
//     <div className={classes.container}>
//       <div className={classes.logo}>
//         <Logo type="white" />
//       </div>
//       <div className={classes.counter}>
//         <GithubWidget repo="cssinjs/jss" />
//       </div>
//       <div className={classes.toggle}>
//         <MenuToggleWidget onClick={toggleMenu} active={this.state.isActiveMenu} />
//       </div>
//       <div className={classes.menu}>
//         <Menu />
//       </div>
//     </div>
//   )
// }

// Sidebar.propTypes = {
//   sheet: React.PropTypes.object
// }

// export default jssPreset(styles)(Sidebar)
