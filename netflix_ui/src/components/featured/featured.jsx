import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

export default function featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" :  "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comendy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
          </div>
      )}
      <img src="https://c4.wallpaperflare.com/wallpaper/462/921/235/stranger-things-5k-wallpaper-preview.jpg" alt="" />
      <div className="info">
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png" alt="" />
        <span>
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi minus natus ratione laudantium amet deleniti hic, perferendis temporibus, at ipsum. Ex non reprehenderit labore, incidunt architecto provident. Necessitatibus, aliquam?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </span>
      </div>
    </div>
  )
}
