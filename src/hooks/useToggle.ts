import { useState } from 'react'

const useToggle = (defaultOnValue?: boolean) => {
  // initialize state
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)

  // create any functions we need for modifying the state - toggle function
  const toggle = (): void => setIsToggledOn(prevState => !prevState)

  // return whatever we want another component to have access to (isToggledOn, toggle)
  // whenever we use useToggle() in a component, we can call the value and function below whatever
  // we want since we are returning an array an not an object. We'd have to keep the names the same
  // in the use case if we returned an object here
  return [isToggledOn, toggle]
}

export default useToggle
