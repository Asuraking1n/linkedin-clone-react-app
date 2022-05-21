import styled from "styled-components";
import EventIcon from '@material-ui/icons/Event';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import NotesIcon from '@material-ui/icons/Notes';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PanToolIcon from '@material-ui/icons/PanTool';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Main = (props) => {
  return <Container>
    <Sharebox>
      <div>
        <img src="/images/user.svg" alt="" />
        <button>Start a post</button>
      </div>
      <div>
        <button>
          <PhotoSizeSelectActualIcon color="primary" style={{margin:"0 4px 0 -2px"}}/>
          <span>Photo</span>
        </button>
        <button>
          <EventIcon style={{ margin:"0 4px 0 -2px",color: "green" }} />
          <span>Video</span>
        </button>
        <button>
          <PhotoSizeSelectActualIcon style={{margin:"0 4px 0 -2px", color: "orange" }} />
          <span>Event</span>
        </button>
        <button>
          <NotesIcon style={{margin:"0 4px 0 -2px", color: "red" }} />
          <span>Write artical</span>
        </button>


      </div></Sharebox>
      <div>
        <Artical><Sharedactor>
          <div>
            <img src="images/profile.jpg" alt="" />
            <div>
              <span>Nishant Tiwari</span>
              <span>nishant88tiwari@gmail.com          <b>follows</b></span>
              <span>25 june</span>
            </div>
          </div>
          <button>
           <MoreHorizIcon/>
          </button>
        </Sharedactor>
        <Description>
          This is my linkedin clone ❤️, Hope you like it ☣️ 
        </Description>
        <Sharedimg>
          <div >
            <img src="images/card1.jpg" alt="" />
          </div>
        </Sharedimg>
        <Socialcount>
        
          <li>
            <button>
              <ThumbUpAltIcon style={{color:"blue",}}/>
              <PanToolIcon style={{color:"green",height:"21px"}}/>
              <span>75</span>
            </button>
          </li>
          <li><div>
            2 comments
          </div></li>
        </Socialcount>
        <Socialaction>
        <button>
        <ThumbUpAltOutlinedIcon style={{color:"blue"}}/>
        <span>Like</span>
        
        </button>
        <button>
          <CommentRoundedIcon style={{color:"blue"}}/>
           <span>comments</span>
        </button>
        <button>
          <ShareRoundedIcon style={{color:"blue"}}/>
           <span>share</span>
        </button>
        <button>
          <SendRoundedIcon style={{color:"blue"}}/>
           <span>sent</span>
        </button>
        </Socialaction>
        </Artical>
      </div>
  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const Sharebox = styled(CommonCard)`
display: flex;
flex-direction: column;
color:#95ab7b;
margin: 0 0 8px;
div {
  button{
  outline:none;
  line-height: 1.5;
  min-height:48px;
  background:transparent;
  color: rgba(0,0,0,0.6);
  font-size: 14px;
  border:none ;
  display: flex;
  align-items: center;
  font-weight:600;
}
&:first-child{
display: flex;
align-items: center;
padding: 8px 16px 0px 16px;
img {
  width:48px;
  border-radius:50%;
  margin-right:8px;
}
button {
  margin:4px 0;
  flex-grow:1;
  border-radius: 35px;
  border:1px solid rgba(0,0,0,0.15);
  background-color: #fff;
  text-align:left;
}
}
&:nth-child(2){
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  padding-bottom: 4px;
  button{
    span{
      color:#70b5f9;
    }
  }
}
}
`
const Artical = styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`
const Sharedactor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display:flex;
div {
  margin-right:12px;
  flex-grow:1;
  overflow: hidden;
  display: flex;
  text-decoration: none;

  img {
    width: 48px;
    height: 48px;

  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-grow:1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;

    span{
      text-align:left;
      &:first-child {
        font-size: 34px;
        font-weight: 800;
        color:rgba(0,0,0,1);

      }
      &:nth-child(n+1){
        font-size:12px;
        color:rgba(0,0,0,0.6);
      }
      
      }
    }
  }
  
button{
  position: absolute;
  right: 12px;
  top:0;
  background: transparent;
  border:none;
  outline:none;
}

`
const Description = styled.div`
padding: 0;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align:left;
`
const Sharedimg = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position:relative;
background-color:#f9fafb ;
img {
  object-fit: contain;
  width: 100%;
  height: 100%;

}
`
const Socialcount = styled.ul`
line-height: 1.3;
display: flex;
align-items: flex-start;
overflow: auto;
margin: 0 10px;
padding: 8px 0;
border-bottom:1px solid #e9e5df;
list-style: none;

li {
  margin-right: 5px;
  font-size: 15px;
  button{
    display: flex;
    outline: none;
    border: none;
  }
}
`
const Socialaction = styled.div`
align-items: center;
display:flex;
justify-content:flex-start;
margin:0;
min-height:40px;
padding: 4px 8px;

button{
  display:inline-flex;
  align-items:center;
  padding:8px;
  color:blue;
  outline: none;
  border: none;
  @media (min-width:768px){
    span{
      margin-left:8px;
    }
  }
}
`













