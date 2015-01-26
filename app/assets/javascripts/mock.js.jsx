var Mylist = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="mylist">{this.props.title}</div>
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
      <div className="mylists col scroll-y">
        <div>マイリスト</div>
        {mylists}
        <div>新しいマイリスト</div>
      </div>
    );
  }
});

var Video = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <a href={this.props.url} target="_blank">{this.props.title}</a>
        <div>{this.props.comment}</div>
      </div>
    );
  }
});

var Videos = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      source: "",
      videos: []
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({videos: result});
      }
    }.bind(this));
  },

  updateVideos() {
    $.get(source, function(result) {
      this.setState({
        title: title,
        source: source,
        videos: result
      });
    }.bind(this));
  },

  render: function() {
    var videos = this.state.videos.map(function(video) {
      return <Video title={video.title} comment={video.comment} url={video.url} key={video.id} />
    });
    return (
      <div className="videos col scroll-y">
        <div>{this.state.title}</div>
        {videos}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Mylists source="http://192.168.11.7:3000/mylists.json" />
        <Videos source="http://192.168.11.7:3000/videos.json" />
      </div>
    )
  }
});

$(document).ready(function() {
  React.render(
    <App />,
    document.getElementById('top')
  );
});
