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


const linkGroups = [
  {
    title: 'Home Page',
    links: [
      {name: 'mcarousel', simplified: 'Home Hero Carousel', title: 'mCarousels'},
      {name: 'mgetinvolved', simplified: 'Get Involved Card Copy', title: 'mGetInvolveds'},
      {name: 'carouselslide', simplified: 'Carousel Slides', title: 'Carouselslides'},
    ]
  },
  {
    title: 'Projects',
    links: [
      {name: 'contact', simplified: 'Project Contact', title: 'Contacts'},
      {name: 'council', simplified: 'Council District', title: 'Councils'},
      {name: 'mapdetailtab', simplified: 'Map Tabs', title: 'Mapdetailtabs'},
      {name: 'projectdocument', simplified: 'Project Documents', title: 'Projectdocuments'},
      {name: 'projectfeaturelocation', simplified: 'Project Feature Locations', title: 'Projectfeaturelocations'},
      {name: 'projectfeature', simplified: 'Project Features', title: 'Projectfeatures'},
      {name: 'projectissuecategory', simplified: 'Feedback Issue Categories', title: 'Projectissuecategories'},
      {name: 'projectissue', simplified: 'Feedback Issue Types', title: 'Projectissues'},
      {name: 'projectissuesubcategory', simplified: 'Project Issue Subcategories', title: 'Projectissuesubcategories'},
      {name: 'projectpartner', simplified: 'Project Partners', title: 'Projectpartners'},
      {name: 'project', title: 'Projects',},
      {name: 'projectstatus', simplified: 'Project Statuses', title: 'Projectstatuses'},
      {name: 'projecttype', simplified: 'Project Types', title: 'Projecttypes'},
      {name: 'mprojectdetail', simplified: 'Project Details', title: 'Mprojectdetails'},
      {name: 'mprojectlistmap', simplified: 'Project List Maps', title: 'Mprojectlistmaps'},
      {name: 'mproject', title: 'mProjects'},
      {name: 'mprojectscurrent', simplified: 'Current Projects Lists', title: 'Mprojectscurrents'},
    ]
  },
  {
    title: 'Programs',
    links: [
      {name: 'program', title: 'Programs'},
      {name: 'mprogrambanner', simplified: 'Program Banners', title: 'mProgrambanners'},
      {name: 'mprogrammapad', simplified: 'Program Map Ad', title: 'mProgrammapads'},
    ]
  },
  {
    title: 'Applications',
    links: [
      {name: 'programapplicationstep', simplified: 'Program Application Steps', title: 'Programapplicationsteps'},
    ]
  },
  {
    title: 'Landing Pages',
    links: [
      {name: 'pagecontentlanding', simplified: 'Content Landing Pages', title: 'Pagecontentlandings'},
      {name: 'pagecontent', simplified: 'Content Pages', title: 'Pagecontents'},
      {name: 'card', title: 'Cards'},
      {name: 'mintro', title: 'mIntros'},
      {name: 'mlistcards', title: 'mListcards'},
    ]
  },
  {
    title: 'News & Events',
    links: [
      {name: 'category', simplified: 'Event Categories', title: 'Categories'},
      {name: 'meventdetail', simplified: 'Event Details', title: 'MEventdetails'},
      {name: 'meventdetailintro', simplified: 'Event Introductions', title: 'Meventdetailintros'},
      {name: 'event', title: 'Events'},
      {name: 'mevents', simplified: 'Events Modules', title: 'Mevents'},
      {name: 'mlatestevent', simplified: 'Latest Events Modules', title: 'Mlatestevents'},
      {name: 'news', title: 'News'},
      {name: 'mnewsletter', simplified: 'Newsletter Sign Up Forms', title: 'mNewsletters'},
    ]
  },
  {
    title: 'Headers & Footers',
    links: [
      {name: 'mbrandbar', simplified: 'Main Logo', title: 'Mbrandbars'},
      {name: 'mlistnav', title: 'mListnavs'},
      {name: 'mheader', simplified: 'Main Nav Header', title: 'Mheaders'},
      {name: 'navigationlink', simplified: 'Main Nav Links', title: 'Navigationlinks'},
      {name: 'mfooter', simplified: 'Main Footer', title: 'Mfooters'},
    ]
  },
  {
    title: 'Users and Permissions',
    links: [
      {path: 'plugins/content-manager/user?source=users-permissions', title: 'Users'},
      {path: 'plugins/users-permissions/roles', title: 'Users Permissions'},
    ]
  },
  {
    title: 'Coupling Pages & Etc.',
    links: [
      {name: 'content', simplified: 'Content Detail Pages', title: 'Contents'},
      {name: 'coupling', title: 'Couplings'},
      {name: 'mbreadcrumb', simplified: 'mBreadcrumbs', title: 'Mbreadcrumbs'},
      {name: 'mlistfollow', simplified: 'Social Follow Link Lists', title: 'Mlistfollows'},
      {name: 'mlistshare', simplified: 'Social Share Link Lists', title: 'Mlistshares'},
      {name: 'mlistmedia', simplified: 'Media Galleries', title: 'Mlistmedias'},
      {name: 'mediaitem', simplified: 'Media Gallery Items', title: 'Mediaitems'},
      {name: 'mlisttag', simplified: 'Tag Lists', title: 'Mlisttags'},
      {name: 'mrichtext', simplified: 'Rich Text Modules', title: 'Mrichtexts'},
      {name: 'pagegetinvolved', simplified: 'Get Involved Pages', title: 'Pagegetinvolveds'},
      //{name: 'pagemeta', simplified: '', title: 'Pagemetas'},
    ]
  }
];

