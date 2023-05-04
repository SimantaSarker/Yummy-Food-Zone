import React from "react";
import question from "../../../../public/question.jpg";
const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 p-5 about">
      <div className="card w-full bg-green-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Differences between Uncontrolled and Controlled components
          </h2>
          <p>
            Uncontrolled components are UI elements that manage their own
            internal state independently of the state management mechanism of
            the application. Native HTML input components like "input" and
            "textarea" are examples of uncontrolled components. With
            uncontrolled components, the program does not have direct control
            over the status of the input value; rather, the input value is
            decided by the user's interactions with the UI element.Contrarily,
            regulated components are user interface elements that rely on the
            state management system of the program to control their state.{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-green-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">
            How to validate React props using PropTypes
          </h2>
          <p>
            A JavaScript package called React is used to build interactive web
            front-end apps. Because of its simple API, it is one of the most
            used libraries. By transferring data from parent components to child
            components, we can merge components into an app. We pass data with
            props to do this. Similar to HTML attributes, props also allow for
            the inclusion of dynamic data. Child components receive props from
            their parent components. And they are received by child components.
            Any data can be passed as a prop. So that the child component
            receives the data they anticipate, we need a means to validate their
            data type.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-green-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">
            Tell us the difference between nodejs and express js
          </h2>
          <p>
            Built on Chrome's V8 engine, Node.js is a JavaScript runtime that
            can be used to create server-side programs like web servers and
            real-time programs. For creating server-side applications, it offers
            a selection of core modules and libraries, as well as the npm
            package management. On top of Node.js, the web framework Express.js
            is used to create APIs and online applications. Routing, middleware,
            templating, and error handling are among the features and tools it
            offers for creating online applications and APIs. Additionally,
            Express.js offers a straightforward and adaptable API for creating
            RESTful APIs. Node.js and Express.js vary primarily in that Node.js
            offers the fundamental functionality for developing server-side
            programs, while Express.js offers a set of capabilities and tools
            for developing web apps.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-green-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">What is a custom hook, and why will you create a custom hook</h2>
          <p>A custom hook in React is a reusable function that has shared stateful logic and may be applied to several components. The prefix "use" is used in the naming standard for custom hooks to signify that they use the internal hooks of React.
Custom hooks can simplify reuse of complex functionality across other components by abstracting it away. Your code will become more modular and easier to maintain as a result of their assistance in minimizing code duplication.For instance, you might develop a unique hook to manage an API call that retrieves information from a distant server. Functions for handling loading and error conditions, retrying unsuccessful requests, and caching responses to enhance efficiency might all be included in this hook.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
