export default function formatDate(dateStr) {
  return Intl.DateTimeFormat("us-EN").format(new Date(dateStr));
}
