import React from 'react';
import Link from 'next/link'

const AppHeader:React.FC = () =>{
  return (
    <header className="p-4 pz-8 shadow">
      <Link href='/' legacyBehavior>
        <a className="font-bold">Next.js + MDX</a>
      </Link>
    </header>
  );
};

export default AppHeader;
