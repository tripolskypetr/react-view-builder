import React, { Fragment, useState } from 'react'

import { Container, CssBaseline, makeStyles } from '@material-ui/core';

import { One, FieldType, IField } from 'react-view-builder';

import Router from './Router';

const fields: IField[] = [
  {
    type: FieldType.Combo,
    name: 'route',
    itemList: [
      'layout-page',
    ],
    outlined: false,
    phoneColumns: '12',
    tabletColumns: '6',
    desktopColumns: '4',
    tr(item) {
      if (item === 'layout-page') {
        return 'Layout grid';
      } else {
        return '';
      }
    },
    defaultValue: 'layout-page',
  },
];

const useStyles = makeStyles({
  offset: {
    padding: '15px',
  }
});

const App = () => {
  const [route, setRoute] = useState('');
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline/>
      <Container className={classes.offset}>
        <One fields={fields} change={({route}) => setRoute(route)} />
        <Router route={route} />
      </Container>
    </Fragment>
  )
};

export default App;
