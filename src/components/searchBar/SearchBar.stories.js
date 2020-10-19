import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Light = () => <SearchBar variant="light"/>
export const Dark = () => <SearchBar variant="dark"/>
