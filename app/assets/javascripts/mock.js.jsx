var Mylist = React.createClass({
  propTypes: {
    mylist: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      comment: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired
    }).isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  _onClick() {
    this.props.onClick(this.props.mylist.url);
  },

  render: function() {
    return (
      <div className="mylist" onClick={this._onClick}>{this.props.mylist.title}</div>
    );
  }
});

var Mylists = React.createClass({
  propTypes: {
    initSource: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return { mylists: [] };
  },

  componentDidMount: function() {
    $.get(this.props.initSource, function(result) {
      if (this.isMounted()) {
        this.setState({mylists: result});
      }
    }.bind(this));
  },

  render: function() {
    var mylists = this.state.mylists.map(function(mylist) {
      return <Mylist key={mylist.id} mylist={mylist} onClick={this.props.onClick} />
    }.bind(this));
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
      title: "all videos",
      source: "videos.json",
      videos: []
    };
  },

  componentDidMount: function() {
    $.get(this.state.source, function(result) {
      if (this.isMounted()) {
        this.setState({videos: result});
      }
    }.bind(this));
  },

  updateVideos(title, source) {
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
  _onClick(url) {
    alert(url);
  },

  render: function() {
    return (
      <div>
        <Mylists initSource="mylists.json" onClick={this._onClick} />
        <Videos />
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
