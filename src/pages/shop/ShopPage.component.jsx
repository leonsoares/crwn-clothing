import React from 'react'
import './shopPage.styles.scss'
import CollectionsOverview from '../../components/collections-overview/Collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection.component'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CollectionPreview from '../../components/collection-preview/Collection-preview.component'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    componentDidMount() {
        const { fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)