/*
 *
 * Custom Home Page
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.scss';
import {TGContentTypeList} from "../TGContentTypeList/index";
import * as tgHelpers from "../../utils/tgHelpers";
import {Link} from 'react-router-dom';


export class TGPageHome extends React.PureComponent {
  componentDidMount() {
    tgHelpers.loadEndpointByFilters("events").then(results => {
      this.setState({
        latestEvents: {
          ...this.state.latestEvents,
          records: results.map(result => {
            let createdAt = new Date(result.createdAt);
            let createdAtMonth = createdAt.getMonth() + 1;
            let createdAtDate = createdAt.getDate();
            let createdAtYear = createdAt.getFullYear() - 2000;
            return {
              id: result.id,
              _id: result._id,
              createdAt: `${createdAtMonth}/${createdAtDate}/${createdAtYear}`,
              Title: result.Title
            };
          })
        }
      });
    });
    tgHelpers.loadEndpointByFilters("news").then(results => {
      this.setState({
        latestNews: {
          ...this.state.latestNews,
          records: results.map(result => {
            let createdAt = new Date(result.createdAt);
            let createdAtMonth = createdAt.getMonth() + 1;
            let createdAtDate = createdAt.getDate();
            let createdAtYear = createdAt.getFullYear() - 2000;
            return {
              id: result.id,
              _id: result._id,
              createdAt: `${createdAtMonth}/${createdAtDate}/${createdAtYear}`,
              Title: result.Title
            };
          })
        }
      });
    });
    tgHelpers.loadEndpointByFilters("projects").then(results => {
      this.setState({
        lastUpdatedProjects: {
          ...this.state.lastUpdatedProjects,
          records: results.map(result => {
            let updatedAt = new Date(result.updatedAt);
            let updatedAtMonth = updatedAt.getMonth() + 1;
            let updatedAtDate = updatedAt.getDate();
            let updatedAtYear = updatedAt.getFullYear() - 2000;
            return {
              id: result.id,
              _id: result._id,
              ProjectStatus: result.projectstatus ? result.projectstatus.Title : '',
              Title: result.Title,
              updatedAt: `${updatedAtMonth}/${updatedAtDate}/${updatedAtYear}`
            };
          })
        }
      });
    });
  }

  state = {
    latestEvents: {
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
          "label": "Posted",
          "description": "",
          "type": "string",
          "disabled": false,
          "name": "createdAt",
          "sortable": false,
          "searchable": false
        },
      ],
      records: [],
      redirectUrl: "?redirectUrl=/plugins/content-manager/event?_limit=10&_page=1&_sort=_id&source=content-manager",
      routeParams: {"slug": "event"}
    },
    latestNews: {
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
          "label": "Posted",
          "description": "",
          "type": "string",
          "disabled": false,
          "name": "createdAt",
          "sortable": false,
          "searchable": false
        },
      ],
      records: [],
      redirectUrl: "?redirectUrl=/plugins/content-manager/news?_limit=10&_page=1&_sort=_id&source=content-manager",
      routeParams: {"slug": "news"}
    },
    lastUpdatedProjects: {
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
          "name": "ProjectStatus",
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
      records: [],
      redirectUrl: "?redirectUrl=/plugins/content-manager/project?_limit=10&_page=1&_sort=_id&source=content-manager",
      routeParams: {"slug": "project"}
    },
  };


  renderLatestEvents() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div>
          <b>Latest Events</b>
          <Link className={styles.tgButton} to="/plugins/content-manager/event/create?redirectUrl=/plugins/content-manager/event?_limit=10&_page=1&_sort=_id&source=content-manager">+ Add Event</Link>
        </div>
        <TGContentTypeList headers={this.state.latestEvents.headers}
                           records={this.state.latestEvents.records}
                           redirectUrl={this.state.latestEvents.redirectUrl}
                           routeParams={this.state.latestEvents.routeParams}/>
        <Link to="/plugins/content-manager/event?source=content-manager">SEE ALL EVENTS</Link>
      </div>);
  }
  renderLatestNewsItems() {
    return (
      <div>
        <div>
          <b>Latest News Items</b>
          <Link className={styles.tgButton} to="/plugins/content-manager/news/create?redirectUrl=/plugins/content-manager/news?_limit=10&_page=1&_sort=_id&source=content-manager">+ Add News Item</Link>
        </div>
        <TGContentTypeList headers={this.state.latestNews.headers}
                           records={this.state.latestNews.records}
                           redirectUrl={this.state.latestNews.redirectUrl}
                           routeParams={this.state.latestNews.routeParams}/>
        <Link to="/plugins/content-manager/news?source=content-manager">SEE ALL NEWS ITEMS</Link>
      </div>);
  }
  renderLastUpdatedProjects() {
    return (
      <div>
        <div>
          <b>Last Updated Projects</b>
          <Link className={styles.tgButton} to="/plugins/content-manager/project/create?redirectUrl=/plugins/content-manager/project?_limit=10&_page=1&_sort=_id&source=content-manager">+ Add New Project</Link>
        </div>
        <TGContentTypeList headers={this.state.lastUpdatedProjects.headers}
                           records={this.state.lastUpdatedProjects.records}
                           redirectUrl={this.state.lastUpdatedProjects.redirectUrl}
                           routeParams={this.state.lastUpdatedProjects.routeParams}/>
        <Link to="/plugins/content-manager/project?source=content-manager">SEE ALL PROJECTS</Link>
      </div>);
  }
  render() {
    return (
      <div className={['container-fluid', styles.tgHome, styles.containerFluid].join(' ')}>
        <Helmet title="Home | LADOT CMS"/>

        <div className="row">
          <div className="col-8">
            {this.renderLastUpdatedProjects()}
          </div>
          <div className="col-4">
            {this.renderLatestNewsItems()}
            {this.renderLatestEvents()}
          </div>
        </div>

        <a href="#">&#8811; Download CMS User Manual</a>
      </div>
    );
  }
}