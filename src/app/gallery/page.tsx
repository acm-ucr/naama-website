"use client";

import PictureGallery from "@/components/gallery/PictureGallery";
import JoinCommunity from "@/components/gallery/JoinCommunity";
import Title from "@/components/Title";
import DescriptionText from "@/components/Description";

const Board = () => {
  return (
    <>
        <Title title="Moments with NAAMA UCR" />
        <DescriptionText text="Step into our gallery and relive the highlights of our journey in
      medicine! These snapshots capture the dedication, collaboration, and
      passion that define our community."/>
      <PictureGallery />
      <JoinCommunity />
    </>
  );
};

export default Board;
