import * as React from "react";
import { createElement as h, forwardRef } from "react";

import { Grid, Box } from "@material-ui/core";

import { IManagedLayout } from "../../model/IManaged";

type nums = keyof {
    1: never;
    2: never;
    3: never;
    4: never;
    5: never;
    6: never;
    7: never;
    8: never;
    9: never;
    10: never;
};

type align = keyof {
  "flex-start": never,
};

const n = (v: string)=> Number(v) as nums;
const FULL_ROW = "12";

const gridProps = (
  isItem: boolean,
  columns: string,
  phoneColumns: string,
  tabletColumns: string,
  desktopColumns: string,
) => {
  if (isItem) {
    return {
      item: true,
      xs: n(phoneColumns || columns || FULL_ROW),
      sm: n(phoneColumns || columns || FULL_ROW),
      md: n(tabletColumns || columns || FULL_ROW),
      lg: n(tabletColumns || desktopColumns || columns || FULL_ROW),
      xl: n(desktopColumns || columns || FULL_ROW),
    };
  } else {
    return {
      container: true,
      spacing: 3 as nums,
      alignItems: "flex-start" as align,
    };
  }
};

const renderItem = (
  isItem: boolean,
  children: React.ReactChild,
  mr: number,
  mb: number
): React.ReactChild => {
  if (isItem) {
    return h(Box, { mr, mb }, children);
  } else {
    return children;
  }
};

export interface IGroupProps extends IManagedLayout {
    style?: React.CSSProperties;
    className?: string;
}

interface IGroupPrivate {
    children: React.ReactChild;
    isItem?: boolean;
    onFocus?: () => void;
}

export const Group = (
  {
    className = "",
    columns = "",
    phoneColumns = "",
    tabletColumns = "",
    desktopColumns = "",
    children,
    isItem = false,
    style,
    fieldRightMargin = 1,
    fieldBottomMargin = 2,
    onFocus,
  }: IGroupProps & IGroupPrivate,
  ref: React.Ref<HTMLDivElement>
) => (
  <Grid
    ref={ref}
    onFocus={onFocus}
    {...gridProps(isItem, columns, phoneColumns, tabletColumns, desktopColumns)}    
    className={className}
    style={style}
  >
    {renderItem(isItem, children, fieldRightMargin, fieldBottomMargin)}
  </Grid>
);

export default forwardRef(Group);