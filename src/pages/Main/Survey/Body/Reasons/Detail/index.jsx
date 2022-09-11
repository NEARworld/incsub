import styles from 'Styles/survey/detail.module.scss';
import detailGenerator from './detailGenerator';

function Detail({ checked, detailRef }) {
  return detailGenerator(styles, checked, detailRef);
}

export default Detail;
