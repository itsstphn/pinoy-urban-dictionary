import moment from "moment";

export function formatDate(date) {
  return moment(date).format("MMMM D, YYYY");
}
