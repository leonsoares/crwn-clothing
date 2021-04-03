import React from 'react'
import './shopPage.styles.scss'
import CollectionsOverview from '../../components/collections-overview/Collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/Collection.component'


import CollectionPreview from '../../components/collection-preview/Collection-preview.component'

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>       
)




export default ShopPage