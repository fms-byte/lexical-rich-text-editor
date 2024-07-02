import React, { ReactNode } from 'react';

interface LexicalEditorProps {
    initialHtml?: string;
}
declare const LexicalEditorComponent: React.FC<LexicalEditorProps>;

interface HtmlContextProps {
    htmlString: string;
    setHtmlString: (html: string) => void;
}
declare const useHtmlContext: () => HtmlContextProps;
declare const HtmlProvider: React.FC<{
    children: ReactNode;
}>;

export { HtmlProvider, LexicalEditorComponent, useHtmlContext };
