import React from 'react';
import Link from 'next/link';
import katex from 'katex';

const TextWithLatex = ({ text }: { text: string }) => {
    const regex = /(?:\[(.+?)\]\((.+?)\))|(?:\$\$(.*?)\$\$)|(?:\\\[([^]*?)\\\])|(?:\\\(([^]*?)\\\))|(?:\*\*(.+?)\*\*)/gs;
    const lines = text.split('\n'); // Split text into lines
    const parts = [];

    lines.forEach((line, index) => {
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(line)) !== null) {
            const matchStart = match.index;
            const matchEnd = matchStart + match[0].length;

            // Add text before matched part (if any)
            if (lastIndex < matchStart) {
                parts.push(line.slice(lastIndex, matchStart));
            }

            // Process matched part
            if (match[1] && match[2]) { // Link
                parts.push(
                    <Link
                        target='_blank'
                        rel='noopener noreferrer'
                        className='break-words underline underline-offset-2 text-blue-600'
                        key={`${index}-${match[2]}`}
                        href={match[2]}>
                        {match[1]}
                    </Link>
                );
            } else if (match[3] || match[4] || match[5]) { // LaTeX
                const latexContent = match[3] || match[4] || match[5];
                try {
                    const html = katex.renderToString(latexContent, { throwOnError: false });
                    parts.push(<span key={`${index}-${matchStart}`} dangerouslySetInnerHTML={{ __html: html }} />);
                } catch (error) {
                    console.error('Error rendering LaTeX:', error);
                    parts.push(<span key={`${index}-${matchStart}`}>{match[0]}</span>);
                }
            } else if (match[6]) { // Heading
                parts.push(<p className="font-bold text-lg" key={`${index}-${matchStart}`}>{match[6]}</p>);
            }

            lastIndex = matchEnd;
        }

        // Add any remaining text of the line
        if (lastIndex < line.length) {
            parts.push(line.slice(lastIndex));
        }

        // Add a line break if it's not the last line
        if (index < lines.length - 1) {
            parts.push(<br key={`br-${index}`} />);
        }
    });

    return (
        <>
            {parts.map((part, i) => (
                <React.Fragment key={i}>{part}</React.Fragment>
            ))}
        </>
    );
};

export default TextWithLatex;
