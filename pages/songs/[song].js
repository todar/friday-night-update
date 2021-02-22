import marked from "marked";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Song.module.css";

export default function Song({ song }) {
  return (
    <div>
      <Head>
        <title>{song.data.title}</title>
      </Head>
      <Link href={"/songs/"} scroll={false}>↩️</Link>
      <main className={styles.main}>
        <h1 className={styles.title}>{song.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: song.html }} />
        <address rel="author">
          <div>Artist: {song.data.artist}</div>
          <div>Copyright: {song.data.copyright}</div>
        </address>
      </main>
    </div>
  );
}

// This is to let Next know which dynamic pages it needs to pre-render.
export const getStaticPaths = async () => {
  const filenames = fs.readdirSync("songs");
  const paths = filenames.map((filename) => {
    return { params: { song: filename.replace(".md", "") } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {

  marked.setOptions({
    breaks: true
  })
  
  const rawMarkdown = fs
    .readFileSync(path.join("songs", params.song + ".md"))
    .toString();

  const parsedMarkdown = matter(rawMarkdown);

  return {
    props: {
      song: {
        data: parsedMarkdown.data,
        html: marked(parsedMarkdown.content),
      },
    },
  };
};
