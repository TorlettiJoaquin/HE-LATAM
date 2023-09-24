

export const convertData = (originalDate) => {
const date = new Date(originalDate);

// Definir los nombres de los meses en español
const nameMonth = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic"
];

const day = date.getDate();
const month = nameMonth[date.getMonth()];
const year = date.getFullYear();

const formateDate = day + " " + month + ", " + year;

return formateDate

}
