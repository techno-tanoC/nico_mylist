var Mylist = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div><a href={this.props.url}>{this.props.title}</a>s comment is {this.props.comment}</div>
    );
  }
});

var Mylists = React.createClass({
  getInitialState: function() {
    return {
      mylists: []
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({mylists: result});
      }
    }.bind(this));
  },

  render: function() {
    var mylists = this.state.mylists.map(function(mylist) {
      return <Mylist title={mylist.title} comment={mylist.comment} url={mylist.url} key={mylist.id} />
    });
    return (
      <div>
        {mylists}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <Mylists source="http://192.168.11.7:3000/mylists.json" />
    )
  }
});

$(document).ready(function() {
  React.render(
    <App />,
    document.getElementById('top')
  );
});
