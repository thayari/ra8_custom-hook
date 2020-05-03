import React from 'react';
import useJsonFetch from './useJsonFetch';

export default function ShowData() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
  if (loading) {
    return <p>Loading...</p>
  }
  console.log('Получаем данные без ошибки');
  console.log(data);
  console.log(error);
  console.log('loading: ' + loading);
  return (
    <p>
      {data ? data.status : null}
    </p>
  )
}
