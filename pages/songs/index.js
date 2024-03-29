import Head from "next/head"
import matter from "gray-matter"
import fs from 'fs'
import path from "path"
import Link from "../../components/Link";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MusicNote from "@material-ui/icons/MusicNote";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LikeIcon from "@material-ui/icons/Favorite";

import SearchBox from "../../components/searchBox";
import { useSearch } from "../../context/searchContext";
import { Box } from "@material-ui/core";

const SongPage = ({ songs }) => {
  const [{ value }] = useSearch();

  const filteredList = songs.filter(song => {
    const title = song.data.title.replace(/[^a-zA-Z0-9\s]/g, '');
    const artist = song.data.artist.replace(/[^a-zA-Z0-9\s]/g, '');
    const tags = song.data?.tags?.map(tag => tag.replace(/[^a-zA-Z0-9\s]/g, ''));
    if (
      title.toLowerCase().includes(value.toLowerCase()) ||
      artist.toLowerCase().includes(value.toLowerCase()) ||
      tags?.map(x => x.toLowerCase()).some(x => x.includes(value.toLowerCase())) ||
      value === ""
    ) {
      return song;
    }
  });
  return (
    <Container  maxWidth="md" disableGutters={true}>
        <SearchBox />
      <Box mb={6}>
      </Box>
      <List>
        {filteredList.map(song => {
          return (
            <>
              <Link
                key={song.slug}
                href={"/songs/" + song.slug}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNote />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={song.data.title}
                    secondary={song.data.artist}
                  />
                  {/* <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <LikeIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                </ListItem>
              </Link>
              <Divider />
            </>
          );
        })}
      </List>
      {/* <SearchBox /> */}
    </Container>
  );
};

export default SongPage;

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

