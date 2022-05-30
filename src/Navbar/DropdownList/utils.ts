const convertDropdownValue = (dropdownvalue: string): string => {
  const now = 'NOW - ';
  switch (dropdownvalue) {
    case '1 day':
      return `${now}1day`;
    case '7 days':
      return `${now}7days`;
    case '15 days':
      return `${now}15days`;
    case '30 days':
      return `${now}30days`;
      case '60 days':
        return `${now}60days`;
    default:
      return `${now}1day`;
  }
};

export default convertDropdownValue;
