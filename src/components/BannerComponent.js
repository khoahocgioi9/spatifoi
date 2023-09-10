import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Card, Col, Image, List, Row, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addAudio } from "../redux/reducers/audioReducer";

const BannerComponent = ({ bannerItem, chapterItem, authorItem }) =>
{
  // if (!bannerItem) {
  //   return <div>Cant find banner</div>;
  // }
  // if (!chapterItem || !chapterItem.chaps) {
  //   return <div>Cant find data chapter</div>;
  // }
  // if (!authorItem) {
  //   return <div>Cant find data author</div>;
  // }

  const dispatch = useDispatch()

  const handleAddAudioToStore = () =>
  {
    // console.log(bannerItem)
    dispatch(addAudio(bannerItem))
  }

  return (
    <>
      <Card>
        <Row>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Image
              key={bannerItem.key}
              src={bannerItem.image}
              className="w-100"
            />
          </Col>
          <Col xs={12} sm={16} md={18} lg={20}>
            <div className="infor" style={{ marginLeft: 20 }}>
              <div
                style={{
                  color: "#212121",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                <div className="title h4 mb-3">{bannerItem.title}</div>
              </div>
              <div>
                Author: <b>{authorItem.name}</b>
                <p>
                  Total chap: <b>{bannerItem.totalChaps}</b>
                </p>
                <p>
                  Category: <b>{bannerItem.type}</b>
                </p>
                <p>Description: {bannerItem.description}</p>
                <button className="btn btn-sm btn-dark" onClick={handleAddAudioToStore} style={{
                  width: 150,
                  height: 42,
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <PlayCircleFilledWhiteIcon
                    style={{
                      cursor: "pointer",
                      fontSize: 24,
                      color: "#2B2730",
                      backgroundColor: "#FFFFFF",
                      borderRadius: " 100%",
                      marginRight: 12
                    }}
                  />
                  Play
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card style={{ marginTop: 20, marginBottom: 40 }}>
        <div className="title h4 mb-3 ">Chapter</div>
        <List
          bordered
          dataSource={chapterItem.chaps.map((chap) => chap.title)}
          renderItem={(item1) => (
            <List.Item>
              <Typography.Text style={{ cursor: "pointer" }}>
                <PlayArrowIcon />
              </Typography.Text>{" "}
              {item1}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default BannerComponent;
