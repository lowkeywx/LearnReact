import React from 'react';
import ReactDOM from 'react-dom/client';

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }

  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <ActionLink></ActionLink>
  );