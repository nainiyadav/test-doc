import Head from 'next/head'
import Image from 'next/image'
import hljs from "highlight.js";
import { marked } from "marked";
import { Inter } from 'next/font/google'
import { useEffect, useRef } from "react";
import "highlight.js/styles/github.css";


const inter = Inter({ subsets: ['latin'] })

const markdown = `
  \`\`\`typescript
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
  \`\`\`
`;

export default function Home() {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div className="App">
      {/* Example with raw JS */}
      <pre>
        <code className="language-typescript">const variable = 'raw';</code>
      </pre>

      {/* Example with marked */}
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
}
