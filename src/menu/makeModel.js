module.exports = (React) => {
  const PropTypes = require('prop-types');
  const { shape, func } = PropTypes;

  const IMenuController = shape({
    open: func.isRequired,
    close: func.isRequired,
    toggle: func.isRequired,
    registerOptionsElement: func.isRequired
  });

  return { IMenuController };
};
