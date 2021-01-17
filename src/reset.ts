import styleInject from 'style-inject';
import fontStyles from './reset.css';

export const setupReset = () => {
  styleInject(fontStyles, { insertAt: 'top' });
};
