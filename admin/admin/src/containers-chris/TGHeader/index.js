/*
 *
 * Custom Header
 *
 */

import React from 'react';
import styles from './styles.scss';
import {Link, withRouter} from 'react-router-dom';

class TGHeader extends React.PureComponent {
  state = {
    leftMenuOpen: false,
    tabs: []
  };


  componentDidMount() {
    this.setTabs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(() => {
        this.setTabs();
      });
    }
  }


  leftMenuToggle_onClick = () => {
    this.setState({leftMenuOpen: !this.state.leftMenuOpen});
    this.props.leftMenuToggle_onClick ? this.props.leftMenuToggle_onClick() : null;
  };


  setTabs() {
    this.setState({
      tabs: [
        {
          className: styles.tgHeader__tabLogo,
          title: `LADOT Streets CMS`,
          url: `/`
        },
        {
          isCurrent: window.location.href.indexOf(`content-manager/project`) >= 0,
          //isCurrent: window.location.href.indexOf('/projects') >= 0,
          title: `Projects`,
          url: `/plugins/content-manager/project?source=content-manager`
          //url: '/projects'
        },
        {
          isCurrent: window.location.href.indexOf(`content-manager/program`) >= 0,
          title: `Programs`,
          url: `/plugins/content-manager/program?source=content-manager`
        },
        {
          isCurrent: window.location.href.indexOf(`content-manager/news`) >= 0,
          title: `News`,
          url: `/plugins/content-manager/news?source=content-manager`
        },
        {
          isCurrent: window.location.href.indexOf(`content-manager/event`) >= 0,
          title: `Events`,
          url: `/plugins/content-manager/event?source=content-manager`
        },
        {
          isCurrent: window.location.href.indexOf(`/misc-pages/`) >= 0,
          title: `Misc Pages`,
          url: `/misc-pages`
        }
      ]
    });
  }


  render() {
    const tabs_lis = this.state.tabs.map(tab => {
      const className = [styles.tgHeader__tab, tab.className, tab.isCurrent ? styles.tgHeader__tabIsOpen : ''].join(' ');

      return (
        <li className={styles.tgHeader__tabsListItem} key={tab.title}>
          <Link className={className} to={tab.url} onClick={this.tab_onClick}>{tab.title}</Link>
        </li>
      )
    });

    return (
      <div className={styles.tgHeader}>
        <div className={styles.tgHeader__tabsContainer}>
          <ol className={styles.tgHeader__tabsList}>
            {tabs_lis}
          </ol>
        </div>
        <div className={styles.tgHeader__leftMenuToggle} onClick={this.leftMenuToggle_onClick}>
          {this.state.leftMenuOpen ? 'Hide' : 'Show'} Menu
        </div>
      </div>
    );
  }
}
export default withRouter(props => <TGHeader {...props}/>);