const formatDate = (date: Date): string => {
  const _date = new Date(date);
  return _date.toLocaleDateString('pt-BR');
};

export default formatDate;
