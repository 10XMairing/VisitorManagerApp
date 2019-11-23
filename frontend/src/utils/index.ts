export function parseDateString(dateStr: string): string {
  if (!dateStr) return "Not Checked Out";

  const temp = new Date(dateStr);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${temp.toLocaleTimeString()} ,  ${temp.toLocaleDateString()}`;
}
