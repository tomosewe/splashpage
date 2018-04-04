import React from "react";
import IconLink from "./IconLink";

class Nav extends React.Component {
  state = {
    iconLinks: [
      {
        url: "https://blog.tomosewe.com",
        iconClass: "fa-rss",
        titleText: "Blog"
      },
      {
        url: "https://resume.tomosewe.com",
        iconClass: "fa-address-book-o",
        titleText: "Resume"
      },
      {
        url: "https://www.github.com/tomosewe",
        iconClass: "fa-github",
        titleText: "GitHub"
      },
      {
        url: "https://twitter.com/tomosewe",
        iconClass: "fa-twitter",
        titleText: "Twitter"
      },
      {
        url: "https://www.linkedin.com/in/tomosewe/",
        iconClass: "fa-linkedin",
        titleText: "LinkedIn"
      },
      {
        url: "mailto:tomosewe@gmail.com",
        iconClass: "fa-envelope-o",
        titleText: "Email"
      }
    ]
  };

  render() {
    return (
      <nav>
        <ul>
          {this.state.iconLinks.map(iconLink => (
            <IconLink
              key={iconLink.titleText}
              url={iconLink.url}
              iconClass={iconLink.iconClass}
              titleText={iconLink.titleText}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
