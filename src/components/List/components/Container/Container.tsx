import * as React from "react";
import { makeStyles } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";

import classNames from "../../../../utils/classNames";

import AutoSizer from "../../../common/AutoSizer";

import IListProps, { IListState, IListCallbacks, IRowData } from '../../../../model/IListProps';
import IAnything from '../../../../model/IAnything';

import Actions from "./Actions";
import Filters from "./Filters";

const AUTOSIZER_DELAY = 50;

interface ISize {
  height: number;
  width: number;
}

interface IContainerProps<FilterData = IAnything, RowData extends IRowData = IAnything> extends 
  IListProps<FilterData, RowData>, 
  IListState<FilterData, RowData>,
  IListCallbacks<FilterData, RowData> {
  className?: string;
  style?: React.CSSProperties;
  children: (s: ISize) => any;
}

const useStyles = makeStyles({
  root: {},
  container: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    flexDirection: "column",
    "&&& .MuiDataGrid-root": {
      border: "1px solid transparent",
    },
  },
  stretch: {
    flex: 1,
  },
  noElevation: {
    background: "transparent",
    boxShadow: "none",
  },
});

export const Container = <
  FilterData extends IAnything = IAnything,
  RowData extends IRowData = IAnything,
>({
  className,
  style,
  filters = [],
  actions = [],
  heightRequest = (v) => v,
  widthRequest = (v) => v,
  title = "list-component",
  filterData,
  handleFilter,
  handleDefault,
  initComplete,
  children,
  isMobile,
}: IContainerProps<FilterData, RowData>) => {
  const classes = useStyles();

  return (
    <AutoSizer
      className={classNames(classes.root, className)}
      heightRequest={heightRequest}
      widthRequest={widthRequest}
      delay={AUTOSIZER_DELAY}
      style={style}
    >
      {({ height, width }) => (
        <div style={{ height, width }} className={classes.container}>
          {Array.isArray(actions) && !!actions.length && (
            <Actions<FilterData> filterData={filterData!} actions={actions} />
          )}
          <Paper className={classNames(classes.container, classes.stretch, {
            [classes.noElevation]: isMobile,
          })}>
            {Array.isArray(filters) && !!filters.length && (
              <Filters<FilterData>
                filterData={filterData!}
                change={handleFilter}
                clean={handleDefault}
                filters={filters}
                title={title}
              />
            )}
            <div className={classNames(classes.container, classes.stretch)}>
              {!!initComplete && (
                <AutoSizer>
                  {children}
                </AutoSizer>
              )}
            </div>
          </Paper>
        </div>
      )}
    </AutoSizer>
  )
};

export default Container;
