"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ContentPage({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium mb-8">{title}</h1>
          <div className="prose max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
