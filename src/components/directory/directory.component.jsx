import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector'
import { createStructuredSelector} from 'reselect'

import './directory.styles.scss';

const Directory = ({sections}) => (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        // use ...otherSectionProps to destructure the props
        //it is the same of doing line bellow \/
        // this.state.sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div> 
)

const mapStateToProps = createStructuredSelector( {
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
