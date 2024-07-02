# Lexical Rich Text Editor

This module provides a reusable rich text editor component based on Lexical.

## Installation

Step 1: Install the package using npm
```bash
npm install lexical-rich-text-editor
```

Step 2: Import the component and context in your App component
```javascript
import { LexicalEditorComponent } from "lexical-rich-text-editor";
import { useHtmlContext } from "lexical-rich-text-editor/src/htmlContext";
```

Step 3: Import HtmlProvider in your Root Layout component and wrap the ```{children}``` with it.
```javascript
//./src/layout.tsx
import { HtmlProvider } from "lexical-rich-text-editor/src/htmlContext";
...
...
...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HtmlProvider>{children}</HtmlProvider>
      </body>
    </html>
  );
}
```

Step 4: Use the component in your project
```javascript
<LexicalEditorComponent initialHtml={initialHtml} />
```

Step 5: Use the context to get the html string
```javascript
const { htmlString } = useHtmlContext();
```

## Usage Example

```javascript
"use client";
import React, { useState } from "react";
import { LexicalEditorComponent } from "lexical-rich-text-editor";
import { useHtmlContext } from "lexical-rich-text-editor/src/htmlContext";

const App: React.FC = () => {
  const initialHtml = "<p>Hello, This is Custom Lexical Editor Module!</p>";
  const { htmlString } = useHtmlContext();

  return (
    <div className="App">
      <main>
        <LexicalEditorComponent initialHtml={initialHtml} />
      </main>
      <section className="m-4 rounded-lg p-4 bg-gray-200 text-black">
        <h2 className="text-center font-semibold">Content Output</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </section>
    </div>
  );
};

export default App;
```

## MIT License

Copyright (c) [2024] [Farhan](https://github.com/fms-byte)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.