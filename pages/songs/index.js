import Head from "next/head"
import matter from "gray-matter"
import fs from 'fs'
import path from "path"
import Link from "next/link"
import styles from '../../styles/Songs.module.css'


export default function Songs({songs}) {
  return (
    <>
      <Head>
        <title>Friday Night Church | Songs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <span className={styles.logo}>
          Friday Night <span>Church</span>
        </span>
        <span>
          
        </span>
      </header>
      <main>
          <nav className={styles.songs}>
            {songs.map(song => (
              <div key={song.slug}>
              <Link  href={`/songs/${song.slug}`} >
                <a className={styles.link }>
                  <div className={styles.icon}>
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>
                  </div>
                  <div className={styles.content}>
                    <span className={styles.title}>{song.data.title}</span>
                    <p className={styles.artist}>{song.data.artist}</p>
                  </div>
                </a>
              </Link>
              <hr />
              </div>
            ))}
          </nav>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  // Get all the file names from the song folder
  const filenames = fs.readdirSync("songs");

  // Create An array of objects, {markdownObject, slug}
  const songs = filenames.map(filename => {
    
    // The raw markdown
    const rawMarkdown = fs
      .readFileSync(path.join("songs", filename))
      .toString();

    // Return the parsed markdown data and the slug name
    // Parsed Markdown is object with all front-matter as well as content (markdown). Note, the markdown is not converted to HTML yet. 
    // @see https://github.com/jonschlinkert/gray-matter
    return {
      data: matter(rawMarkdown).data,
      slug: filename.replace(".md", "")
    };
  });

  // Return the array of {markdown data, slug}
  return {
    props: {
      songs
    }
  };
};

