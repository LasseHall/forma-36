import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import { Asset } from './Asset';

it('renders the component', () => {
  const output = shallow(
    <Asset src="https://placekitten.com/200/300" title="Image of a cat" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Asset
      src="https://placekitten.com/200/300"
      title="Image of a cat"
      className="extra-class-name"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with type pdf', () => {
  const output = shallow(
    <Asset
      src="https://placekitten.com/200/300"
      title="Image of a cat"
      className="extra-class-name"
      type="pdf"
    />,
  );

  expect(output).toMatchSnapshot();
});

describe('with type=image', () => {
  it('renders the component as a preview', () => {
    const output = shallow(
      <Asset
        src="https://placekitten.com/200/300"
        title="Image of a cat"
        className="extra-class-name"
        type="image"
      />,
    );

    expect(output.find('img')).toHaveLength(1);
  });

  it('renders the component as a standard asset with status=archived', () => {
    const output = shallow(
      <Asset
        src="https://placekitten.com/200/300"
        title="Image of a cat"
        className="extra-class-name"
        type="image"
        status="archived"
      />,
    );

    expect(output.find('img')).toHaveLength(0);
  });
});

it('has no a11y issues', async () => {
  const output = mount(
    <Asset src="http://placekitten.com/200/300" title="picture of a cat" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
