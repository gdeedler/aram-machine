'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/stats/${name}/`);
      }}
    >
      <input
        className='text-slate-900'
        type="text"
        placeholder="Enter summoner name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Go" />
    </form>
  );
}
