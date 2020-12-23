import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>)
};

export default withRouter(CollectionPreview);