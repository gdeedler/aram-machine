'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/stats/${name}/`);
      }}
    >
      <input
        className='text-slate-900 rounded p-1'
        type="text"
        placeholder="Enter summoner name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-solid border rounded cursor-pointer px-3 py-1"
        type="submit"
        value="Go" />
    </form>
  );
}
