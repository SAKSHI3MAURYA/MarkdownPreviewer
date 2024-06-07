import React, { useState } from "react"
import { marked } from "marked"
import './App.css'

const defaultContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === ddd ) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


function App() {
  const [content,setContent] =useState(defaultContent);

  const handleChange = (event) =>{
    setContent(event.target.value);
  }

  const getMarkdownText = () =>{
    const rawMarkup = marked(content, { breaks:true });
    const markedText = {__html: rawMarkup}
    return markedText;
  };
  
  return (
    <div className="app">
    <h1 className="title">MarkDown Previewer</h1>
    <h4 className="tagged">-Created by Sakshi Maurya</h4>
    <div className="container">
      <div className="editor-container">
      <div className="badge">Editor</div>
      <textarea id="editor" value={content} onChange={handleChange}></textarea>
      </div>
      <div className="preview-container">
      <div className="badge">Previewer</div>
      <div id="previewer" 
      dangerouslySetInnerHTML={getMarkdownText()}
      >
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
 

