import React, { Fragment, useState } from 'react'

import { Container, CssBaseline, makeStyles } from '@material-ui/core';

import { One, FieldType, IField, ModalProvider } from 'react-view-builder';

import Router from './Router';

const fields: IField[] = [
  {
    type: FieldType.Combo,
    name: 'route',
    itemList: [
      'layout-page',
      'validation-page',
      'gallery-page',
      'sample-page',
      'login-page',
      'hero-page',
      'list-page',
    ],
    outlined: false,
    columns: '4',
    tr(item) {
      if (item === 'layout-page') {
        return 'Layout grid';
      } else if (item === 'validation-page') {
        return 'Form validation';
      } else if (item === 'gallery-page') {
        return 'Gallery of controls';
      } else if (item === 'sample-page') {
        return 'Example page';
      } else if (item === 'login-page') {
        return 'Autocomplete page';
      } else if (item === 'hero-page') {
        return 'Hero page';
      } else if (item === 'list-page') {
        return 'List page';
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
  },
});

const App = () => {
  const [route, setRoute] = useState('');
  const classes = useStyles();
  return (
    <ModalProvider>
      <Fragment>
        <CssBaseline/>
        <div className={classes.offset}>
          <One fields={fields} change={({route}) => setRoute(route)} />
        </div>
        <Container className={classes.offset}>
          <Router route={route} />
        </Container>
      </Fragment>
    </ModalProvider>
  );
};

export default App;
