/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import './ColorPicker.css';
interface ColorPickerProps {
    color: string;
    onChange?: (value: string, skipHistoryStack: boolean) => void;
}
export default function ColorPicker({ color, onChange, }: Readonly<ColorPickerProps>): JSX.Element;
export interface Position {
    x: number;
    y: number;
}
export declare function toHex(value: string): string;
export {};
