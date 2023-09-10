import React, { useEffect, useState } from "react";
import { poster } from "../../datas/poster";
import CategoryComponent from "../../components/CategoryComponent";

function Podcast() {
    const [topPodcastAudios, setTopPodcastAudios] = useState([]);

    useEffect(() => {
      getTopPodcastAudios();
    }, []);
  
    const getTopPodcastAudios = () => {
      const podcastAudios = poster.filter((item) => item.type === "Podcast");
  
      const sortedPodcastAudios = podcastAudios.sort(
        (a, b) => b.listens - a.listens
      );
  
      const topPodcastItems = sortedPodcastAudios.slice(0, 20);
  
      setTopPodcastAudios(topPodcastItems);
    };
  return (
    <div>
      <div className="italic" style={{ marginBottom: 100 }}>
      <CategoryComponent
        title={"Top Podcast"}
        data={topPodcastAudios}
      />
    </div>
    </div>
  );
}

export default Podcast;
