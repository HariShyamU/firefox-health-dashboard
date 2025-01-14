import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DetailsIcon } from './icons';

const LEFT_MARGIN = '1rem';
const styles = {
  content: {
    margin: LEFT_MARGIN,
  },
  header: {
    backgroundColor: 'black',
    margin: 0,
  },
  title: {
    color: 'white',
    margin: `0 0 0 ${LEFT_MARGIN}`,
    padding: '.4rem 0 .4rem',
  },
  subtitle: {
    color: '#d1d2d3',
    fontSize: '0.75rem',
    fontWeight: '300',
    paddingLeft: '.9em',
  },
};
const Section = ({
  classes, children, subtitle, title, more,
}) => (
  <div>
    <div className={classes.header}>
      <h2 className={classes.title}>
        <span>
          {title}
          {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
          {more && (
            <span>
              {' '}
              <a href={more} title="show details">
                <DetailsIcon />
              </a>
            </span>
          )}
        </span>
      </h2>
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

Section.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Section);
