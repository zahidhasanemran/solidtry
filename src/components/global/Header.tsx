import { A } from '@solidjs/router'
import React from 'react';

const Header = () => {
  return (
    <div class="flex bg-primary-600 justify-between px-8 py-2">
      <div><a href="/" class='text-2xl pt-1 block text-white '>
        SolidTry
      </a></div>
      <nav class='flex gap-x-6'>
        <a class='block text-white px-3 py-2' href="/">Home</a>
        <a class='block text-white px-3 py-2' href="/about">About</a>
        <a class='block text-white px-3 py-2' href="/blog">Blog</a>
      </nav>
    </div>
  );
};

export default Header;