/*
 *
 * Custom Home Page
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.scss';
import TGHeader from '../TGHeader';
//import * as events from './events';
//import * as news from './news';
//import * as projects from './projects';
import events from './events';
import news from './news';
import projects from './projects';
import {TGContentTypeList} from "../TGContentTypeList/index";


const lastUpdatedProjectsData = {
  headers: [
    {
      "label": "Title",
      "description": "",
      "type": "string",
      "disabled": false,
      "name": "Title",
      "sortable": false,
      "searchable": false
    },
    {
      "label": "Project Status",
      "description": "",
      "type": "string",
      "disabled": false,
      "name": "projectstatus",
      "sortable": false,
      "searchable": false
    },
    {
      "label": "Last Modified",
      "description": "",
      "type": "string",
      "disabled": false,
      "name": "updatedAt",
      "sortable": false,
      "searchable": false
    },
  ],
  records: projects,
  redirectUrl: "?redirectUrl=/plugins/content-manager/project"
};
const latestNewsData = {
  headers: [
    {
      "label": "",
      "description": "",
      "type": "string",
      "disabled": false,
      "name": "title",
      "sortable": false,
      "searchable": false
    }
  ],
  records: [
    {title: 'Project Status'},
    {title: 'Project Features'},
    {title: 'Project Type'},
    {title: 'Project Issues and Issue Categories'},
    {title: 'Project Partners'},
    {title: 'Project Documents'},
    {title: 'Tags'},
  ],
  redirectUrl: "?redirectUrl=/plugins/content-manager/projectstatus"
};

export class TGPageProjects extends React.PureComponent {
  renderLastUpdatedProjects() {
    return (
      <div>
        <div><b>Last Updated Projects</b></div>
        <TGContentTypeList headers={lastUpdatedProjectsData.headers}
                           records={lastUpdatedProjectsData.records}
                           redirectUrl={lastUpdatedProjectsData.redirectUrl}/>
      </div>
    );
  }
  renderLatestNewsItems() {
    return (
      <div>
        <div><b>Global Components Related to Projects</b></div>
        <TGContentTypeList headers={latestNewsData.headers}
                           records={latestNewsData.records}
                           redirectUrl={latestNewsData.redirectUrl}/>
      </div>);
  }
  render() {
    return (
      <div className={['container-fluid', styles.tgHome, styles.containerFluid].join(' ')}>
        <Helmet title="Home | LADOT CMS"/>

        <div className="container">
          <div className="row">
            <div className="col-8">
              {this.renderLastUpdatedProjects()}
            </div>
            <div className="col-4">
              {this.renderLatestNewsItems()}
            </div>
          </div>
        </div>

        <a href="#">&#8811; Download CMS User Manual</a>
      </div>
    );
  }
}