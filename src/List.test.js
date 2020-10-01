import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    it('renders without crashing', () => {
        const section = document.createElement('section');
        ReactDOM.render(
        <List cards = {[]}/>, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})


it('renders without crashing', () => {
    const tree = renderer
        .create(<List cards={[]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});