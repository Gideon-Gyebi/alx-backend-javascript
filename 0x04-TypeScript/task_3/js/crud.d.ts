// Task 8 Ambient Namespaces
import {RowElement,RowID } from './interface';


declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
