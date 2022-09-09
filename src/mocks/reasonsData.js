const items = [
  "I didn't realize it was a recurring membership",
  'Found a better solution',
  "It's too expensive",
  'Bugs, things not working properly',
  'I just want to pay for a single plugin',
  'Not using WordPress anymore',
  'Other',
];
const reasonsData = [];

items.map((item, index) => {
  console.log('mapping');
  reasonsData.push({ id: index + 1, data: item });
});
export default reasonsData;
