import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

function DefaultStory() {
  const [selected, setSelected] = useState('first');

  return (
    <div>
      <Tabs className={text('className', '')}>
        <Tab
          id="first"
          isSelected={selected === 'first'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          First
        </Tab>
        <Tab
          id="second"
          isSelected={selected === 'second'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Second
        </Tab>
        <Tab
          id="third"
          isSelected={selected === 'third'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Third
        </Tab>
      </Tabs>
      {selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
      {selected === 'third' && (
        <TabPanel id="third">content third tab</TabPanel>
      )}
    </div>
  );
}

function AsNavigationStory() {
  const [selected, setSelected] = useState('first');
  return (
    <Tabs role="navigation" className={text('className', '')}>
      <Tab
        id="first"
        href="https://contentful.com"
        isSelected={selected === 'first'}
        onSelect={(id: string) => {
          action('onSelect')(id);
          setSelected(id);
        }}
      >
        First
      </Tab>
      <Tab
        id="second"
        href="https://contentful.com"
        isSelected={selected === 'second'}
        onSelect={(id: string) => {
          action('onSelect')(id);
          setSelected(id);
        }}
      >
        Second
      </Tab>
      <Tab
        id="third"
        href="https://contentful.com"
        isSelected={selected === 'third'}
        onSelect={(id: string) => {
          action('onSelect')(id);
          setSelected(id);
        }}
      >
        Third
      </Tab>
    </Tabs>
  );
}

storiesOf('Components|Tabs', module)
  .addParameters({
    propTypes: [
      Tab['__docgenInfo'],
      Tabs['__docgenInfo'],
      TabPanel['__docgenInfo'],
    ],
  })
  .add('default', () => <DefaultStory />)
  .add('as navigation', () => <AsNavigationStory />);
