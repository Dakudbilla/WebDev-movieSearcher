import React from "react";
import "../css/ReadMore.css";
class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      description: this.props.overview
    };
  }

  render() {
    console.log(this.state.description);
    const { expanded } = this.state;
    const toggledClass = expanded ? "expanded" : "collapsed";
    return (
      <div className="readmore">
        <div className={`content ${toggledClass}`}>
          {this.state.description}
        </div>
        <button
          className="btn btn primary bg-primary text-white font-weight-bold m-3"
          onClick={() => this.setState({ expanded: !expanded })}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    );
  }
}
export default ReadMore;
