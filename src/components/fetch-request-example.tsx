'use client';

import React from 'react';

interface Bank {
  code: string;
  name: string;
  fullName: string;
  ispb: string;
}

export default function FetchRequestExample() {
  const [banks, setBanks] = React.useState<Bank[]>([]);

  React.useEffect(() => {
    (async () => {
      if (banks.length == 0) {
        const response = await fetch('https://brasilapi.com.br/api/banks/v1');
        const data = await response.json();

        setBanks(data);
      }
    })();
  }, [banks]);

  return (
    <ul>
      {banks
        .filter((bank) => bank.code)
        .map((bank) => (
          <li key={bank.code}>
            {bank.code} - {bank.name} - {bank.fullName} - {bank.ispb}
          </li>
        ))}
    </ul>
  );
}
