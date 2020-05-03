import React from 'react';
import useJsonFetch from './useJsonFetch';

export default function ShowData() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');
  console.log('Получаем ошибку');
  console.log(data);
  console.log(error);
  console.log('loading: ' + loading);
  return (
    <p style={{color: '#ff0000'}}>Error</p>
  )
}
