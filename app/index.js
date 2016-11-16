var USER_DATA = {
  name: 'Michael Dumalag',
  username: 'michaeldumalag',
  image: 'https://avatars.githubusercontent.com/'
}

const React = require('react');
const ReactDom = require('react-dom');

const ProfilePic = React.createClass({
  render () {
    return <img src={this.props.imageUrl + this.props.name} style={{height: 100, width: 100}} />
  }
});

const ProfileLink = React.createClass({
  render () {
    return (
      <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
      </a>
    )
  }
});

const ProfileName = React.createClass({
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} name={this.props.user.username}/>
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
