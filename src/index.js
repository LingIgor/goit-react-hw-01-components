import App from '../src/components/App';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
// ReactDOM.createRoot(<App />, document.querySelector('#root'));

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
