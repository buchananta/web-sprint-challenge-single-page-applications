import React from 'react';


export default function Ordered({data}) {
  return (
    <>
      <h2>Congratz! Pizza is On Its Way!</h2>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}