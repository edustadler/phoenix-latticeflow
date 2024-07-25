export default function PostTitle({ children }) {
  return (
    <h1
      className="text-blue-500 text-6xl 2xl:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
