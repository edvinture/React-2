import React, {Component} from 'react';
import gotService from '../../services/gotService';
import itemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <itemDetails
            itemId= {this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </itemDetails>
        )
    }
}