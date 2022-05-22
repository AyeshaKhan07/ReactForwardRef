![pngwing com](https://user-images.githubusercontent.com/41265756/147820719-14187d43-5d31-457c-8deb-7b14ff6b0a4e.png)
# FORWARD REF IN REACT
<hr>

![image](https://user-images.githubusercontent.com/41265756/169702968-857005ae-c846-40f3-b12f-59829f43d77f.png)

## About
This project was created to study the concept of forward ref in React. React forwardRef is a method that allows parent components pass down (i.e., “forward”) refs to their children. Using forwardRef in React gives the child component a reference to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used.

## Technologies
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)

## How To Use
```
# Clone this repository
$ git clone https://github.com/AyeshaKhan07/ReactForwardRef.git

# Go into the repository
$ cd ReactForwardRef

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Forward ref is forwarding or passing the reference of the DOM element to the child component. By using forwardRef we can manipulate the element's properties without re-rendering that element. In this project, I created a counter app in which the value is incremented by two methods:
1. React State
2. Forward Ref 

While running the app, follow the below steps to get the better understanding: 

- Open the console and change the switch to increment by react state. 
- You will see every time you press the increment button, this message got printed "component rendered!".
- Now change the switch again to increment by forward ref.
- Now you will see every time you press the increment button, no message got printed on console.

This proves that if we increment the value by state the component will re-render on every increment, but if we increment by forwardRef the component will just update the value without rerendering. 

## Further Reading
- https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/
- https://reactjs.org/docs/forwarding-refs.html

## Author
@AyeshaKhan07
