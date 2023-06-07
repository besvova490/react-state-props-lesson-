import React from "react";

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

function SongsList() {

  return (
    <ul className="lsn-songs-list">
      {
        PLAY_LIST.map((item, index) => {
          console.log(item, index)
          
          return (
            <li
              className={`lsn-songs-list__item ${index % 2 ? "lsn-songs-list__item_inactive" : ""}`}
              key={`lsn-songs-list__item-${index}`}
            >
              <b>{item.author}</b>
              <i>{item.song}</i>
            </li>
          );
        })
      }
    </ul>
  );
}

export default SongsList;
