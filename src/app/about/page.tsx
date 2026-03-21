// The About Us page is the same as the homepage on go.parlia.com
// Redirect to home
import { redirect } from "next/navigation";

export default function AboutPage() {
  redirect("/");
}
