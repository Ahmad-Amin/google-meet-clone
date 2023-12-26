import cx from 'classnames';

import { Mic, Video, PhoneOff, MicOff, VideoOff, Phone } from 'lucide-react';
import styles from '@/component/Bottom/index.module.css';

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className={styles.bottomMenu}>
      {muted ? (
        <MicOff
          className={cx(styles.icon, styles.active)}
          onClick={toggleAudio}
          size={25}
        />
      ) : (
        <Mic className={styles.icon} onClick={toggleAudio} size={25} />
      )}
      {playing ? (
        <Video size={25} className={styles.icon} onClick={toggleVideo} />
      ) : (
        <VideoOff
          className={cx(styles.icon, styles.active)}
          onClick={toggleVideo}
          size={25}
        />
      )}
      {<PhoneOff className={styles.icon} size={25} onClick={leaveRoom} />}
    </div>
  );
};

export default Bottom;
