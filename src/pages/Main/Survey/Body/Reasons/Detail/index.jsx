import { useEffect } from 'react';
import styles from 'Styles/survey/detail.module.scss';
import detailGenerator from './detailGenerator';

function Detail({ checked, detailRef }) {
  useEffect(() => {
    console.log('Detail', checked);
  });
  return detailGenerator(styles, checked, detailRef);
}

export default Detail;
