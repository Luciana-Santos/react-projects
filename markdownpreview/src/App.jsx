import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');

  return (
    <main>
      <section className="markdown">
        <textarea
          value={markdown}
          onChange={({ target }) => setMarkdown(target.value)}
          className="input"
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
