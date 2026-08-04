import React, { useState, useCallback } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

/**
 * Simple JSX/TSX syntax highlighter.
 * Produces <span> elements with token-* classes for CSS-based coloring.
 */
function highlightJSX(code: string): React.ReactNode[] {
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let keyCounter = 0;

    const pushToken = (text: string, className: string) => {
      parts.push(
        <span key={`${lineIdx}-${keyCounter++}`} className={className}>
          {text}
        </span>
      );
    };

    // Process character by character with simple state machine
    while (remaining.length > 0) {
      // Comments
      const commentMatch = remaining.match(/^(\/\/.*)/);
      if (commentMatch) {
        pushToken(commentMatch[1], 'token-comment');
        remaining = remaining.slice(commentMatch[1].length);
        continue;
      }

      // Opening/closing tags: <Component or </Component or />
      const tagMatch = remaining.match(/^(<\/?)([\w.]+)/);
      if (tagMatch) {
        pushToken(tagMatch[1], 'token-bracket');
        pushToken(tagMatch[2], 'token-tag');
        remaining = remaining.slice(tagMatch[0].length);
        continue;
      }

      // Self-closing bracket />
      const selfClose = remaining.match(/^(\/?>)/);
      if (selfClose) {
        pushToken(selfClose[1], 'token-bracket');
        remaining = remaining.slice(selfClose[1].length);
        continue;
      }

      // Attribute with string value: attr="value" or attr='value'
      const attrStringMatch = remaining.match(/^(\w+)(=)("[^"]*"|'[^']*')/);
      if (attrStringMatch) {
        pushToken(attrStringMatch[1], 'token-attr');
        pushToken(attrStringMatch[2], 'token-bracket');
        pushToken(attrStringMatch[3], 'token-string');
        remaining = remaining.slice(attrStringMatch[0].length);
        continue;
      }

      // Attribute with JSX expression: attr={value}
      const attrExprMatch = remaining.match(/^(\w+)(=\{)([^}]*)(})/);
      if (attrExprMatch) {
        pushToken(attrExprMatch[1], 'token-attr');
        pushToken(attrExprMatch[2], 'token-bracket');
        // Check if the value is a boolean, number, or function
        const val = attrExprMatch[3];
        if (val === 'true' || val === 'false') {
          pushToken(val, 'token-bool');
        } else if (/^\d+$/.test(val)) {
          pushToken(val, 'token-number');
        } else if (val.includes('=>')) {
          pushToken(val, 'token-func');
        } else {
          pushToken(val, 'token-string');
        }
        pushToken(attrExprMatch[4], 'token-bracket');
        remaining = remaining.slice(attrExprMatch[0].length);
        continue;
      }

      // String literals
      const strMatch = remaining.match(/^("[^"]*"|'[^']*')/);
      if (strMatch) {
        pushToken(strMatch[1], 'token-string');
        remaining = remaining.slice(strMatch[1].length);
        continue;
      }

      // Import/export/const keywords
      const kwMatch = remaining.match(/^(import|export|from|const|let|var|return)\b/);
      if (kwMatch) {
        pushToken(kwMatch[1], 'token-tag');
        remaining = remaining.slice(kwMatch[1].length);
        continue;
      }

      // Default: single character
      parts.push(
        <span key={`${lineIdx}-${keyCounter++}`}>{remaining[0]}</span>
      );
      remaining = remaining.slice(1);
    }

    return (
      <React.Fragment key={lineIdx}>
        {parts}
        {lineIdx < lines.length - 1 ? '\n' : ''}
      </React.Fragment>
    );
  });
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'TSX',
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const highlighted = highlightJSX(code.trim());

  return (
    <div className="code-section">
      <div className="code-header">
        <div className="code-header-left">
          <span className="code-lang-badge">{language}</span>
          {filename && <span className="code-filename">{filename}</span>}
        </div>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="code-body">
        <pre>{highlighted}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
