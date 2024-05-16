import NewsList from '@/components/news-list';
export default async function NewsPage() {
  const response = await fetch('http://localhost:8080/news');
  const news = await response.json();

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
