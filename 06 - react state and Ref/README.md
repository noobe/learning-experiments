# State Vs Ref

React state: The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

React Ref: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

Hence while working with input elements, we can either set an input field to a state variable and on its change event, update the state thereby reflecting the new value in the input field OR set the input field to a ref and persist its value between re-renders of the components. While processing the data in the input element, we can use the ref to access the element and then access the value directly.
