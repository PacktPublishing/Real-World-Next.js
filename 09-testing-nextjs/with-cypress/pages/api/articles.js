import data from '../../data/articles';

export default (req, res) => {
  res.status(200).json(data);
};