const linkGroupTags = linkGroups.map(linkGroup => {
  const linkGroupLinkTags = linkGroup.links.map(link => {
    const to = link.path || `/plugins/content-manager/${link.name}?source=content-manager`;

    return link.simplified ? (
      <div key={link.title}>
        <Link to={to}>{link.simplified}</Link> <i>{link.title}</i>
      </div>
    ) : (
      <div key={link.title}>
        <Link to={to}>{link.title}</Link>
      </div>
    );
  });

  return (
    <div key={linkGroup.title}>
      <br/>
      <b>{linkGroup.title}</b>
      {linkGroupLinkTags}
    </div>
  );
});

export class TGPageMiscPages extends React.PureComponent {
  componentDidMount() {
    tgHelpers.loadEndpointByFilters("pages").then(results => {
      this.setState({
        lastUpdatedPages: {
          ...this.state.lastUpdatedPages,
          records: results.map(result => {
            let updatedAt = new Date(result.updatedAt);
            let updatedAtMonth = updatedAt.getMonth() + 1;
            let updatedAtDate = updatedAt.getDate();
            let updatedAtYear = updatedAt.getFullYear() - 2000;
            return {
              id: result.id,
              _id: result._id,
              Description: result["Listing Description"],
              Title: result["Browser Title"],
              updatedAt: `${updatedAtMonth}/${updatedAtDate}/${updatedAtYear}`
            };
          })
        }
      });
    });
  }

  state = {
    lastUpdatedPages: {
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
          "label": "Description",
          "description": "",
          "type": "string",
          "disabled": false,
          "name": "Description",
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
      redirectUrl: "?redirectUrl=/plugins/content-manager/page?_limit=10&_page=1&_sort=_id&source=content-manager",
      routeParams: {"slug": "page"}
    },
  };

  renderLastUpdatedPages() {
    return (
      <div>
        <div>
          <b>Last Updated Pages</b>
          <Link className={styles.tgButton} to="/plugins/content-manager/page/create?redirectUrl=/plugins/content-manager/page?_limit=10&_page=1&_sort=_id&source=content-manager">+ Add New Page</Link>
        </div>
        <TGContentTypeList headers={this.state.lastUpdatedPages.headers}
                           records={this.state.lastUpdatedPages.records}
                           redirectUrl={this.state.lastUpdatedPages.redirectUrl}
                           routeParams={this.state.lastUpdatedPages.routeParams}/>
        <Link to="/plugins/content-manager/page?source=content-manager">SEE ALL PAGES</Link>
      </div>);
  }
  renderSidebar() {
    return (
      <div>
        <div>
          <b>Site Modules</b>
        </div>
        {linkGroupTags}
      </div>
    )
  }
  render() {
    return (
      <div className={['container-fluid', styles.tgHome, styles.containerFluid].join(' ')}>
        <Helmet title="Home | LADOT CMS"/>

        <div className="row">
          <div className="col-8">
            {this.renderLastUpdatedPages()}
          </div>
          <div className="col-4">
            {this.renderSidebar()}
          </div>
        </div>

        <a href="#">&#8811; Download CMS User Manual</a>
      </div>
    );
  }
}