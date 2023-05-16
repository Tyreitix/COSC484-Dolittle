import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

class Searchbar extends React.Component {
    


    state = {search: ''};
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.search);
    }

    fieldStyle = {
        width: '85%',
        margin: '0 auto',
        padding: '10px 0px',

    }

    _handleTextFieldChange = (e) => {
    this.setState({ search: e.target.value });
    };

    render() {
        
        return (
            <>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field' style={this.fieldStyle}>
                        <TextField onChange={this._handleTextFieldChange} value={this.state.search} style={{width:'100%'}} id="filled-basic" label="What kind of videos would you like to find?" variant="filled" />
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;