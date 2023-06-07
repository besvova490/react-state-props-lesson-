import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

// assets
import "../../assets/styles/containers/songs-list.scss";


const PLAY_LIST = [
  {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song:"BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song:"ENTER SANDMAN"
  }
];

function EditableSongsList() {
  const [authorName, setAuthorName] = useState("new author");
  const [songName, setSongName] = useState("new song");
  const [songsToDisplay, setSongsToDisplay] = useState(PLAY_LIST);

  useEffect(() => {
    const savedList = localStorage.getItem("songsToDisplay");

    if (savedList) {
      const listToSave = JSON.parse(savedList);
    
      setSongsToDisplay(listToSave);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("songsToDisplay", JSON.stringify(songsToDisplay));
  }, [songsToDisplay]);

  const handleSubmit = e => {
    e.preventDefault();

    // const newArray = songsToDisplay.map(item => item);
    // newArray.push({
    //   author: authorName,
    //   song: songName,
    // });
    // const newArraySlice = songsToDisplay.slice();
    // console.log(newArray, newArraySlice);
    // setSongsToDisplay(newArray);

    setSongsToDisplay([
      {
        author: authorName,
        song: songName,
      },
      ...songsToDisplay,
    ]);

    setAuthorName("");
    setSongName("");
  }

  // const handleDelete = (index) => {
  //   const newListToSave = [...songsToDisplay];

  //   newListToSave.splice(index, 1)

  //   setSongsToDisplay(newListToSave);
  // }

  const handleDelete = (author) => {
    const newListToSave = songsToDisplay.filter(item => item.author !== author);

    setSongsToDisplay(newListToSave);
  }

  return (
    <section className="lsn-songs-list-wrapper">
      <form
        className="lsn-songs-list__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="lsn-songs-list__input"
          placeholder="Author"
          name="author"
          value={authorName}
          onChange={e => setAuthorName(e.target.value)}
        />
        <input
          type="text"
          name="song"
          className="lsn-songs-list__input"
          placeholder="Song name"
          value={songName}
          onChange={e => setSongName(e.target.value)}
        />
        <button type="submit" className="lsn-songs-list__button">
          Add
        </button>
      </form>
      <ul className="lsn-songs-list">
        {
          songsToDisplay.map((item, index) => {
          
            return (
              <li
                className={`lsn-songs-list__item ${index % 2 ? "lsn-songs-list__item_inactive" : ""}`}
                key={`lsn-songs-list__item-${index}`}
              >
                <img
                  src={`https://picsum.photos/200/300?${index}${item.author}`}
                  alt={`image for ${item.song} song`}
                />
                <div className="lsn-songs-list__item-info">
                  <b>{item.author}</b>
                  <i>{item.song}</i>
                </div>
                <button
                  className="lsn-songs-list__item-delete"
                  // onClick={() => handleDelete(index)}
                  onClick={() => handleDelete(item.author)}
                >
                  <MdDeleteOutline/>
                </button>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default EditableSongsList;
