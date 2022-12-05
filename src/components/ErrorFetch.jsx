import React from 'react'

const ErrorFetch = ({hasErrorPersonalizado}) => {
  return (
    <article className='error-container'>
        <h1>Error {hasErrorPersonalizado.status}</h1>
        <h2>{hasErrorPersonalizado.data.error}</h2>
        <p>You just have to enter numbers from 1 to 126.</p>
    </article>
  )
}

export default ErrorFetch