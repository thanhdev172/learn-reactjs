import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      src: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
      title: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
    },
    {
      id: 2,
      src: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg",
      title: "Top 100 Nhạc Rap Việt Nam Hay Nhất",
    },
    {
      id: 3,
      src: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/c/e/7/dce7d09905fd4a7a281125ca2a34fa3a.jpg",
      title: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
