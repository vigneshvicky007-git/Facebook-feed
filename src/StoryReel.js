import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.insider.com/57fbbe4f8109ee77228b472c?width=600&format=jpeg&auto=webp"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJrTK_WF0xvcpRxENl30Xf1xmUbhuNbTMJw&usqp=CAU"
        title="mark zuckerberg"
      />
      <Story
        image="https://www.zoomnews.in/uploads_2019/newses/tesla_217675634_sm.webp"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        title="elon musk"
      />
      <Story
        image="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ldngadvff4rdr3fd_1626796233.jpeg"
        profileSrc="https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg"
        title="jeff bezos"
      />
      <Story
        image="https://observer.com/wp-content/uploads/sites/2/2019/02/gettyimages-1086116476.jpg?quality=80"
        profileSrc="https://cdn.vox-cdn.com/thumbor/LABg-ttLK4Vk5CTMIz7ICRj7n0c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19985553/VRG_ILLO_4028_VC_Sundar.jpg"
        title="sunder pichai"
      />
      <Story
        image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fimages.forbes.com%2Fmedia%2F2016%2F07%2F26%2F0726_forbes-cover-instagram-systrom-colleges-pokemon-go-08232016_1000x1292.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/982345946263515142/k_4l7LHR.jpg"
        title="kevin systrom"
      />
    </div>
  );
}

export default StoryReel;
