import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { title, icon } = this.props;
    return (
      <div className="app__list">
        <div className="app__list__icon">
          <img className="app__list__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt='No Image' />
        </div>
        <p className="app__list__title">{title}</p>
      </div>
    );
  }
}