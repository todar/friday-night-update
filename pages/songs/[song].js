import marked from "marked";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Head from "next/head";


import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const headerStyle = {
  paddingTop: "10px"
};

const Song = ({ song: {data, htmlString} }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | ${data.artist}`}</title>
        <meta
          title="description"
          content={`Lyrics to ${data.title} by ${data.artist}`}
        />
      </Head>

      <Container>
        <header style={headerStyle}>
          <Box my={3}>
            <Typography variant="h4" component="h1">
              {data.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {data.artist}
            </Typography>
          </Box>
        </header>
        <Divider style={{ background: "#ffd600" }} />
        <Typography variant="body1">
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </Typography>
        <Typography variant="caption">
          <div className="caption">{data.copyright}</div>
        </Typography>
      </Container>
    </>
  );
};

export default Song;


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
        htmlString: marked(parsedMarkdown.content),
      },
    },
  };
};
