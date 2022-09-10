import item2 from './items/item_2';
import item_4 from './items/item_4';

function detailGenerator(styles, checked, detailRef) {
  const data = { styles, detailRef };
  if (checked === 2) return item2(data);
  if (checked === 4) return item_4(data);
  return null;
}

export default detailGenerator;
