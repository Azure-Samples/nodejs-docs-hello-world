import React from 'react';
import Table from "../../../../../plugins/content-manager/admin/src/components/Table/index";
//import Table from '../../../../../strapi-plugin-content-manager/admin/src/components/Table/index';
import baseData from "./baseData";
import {
  addAttr,
  addFilter,
  changeParams,
  deleteData,
  deleteSeveralData,
  getData,
  onChange,
  onClickRemove,
  onClickSelect,
  onClickSelectAll,
  onToggleDeleteAll,
  onToggleFilters,
  openFiltersWithSelections,
  removeAllFilters,
  removeAttr,
  removeFilter,
  resetDisplayedFields,
  setDisplayedFields,
  setParams,
  submit,
} from '../../../../../plugins/content-manager/admin/src/containers/ListPage/actions';
import {
  generateFiltersFromSearch,
  generateSearchFromFilters,
  generateSearchFromParams,
  generateRedirectURI,
} from '../../../../../plugins/content-manager/admin/src/containers/ListPage/utils';
import styles from './styles.scss';


export class TGContentTypeList extends React.Component {
  componentDidMount() {
  }

  handleChangeSort = sort => {
    const target = {
      name: 'params._sort',
      value: sort,
    };
    const {
      listPage: {filters, params},
    } = this.props;
    const _q = params._q !== '' ? `&_q=${params._q}` : '';
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?_page=${params._page}&_limit=${
        params._limit
        }&_sort=${sort}${_q}&source=${this.getSource()}${generateSearchFromFilters(filters)}`,
    });

    this.props.changeParams({target});
  };

  render() {
    //console.log(this.props);

    return (
      <div className={styles.tgContentTypeList}>
        <Table
          //deleteAllValue={this.areAllEntriesSelected()}
          //entriesToDelete={entriesToDelete}
          //enableBulkActions={this.showBulkActions()}
          //filters={filters}
          //handleDelete={this.toggleModalWarning}
          //headers={this.getTableHeaders()}
          //history={this.props.history}
          //onChangeSort={this.handleChangeSort}
          //onClickSelectAll={onClickSelectAll}
          //onClickSelect={onClickSelect}
          //onToggleDeleteAll={onToggleDeleteAll}
          //primaryKey={this.getModelPrimaryKey()}
          //records={get(records, this.getCurrentModelName(), [])}
          //redirectUrl={this.generateRedirectURI()}
          //route={this.props.match}
          //routeParams={this.props.match.params}
          //search={params._q}
          //showLoader={this.showLoaders()}
          //sort={params._sort}


          //deleteAllValue={this.areAllEntriesSelected()}
          //filters={filters}
          //headers={this.getTableHeaders()}
          //history={this.props.history}
          //onChangeSort={this.handleChangeSort}
          //onClickSelectAll={onClickSelectAll}
          //onClickSelect={onClickSelect}
          //onToggleDeleteAll={onToggleDeleteAll}
          //primaryKey={this.getModelPrimaryKey()}
          //records={get(records, this.getCurrentModelName(), [])}
          //redirectUrl={this.generateRedirectURI()}
          //route={this.props.match}
          //routeParams={this.props.match.params}
          //sort={params._sort}

          onChangeSort={this.handleChangeSort}
          onClickSelectAll={onClickSelectAll}
          onClickSelect={onClickSelect}
          onToggleDeleteAll={onToggleDeleteAll}

          deleteAllValue={baseData.deleteAllValue}
          filters={baseData.filters}
          history={baseData.history}
          primaryKey={baseData.primaryKey}
          route={baseData.route}
          sort={baseData.sort}

          headers={this.props.headers || baseData.headers}
          records={this.props.records || baseData.records}
          redirectUrl={this.props.redirectUrl || baseData.redirectUrl}
          routeParams={this.props.routeParams || baseData.routeParams}
        />
      </div>
    );
  }
}