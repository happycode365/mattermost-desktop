const React = require('react');
const PropTypes = require('prop-types');

class TeamListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleTeamRemove = this.handleTeamRemove.bind(this);
    this.handleTeamEditing = this.handleTeamEditing.bind(this);
  }

  handleTeamRemove() {
    this.props.onTeamRemove();
  }
  handleTeamEditing() {
    this.props.onTeamEditing();
  }
  render() {
    var style = {
      left: {
        display: 'inline-block',
        width: 'calc(100% - 100px)',
        cursor: 'pointer'
      }
    };
    return (
      <div className='teamListItem list-group-item'>
        <div
          style={style.left}
          onClick={this.props.onTeamClick}
        >
          <h4 className='list-group-item-heading'>{ this.props.name }</h4>
          <p className='list-group-item-text'>
            { this.props.url }
          </p>
        </div>
        <div className='pull-right'>
          <a
            href='#'
            onClick={this.handleTeamEditing}
          >{'Edit'}</a>
          {' - '}
          <a
            href='#'
            onClick={this.handleTeamRemove}
          >{'Remove'}</a>
        </div>
      </div>
    );
  }
}

TeamListItem.propTypes = {
  name: PropTypes.string,
  onTeamEditing: PropTypes.func,
  onTeamRemove: PropTypes.func,
  onTeamClick: PropTypes.func,
  url: PropTypes.string
};

module.exports = TeamListItem;
