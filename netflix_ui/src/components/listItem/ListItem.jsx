import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listItem.scss"

export default function Listitem() {
  return (
    <div className="listItem">
      <img src="https://media.suara.com/pictures/970x544/2022/04/21/88382-yuta-nct-debut-sebagai-aktor-jepang-dalam-film-high-low-the-worst.jpg" alt="" />
      <div className="itemInfo">
        <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
        </div>
        <div  className="itemInfoTop">
          <span>1 hour 30 min</span><br></br>
          <span className="limit">+15</span>
          <span>2022</span>
          </div>
          <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorum!</span>      
      </div>
      <div className="genre">Action</div>
    </div>
  )
}
