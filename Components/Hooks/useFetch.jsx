import React, { useEffect, useState } from 'react'

export default function useFetch({url}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not find what you\'re searching for')
        }
        return res.json();
      })
      .then(datta => {
        setLoading(false);
        setError(null)
        setData(datta)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })

  }, [])

  return({data, loading, error})
}