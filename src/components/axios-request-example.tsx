'use client';

import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

interface Bank {
  code: string;
  name: string;
  fullName: string;
  ispb: string;
}

const brasilAPI = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
});

brasilAPI.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer qualquer-valor-de-token';

  return config;
});

const brasilAPIFetcher = (url: string) =>
  brasilAPI.get(url).then((response) => response.data);

export default function AxiosRequestExample() {
  const {data: banks, isLoading: banksIsLoading} = useSWR<Bank[]>(
    '/banks/v1',
    brasilAPIFetcher
  );

  return (
    <div>
      <h1 className="text-2xl mb-2">Lista de Bancos</h1>
      {banksIsLoading && <div>Carregando lista de bancos...</div>}
      {!banksIsLoading && banks && (
        <ul className="list-item">
          {banks
            .slice(0, 10)
            .filter((bank) => bank.code)
            .map((bank) => (
              <li key={bank.code}>
                {bank.code} - {bank.name} - {bank.ispb}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
