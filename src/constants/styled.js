import styled from "styled-components";
const widget_font_title_size = "16px";
const widget_font_content_size = "20px";
const BLACK = "#000000";
const WHITE = "#FFFFFF";
const BLUE = "#0000FF";
const RED = "#FF0000";
const GRAY = "#1e272e";
const GRAYSUAVE = "#cccccc";

const Widget = styled.div`
  margin: 16px;
  border-radius: 8px;
  ${(props) =>
    props.movil === false &&
    "@media screen and (max-width: 992px) { display: none; }"}
  background: ${(props) => (props.isDarkMode ? BLACK : WHITE)};
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
`;

const WidgetTitle = styled.h2`
  margin: 8px;
  padding: 16px;
  padding-bottom: 0;
  font-size: ${widget_font_title_size};
  font-weight: 500;
`;

const WidgetContent = styled.div`
  margin: 0px;
  padding: 16px;
  padding-top: 0;
  font-size: ${widget_font_content_size};
`;

const ULIMG = styled.ul`
  margin: 0;
  padding: 0;
  color: ${WHITE};
  & > li {
    position: relative;
    border-radius: 8px;
    margin-bottom: 16px;
    height: 156px;
    overflow: hidden;
    &:hover a img {
      opacity: 0.3;
    }
    & > a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
    & > div {
      width: 100%;
      position: absolute;
      padding: 16px;
      bottom: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
      & > a {
        color: ${WHITE};
        text-decoration: none;
      }
    }
  }
`;

const Destacado = styled.div`
  & > img {
    width: 100%;
    display: block;
    border-radius: 4px;
  }
  & > a h3 {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    padding: 16px 0;
    transition: all 0.3s ease;
    &:hover {
      color: ${RED};
    }
  }
  & > p {
    margin: 0;
    padding: 8px 16px;
    font-size: 13px;
    line-height: 1.7;
    font-weight: 500;
    box-shadow: 3px 0 inset #ef5777;
  }
`;

const TagsCloud = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  & > li {
    list-style: none;
    width: 50%;
    & > a {
      padding: 6px 8px;
      margin-right: 6px;
      margin-bottom: 6px;
      font-size: 12px;
      border-radius: 4px;
      font-weight: 700;
      background: rgba(30, 39, 46, 0.1);
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;
      & > span {
        opacity: 0.5;
      }
      &:hover {
        background: ${(props) => (props.isDarkMode ? "#11171d" : RED)};
        color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
      }
      background: ${(props) => (props.isDarkMode ? GRAY : "#1E272E1A")};
      color: ${(props) => (props.isDarkMode ? WHITE : "#1E272EBC")};
    }
    @media screen and (max-width: 768px) {
      width: 33.333%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;
const Seccion = styled.div`
  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  background: inherit;
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
`;

const HeadLine = styled.div`
  padding: 16px;
  & > h2 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #1e272e;
    opacity: 0.5;
  }
  background: inherit;
  color: ${(props) => (props.isDarkMode ? GRAYSUAVE : GRAYSUAVE)};
`;
const NavigationLine = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  margin: 16px;
  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  & > a {
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    padding: 8px 16px;
    transition: all 0.3s ease;
    background-color: transparent;
    &:-webkit-any-link {
      cursor: pointer;
    }
  }
  background: inherit;
  color: ${(props) => (props.isDarkMode ? GRAYSUAVE : GRAYSUAVE)};
`;

const AnimeItemOuter = styled.div`
  width: 200px;
  position: absolute;
  left: 50%;
  top: 10%;
  padding: 16px;
  background: #1e272e;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  z-index: 201;
  line-height: 1.7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: scale(0.95);
  opacity: 0;
  z-index: 301;
  pointer-events: none;
  transition: all 0.3s ease;
  border-radius: 8px;

  & > p {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const AnimeItemCardTitle = styled.a`
  & > h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 16px;
    text-align: center;
    color: #1e272e;
    transition: all 0.3s ease;
    font-weight: 500;
    line-height: 20px;
    display: -webkit-box;
    height: 55px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &:hover > h3 {
    color: #ef5777;
  }
`;

const AnimeItemCardImage = styled.div`
  & > a {
    display: block;
    overflow: hidden;
  }

  & > a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 8px;
  }

  & > a:hover img {
    transform: scale(0.95);
  }
`;

const BloqueStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const AnimeItemCard = styled.div`
  margin: 16px;
  position: relative;
  max-width: 100%;
  &:hover ${AnimeItemOuter} {
    transform: scale(1);
    opacity: 1;
    z-index: 301;
  }
`;

export {
  WidgetContent,
  WidgetTitle,
  Widget,
  ULIMG,
  TagsCloud,
  Destacado,
  Seccion,
  HeadLine,
  NavigationLine,
  AnimeItemOuter,
  AnimeItemCard,
  AnimeItemCardTitle,
  AnimeItemCardImage,
  BloqueStyle,
};
