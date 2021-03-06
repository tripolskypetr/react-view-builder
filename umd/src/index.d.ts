
/// <reference path="./react-view-builder.d.ts"/>

import {
    One as OneDefault,
    OneTyped as OneTypedDefault,
    FieldType as FieldTypeDefault,
    IField as  IFieldDefault,
    TypedField as TypedFieldDefault
} from 'react-view-builder';

declare global {

    export namespace viewBuilder {
        
        export const One = OneDefault;
        export const OneTyped = OneTypedDefault;
        export const FieldType = FieldTypeDefault;

        export type IField = IFieldDefault;
        export type TypedField = TypedFieldDefault;

    } // namespace viewBuilder

} // declare global
