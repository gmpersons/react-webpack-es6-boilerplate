import Application from '../../src/components/Application';

describe('Application', () => {
  it('renders a div', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Application />);

    const component = shallowRenderer.getRenderOutput();
    expect(component.type).to.equal('div');
  });
});
