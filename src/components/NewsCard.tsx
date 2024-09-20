import styled from "styled-components";

const NewsCardWrapper = styled.div`
  border-radius: 12px;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.19);
  padding: 8px;
  text-align: justify;

  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  object-fit: cover;
`;

// const Title = styled.p``;

const P = styled.p`
  display: flex;
  align-items: center;
`;

interface NewsCardProps {
  author: string;
  title: string;
  urlToImg: string;
  url: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  author,
  title,
  urlToImg,
  url,
  date,
}) => {
  const handleClickNews = () => {
    console.log(url);
    window.open(url, "_blank");
  };
  return (
    <NewsCardWrapper onClick={handleClickNews}>
      <ImgWrapper>
        <Img src={urlToImg} alt="Photo" width={400} />
      </ImgWrapper>
      <p>{title}</p>
      <P>Penulis: {author}</P>
      <P>Pada: {date}</P>
    </NewsCardWrapper>
  );
};

export default NewsCard;
