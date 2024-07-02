import { LexicalCommand, LexicalEditor } from 'lexical';
import * as React from 'react';
import { ImagePayload } from '../../nodes/ImageNode';
export type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export declare function InsertImageUriDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): React.JSX.Element;
export declare function InsertImageUploadedDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): React.JSX.Element;
export declare function InsertImageDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export default function ImagesPlugin({ captionsEnabled, }: {
    captionsEnabled?: boolean;
}): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
