import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

class Avartar extends React.Component {
  render() {
    return (
      <img src="https://www.gravatar.com/avatar/nothing"
        alt="avatar" className="avatar" />
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        This is less than 140 character.
      </div>
    );
  }
}

class NameWithHandle extends React.Component {
  render() {
    return (
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
}

class Time extends React.Component {
  render() {
    return (
      <span className="time">3h ago</span>
    );
  };
}

class ReplyButton extends React.Component {
  render() {
    return (
      <i className="fa fa-reply reply-button"/>
    );
  }
}

class RetweetButton extends React.Component {
  render() {
    return (
      <i className="fa fa-retweet retweet-button"/>
    );
  }
}

class LikeButton extends React.Component {
  render() {
    return (
      <i className="fa fa-heart like-button"/>
    );
  }
}

class MoreOptionsButton extends React.Component {
  render() {
    return (
      <i className="fa fa-ellipsis-h more-options-button"/>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <Avartar/>
        <div className="content">
          <NameWithHandle/><Time/>
          <Message/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);
