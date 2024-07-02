/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode } from 'react';
import React from 'react';
export type ShowFlashMessage = (message?: React.ReactNode, duration?: number) => void;
export declare const FlashMessageContext: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useFlashMessageContext: () => ShowFlashMessage;
