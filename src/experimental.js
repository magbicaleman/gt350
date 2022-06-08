import { useCallback, useEffect, useState } from 'react'

const experimental = {
  value: 'all',
  setters: [],
}

const experimentalProxy = new Proxy(experimental, {
  set(obj, prop, value) {
    if (prop === 'value') {
      obj[prop] = value
      if(obj.setters.length) {
        obj.setters.forEach(setter => setter(value))
      }
    }

    if (prop === 'setter') {
      obj['setters'].push(value)
    }
    return true
  }
})

export const useGetSharedState = () => {
  const [value, setValue] = useState(experimentalProxy.value)
  experimentalProxy.setter = setValue

  useEffect(() => {
    console.log('something MOUNTEd')
    return () => {
      console.log('something unmounted')
    }
  }, [])

  return value
}

export const useSetSharedState = () => {
  return useCallback(value => {
    experimentalProxy.value = value
  }, [])
}
