import React from 'react';


export default function Ordered({data}) {
  return (
    <pre>{JSON.stringify(data)}</pre>
  )
}