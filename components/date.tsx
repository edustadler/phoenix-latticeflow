import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="text-[#418FDE] gilroy-semibold">{format(date, "LLLL	d, yyyy")}</time>;
}
