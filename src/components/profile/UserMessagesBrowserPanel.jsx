import React from "react";
import { Link } from "react-router-dom";

import UserContext from "../../context/user";

class UserMessagesBrowserPanel extends React.Component {
  static contextType = UserContext;

  constructor({ props }) {
    super(props);

    this.changeViewingMessage = this.changeViewingMessage.bind(this);
  }

  changeViewingMessage(e) {
    e.preventDefault();

    this.context.set({
      viewingMessage: this.context.messages.find(
        (elem) => elem.id == Number.parseInt(e.target.target)
      ),
    });
  }

  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child">
          <div className="content">
            <div className="menu">
              <p className="menu-label">
                <span>
                  <Link to="/write" className="icon-text tag is-link is-light">
                    <span className="icon">
                      <i className="fa-solid fa-pencil fa-bounce"></i>
                    </span>
                    <span>Write new Message</span>
                  </Link>{" "}
                  <a
                    onClick={this.context.loadMoreConversations}
                    className="icon-text tag is-link is-light"
                  >
                    <span className="icon">
                      <i className="fa-solid fa-snowplow fa-bounce"></i>
                    </span>
                    <span>Load More</span>
                  </a>
                </span>
              </p>
              <div
                className="menu-list"
                style={{
                  maxHeight: "30em",
                  minHeight: "30em",
                  height: "30em",
                  overflow: "auto",
                }}
              >
                {this.context.messages.map((message) => {
                  return (
                    <a
                      className={
                        this.context.viewingMessage == message
                          ? "is-active"
                          : ""
                      }
                      key={`message-list-item-${message.id}`}
                      target={message.id}
                      onClick={this.changeViewingMessage}
                    >
                      Someone #{message.profile_id}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* <div className="content">
              <button
                className="button is-link is-fullwidth"
                onClick={this.context.loadMoreConversations}
              >
                Load More
              </button>
            </div>
            <div
              className="content"
              style={{
                maxHeight: "30em",
                minHeight: "30em",
                height: "30em",
                overflow: "auto",
              }}
            >
              {this.context.messages.map((message) => {
                return (
                  <p>
                    <a
                      className="link"
                      key={`message-list-item-${message.id}`}
                      target={message.id}
                      onClick={this.changeViewingMessage}
                    >
                      Someone #{message.profile_id}
                    </a>
                  </p>
                );
              })}
            </div> */}
          </div>
        </article>
      </div>
    );
  }
}

export default UserMessagesBrowserPanel;
