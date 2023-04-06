const MONTHS = [
  "January",
  "Febrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octorber",
  "November",
  "December",
];

export const parseDate = (datetime) => {
  const [year, month, date] = datetime.split("T")[0].split("-");
  return `${MONTHS[month - 1]} ${date}, ${year}`;
};
