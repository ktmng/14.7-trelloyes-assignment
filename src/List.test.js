import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import store from './store';

describe('List component', () => {
    it('renders without crashing', () => {
	    const div = document.createElement('div')
	    ReactDOM.render(<List />, div)
	    ReactDOM.unmountComponentAtNode(div)
    })

    it('renders UI as expected', () => {
	    const tree = renderer
		.create(<List cards={store.allCards} />)
		.toJSON()
	    expect(tree).toMatchSnapshot()
    })
});