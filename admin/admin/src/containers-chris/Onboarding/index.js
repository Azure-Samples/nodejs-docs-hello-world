/**
 *
 * Onboarding
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import OnboardingVideo from 'components/OnboardingVideo';

import {
  getVideos,
  onClick,
  removeVideos,
  setVideoDuration,
  setVideoEnd,
  updateVideoStartTime,
} from './actions';
import makeSelectOnboarding from './selectors';
import reducer from './reducer';
import saga from './saga';

import styles from './styles.scss';

export class Onboarding extends React.Component {
  state = { showVideos: false };

  componentDidMount() {
    this.props.getVideos();
  }

  componentDidUpdate(prevProps) {
    const { shouldOpenModal } = this.props;

    if (shouldOpenModal !== prevProps.shouldOpenModal && shouldOpenModal) {
      this.handleOpenModal();
    }
  }

  componentWillUnmount() {
    this.props.removeVideos();
  }

  setVideoEnd = () => {
    this.setVideoEnd();
  };

  didPlayVideo = (index, currTime) => {
    const eventName = `didPlay${index}GetStartedVideo`;
    this.context.emitEvent(eventName, { timestamp: currTime });
  };

  didStopVideo = (index, currTime) => {
    const eventName = `didStop${index}Video`;
    this.context.emitEvent(eventName, { timestamp: currTime });
  };

  handleOpenModal = () => this.setState({ showVideos: true });

  handleVideosToggle = () => {
    this.setState(prevState => ({ showVideos: !prevState.showVideos }));

    const { showVideos } = this.state;
    const eventName = showVideos ? 'didOpenGetStartedVideoContainer' : 'didCloseGetStartedVideoContainer';

    this.context.emitEvent(eventName);
  };

  updateCurrentTime = (index, current, duration) => {
    this.props.updateVideoStartTime(index, current);

    const percent = (current * 100) / duration;
    const video = this.props.videos[index];

    if (percent >= 80) {
      if (video.end === false) {
        this.updateEnd(index);
      }
    }
  };

  updateEnd = index => {
    this.props.setVideoEnd(index, true);
  };

  // eslint-disable-line jsx-handler-names
  render() {
    const { videos, onClick, setVideoDuration } = this.props;
    const { showVideos } = this.state;

    const style = showVideos ? {} : { maxWidth: 0 };

    return (
      <div
        style={style}
        className={cn(styles.videosWrapper, videos.length > 0 ? styles.visible : styles.hidden)}
      >
        <div
          style={style}
          className={cn(styles.videosContent, this.state.showVideos ? styles.shown : styles.hide)}
        >
          <div className={styles.videosHeader}>
            <p>
              <FormattedMessage id="app.components.Onboarding.title" />
            </p>
            {videos.length && (
              <p>
                {Math.floor((videos.filter(v => v.end).length * 100) / videos.length)}
                <FormattedMessage id="app.components.Onboarding.label.completed" />
              </p>
            )}
          </div>
          <ul className={styles.onboardingList}>
            {videos.map((video, i) => {
              return (
                <OnboardingVideo
                  key={i}
                  id={i}
                  video={video}
                  onClick={onClick}
                  setVideoDuration={setVideoDuration}
                  getVideoCurrentTime={this.updateCurrentTime}
                  didPlayVideo={this.didPlayVideo}
                  didStopVideo={this.didStopVideo}
                />
              );
            })}
          </ul>
        </div>

        <div className={styles.openBtn}>
          <button onClick={this.handleVideosToggle} className={this.state.showVideos ? styles.active : ''}>
            <i className="fa fa-question" />
            <i className="fa fa-times" />
            <span />
          </button>
        </div>
      </div>
    );
  }
}
Onboarding.contextTypes = {
  emitEvent: PropTypes.func,
};

Onboarding.defaultProps = {
  onClick: () => {},
  removeVideos: () => {},
  setVideoDuration: () => {},
  setVideoEnd: () => {},
  shouldOpenModal: false,
  videos: [],
  updateVideoStartTime: () => {},
};

Onboarding.propTypes = {
  getVideos: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  removeVideos: PropTypes.func,
  setVideoDuration: PropTypes.func,
  setVideoEnd: PropTypes.func,
  shouldOpenModal: PropTypes.bool,
  updateVideoStartTime: PropTypes.func,
  videos: PropTypes.array,
};

const mapStateToProps = makeSelectOnboarding();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getVideos, onClick, setVideoDuration, updateVideoStartTime, setVideoEnd, removeVideos },
    dispatch,
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

/* Remove this line if the container doesn't have a route and
 *  check the documentation to see how to create the container's store
 */
const withReducer = injectReducer({ key: 'onboarding', reducer });

/* Remove the line below the container doesn't have a route and
 *  check the documentation to see how to create the container's store
 */
const withSaga = injectSaga({ key: 'onboarding', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Onboarding);
