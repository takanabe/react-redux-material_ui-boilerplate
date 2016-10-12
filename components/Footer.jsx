import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { RaisedButton, List, ListItem, Divider } from 'material-ui';

import InboxIcon from 'material-ui/svg-icons/content/inbox';
import LoopIcon from 'material-ui/svg-icons/av/loop';
import ArchiveIcon from 'material-ui/svg-icons/content/archive';

import palette from '../src/material_ui_raw_theme_file';


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const FILTER_ICONS = {
  [SHOW_ALL]: <InboxIcon />,
  [SHOW_ACTIVE]: <LoopIcon />,
  [SHOW_COMPLETED]: <ArchiveIcon />
};

class Footer extends Component {
  getCountForFilter(filter) {
    const { activeCount, completedCount } = this.props;
    if (filter === SHOW_ALL) return activeCount + completedCount;
    if (filter === SHOW_ACTIVE) return activeCount;
    if (filter === SHOW_COMPLETED) return completedCount;
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;
    const active = filter === selectedFilter;
    const count = this.getCountForFilter(filter);
    return (
      <ListItem key={filter} className={classnames({ selected: active })}
                style={{color: active ? palette.primary1Color: palette.textColor}}
                primaryText={title + (count > 0 ? ' (' +  count + ')' : '')}
                leftIcon={FILTER_ICONS[filter]}
                onTouchTap={() => onShow(filter)} />
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <RaisedButton className="clear-completed"
                      primary={true}
                      label="Clear completed"
                      onClick={onClearCompleted} />
      );
    }
  }

  render() {
    return (
      <footer className="footer">
        <Divider style={{marginTop: 10}}/>
        <List className="filters">
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
          this.renderFilterLink(filter)
        )}
        </List>
        {this.renderClearButton()}
      </footer>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
};

export default Footer;
