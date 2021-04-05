import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const YT_API_KEY = "KEY_HERE";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.searchYT("cats");
    console.log(DotEnv);
  }

  searchYT(term) {
    YTSearch({ key: YT_API_KEY, term: term }, (videos) =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    const search = _.debounce((term) => {
      this.searchYT(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => search(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
