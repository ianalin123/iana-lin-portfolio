// components/CodeBlock.tsx
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Token-based syntax highlighting to avoid regex conflicts
const highlightCode = (code: string, language = ''): string => {
  if (!language) {
    return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  
  // First escape HTML entities
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  if (language.toLowerCase() === 'python') {
    return highlightPython(escaped);
  } else if (language.toLowerCase() === 'javascript') {
    return highlightJavaScript(escaped);
  } else if (language.toLowerCase() === 'typescript') {
    return highlightTypeScript(escaped);
  }
  
  return escaped;
};

const highlightPython = (code: string): string => {
  // Split into tokens while preserving whitespace
  const tokens: Array<{text: string, type: string}> = [];
  const lines = code.split('\n');
  
  lines.forEach((line, lineIndex) => {
    let i = 0;
    
    while (i < line.length) {
      // Skip whitespace
      if (/\s/.test(line[i])) {
        let whitespace = '';
        while (i < line.length && /\s/.test(line[i])) {
          whitespace += line[i];
          i++;
        }
        tokens.push({text: whitespace, type: 'whitespace'});
        continue;
      }
      
      // Comments
      if (line[i] === '#') {
        tokens.push({text: line.slice(i), type: 'comment'});
        break;
      }
      
      // Strings
      if (line[i] === '"' || line[i] === "'") {
        const quote = line[i];
        let string = quote;
        i++;
        while (i < line.length && line[i] !== quote) {
          if (line[i] === '\\' && i + 1 < line.length) {
            string += line[i] + line[i + 1];
            i += 2;
          } else {
            string += line[i];
            i++;
          }
        }
        if (i < line.length) {
          string += line[i];
          i++;
        }
        tokens.push({text: string, type: 'string'});
        continue;
      }
      
      // Numbers
      if (/\d/.test(line[i])) {
        let number = '';
        while (i < line.length && /[\d.]/.test(line[i])) {
          number += line[i];
          i++;
        }
        tokens.push({text: number, type: 'number'});
        continue;
      }
      
      // Identifiers and keywords
      if (/[a-zA-Z_]/.test(line[i])) {
        let word = '';
        while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
          word += line[i];
          i++;
        }
        
        const keywords = ['def', 'class', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'import', 'from', 'as', 'return', 'break', 'continue', 'pass', 'with', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'del', 'raise', 'async', 'await'];
        const constants = ['True', 'False', 'None'];
        
        if (keywords.includes(word)) {
          tokens.push({text: word, type: 'keyword'});
        } else if (constants.includes(word)) {
          tokens.push({text: word, type: 'constant'});
        } else {
          tokens.push({text: word, type: 'identifier'});
        }
        continue;
      }
      
      // Everything else (operators, punctuation)
      tokens.push({text: line[i], type: 'operator'});
      i++;
    }
    
    // Add newline except for last line
    if (lineIndex < lines.length - 1) {
      tokens.push({text: '\n', type: 'newline'});
    }
  });
  
  // Convert tokens to HTML
  return tokens.map(token => {
    switch (token.type) {
      case 'comment':
        return `<span class="text-green-600 dark:text-green-400">${token.text}</span>`;
      case 'string':
        return `<span class="text-orange-600 dark:text-orange-400">${token.text}</span>`;
      case 'keyword':
        return `<span class="text-blue-600 dark:text-blue-400">${token.text}</span>`;
      case 'constant':
        return `<span class="text-purple-600 dark:text-purple-400">${token.text}</span>`;
      case 'number':
        return `<span class="text-red-600 dark:text-red-400">${token.text}</span>`;
      default:
        return token.text;
    }
  }).join('');
};

const highlightJavaScript = (code: string): string => {
  // Simplified highlighting for JS - you can expand this similarly to Python
  return code
    .replace(/(\/\/.*?)(?=\n|$)/g, '<span class="text-green-600 dark:text-green-400">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-green-600 dark:text-green-400">$1</span>')
    .replace(/\b(const|let|var|function|class|if|else|for|while|return|import|export|from|as|async|await)\b/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>')
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-purple-600 dark:text-purple-400">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-red-600 dark:text-red-400">$1</span>');
};

const highlightTypeScript = (code: string): string => {
  // Simplified highlighting for TS - you can expand this similarly to Python
  return code
    .replace(/(\/\/.*?)(?=\n|$)/g, '<span class="text-green-600 dark:text-green-400">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-green-600 dark:text-green-400">$1</span>')
    .replace(/\b(const|let|var|function|class|if|else|for|while|return|import|export|from|as|async|await|interface|type|enum|public|private|protected|static|readonly)\b/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>')
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-purple-600 dark:text-purple-400">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-red-600 dark:text-red-400">$1</span>');
};

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
  className?: string;
}

export const CodeBlock = ({ 
  children, 
  language = '', 
  filename = '',
  showLineNumbers = false,
  maxHeight = '',
  className = '' 
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const lines = children.split('\n');
  const highlightedCode = highlightCode(children, language);

  return (
    <div className={`relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${className} mt-4 mb-4 `}>
      {/* Header with filename and copy button */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {filename}
              </span>
            )}
            {language && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={copyToClipboard}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
      )}
      
      {/* Code content */}
      <div className={`relative ${maxHeight ? `max-h-${maxHeight} overflow-y-auto` : ''}`}>
        <pre className="p-4 bg-gray-50 dark:bg-gray-900 text-sm font-mono mt-0 mb-0 leading-relaxed overflow-x-auto">
          <code className="text-gray-800 dark:text-gray-200">
            {showLineNumbers ? (
              <div className="flex">
                {/* Line numbers */}
                <div className="flex flex-col text-gray-400 dark:text-gray-600 select-none mr-4 text-center min-w-[2rem]">
                  {lines.map((_, index) => (
                    <span key={index} className="leading-relaxed">
                      {index + 1}
                    </span>
                  ))}
                </div>
                {/* Code content */}
                <div 
                  className="flex-1 min-w-2 overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            )}
          </code>
        </pre>
        
        {/* Copy button for mobile (always visible) */}
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm sm:hidden"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

// Inline code component
interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export const InlineCode = ({ children, className = '' }: InlineCodeProps) => {
  return (
    <code className={`px-1.5 py-0.5 text-sm font-mono bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded ${className}`}>
      {children}
    </code>
  );
};