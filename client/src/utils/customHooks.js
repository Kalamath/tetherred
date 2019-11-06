import { useState, useEffect } from "react";


// We create a separate shared object to 
const authStore = {
    state: undefined,
    setState(value) {
        // Set `this.state` so it can be used
        this.state = value;
        // When this gets called, we will go through all of the listeners that have been 
        // added to the store and we will call their `setState` methods that have been attached
        this.listeners.forEach(listener => listener(value))
        // This trickles down the state to the listening components
    },
    listeners: []
}

// This has to be done because of javascript context binding when we want to call it
authStore.setState = authStore.setState.bind(authStore);

// We'll define a custom useAuth hook to have a general state managed by an initialization
// We have to have this start with `use` as per the documentation for React
export function useAuth() {
  const initialState = {
    isLoggedIn: false
  };
  const [userState, setUser] = useState(authStore.state || initialState);
  // Each time this custom hook is called, we will call the React's useState and add the `setUser` 
  // function call to the array of listeners
  if (!authStore.listeners.includes(setUser)) {
      authStore.listeners.push(setUser);
  }

  useEffect(() => () => {
    authStore.listeners = authStore.listeners.filter(listener => listener !== setUser)
  }, [])
  // We return back something that FEELS like react's useState method
  // in that we send down an array with the first value as the state and 
  // the second as a method, but the method we send down is the `authStore.setState` 
  // which is defined above in our `authStore` object.
  return [ userState, authStore.setState];
}
