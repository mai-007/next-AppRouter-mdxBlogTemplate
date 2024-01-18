// LinkBox.tsx
import React from 'react';
import Link from 'next/link'

interface LinkBoxProps {
  href: string;
  heading: string;
  paragraph: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ href, heading, paragraph }) => {
  return (
    <Link href={href} legacyBehavior>
    <a
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {heading}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1  motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {paragraph}
      </p>
    </a>
    </Link>
  );
};

export default LinkBox;
