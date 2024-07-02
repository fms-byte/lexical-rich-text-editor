"use client";
import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { FlashMessageContext } from "./editor/context/FlashMessageContext";
import PlaygroundNodes from "./editor/nodes/PlaygroundNodes";
import PlaygroundEditorTheme from "./editor/themes/PlaygroundEditorTheme";
import { SharedHistoryContext } from "./editor/context/SharedHistoryContext";
import { TableContext } from "./editor/plugins/TablePlugin";
import { SharedAutocompleteContext } from "./editor/context/SharedAutocompleteContext";
import Editor from "./editor";
import { $generateNodesFromDOM } from "@lexical/html";
import LexicalEditor, { $getRoot } from "lexical";
import { CAN_USE_DOM } from "./editor/shared/canUseDOM";
import { HtmlProvider } from "../htmlContext";

interface LexicalEditorProps {
  initialHtml?: string;
}

const LexicalEditorComponent: React.FC<LexicalEditorProps> = ({
  initialHtml,
}) => {
  const initialConfig = {
    namespace: "Lexical Rich editor",
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    editorState: (editor: LexicalEditor.LexicalEditor) => {
      if (initialHtml && CAN_USE_DOM) {
        editor.update(() => {
          const parser = new DOMParser();
          const dom = parser.parseFromString(initialHtml, "text/html");
          const nodes = $generateNodesFromDOM(editor, dom);
          const root = $getRoot();
          root.clear();
          root.append(...nodes);
        });
      }
      return editor;
    },
  };

  return (
    <HtmlProvider>
      <FlashMessageContext>
        <LexicalComposer initialConfig={initialConfig}>
          <SharedHistoryContext>
            <TableContext>
              <SharedAutocompleteContext>
                <Editor />
              </SharedAutocompleteContext>
            </TableContext>
          </SharedHistoryContext>
        </LexicalComposer>
      </FlashMessageContext>
    </HtmlProvider>
  );
};

export default LexicalEditorComponent;
