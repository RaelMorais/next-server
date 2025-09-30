'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <div>{msg}</div>;
}


