import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About page', 'Luis Herdeth'],
};
export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  );
}
