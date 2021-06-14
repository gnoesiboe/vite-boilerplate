import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

describe('Homepage', () => {
    it('should match the snapshot', () => {
        const component = renderer.create(<HomePage />);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
