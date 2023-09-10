/** @format */

import React, { useEffect, useState, useRef } from "react";
import { Avatar, Button, Slider, Space } from "antd";
import { PlayCircleFilled } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { audioSelector } from "../redux/reducers/audioReducer";
import TitleComponent from "./TitleComponent";
import { audios } from '../datas/audios'

function PlayerControllerComponent()
{

  const audio = useSelector(audioSelector)
  const [chaps, setChaps] = useState([]);
  const [index, setIndex] = useState(0);


  const playerRef = useRef()


  useEffect(() =>
  {
    // console.log('audio')
    // console.log(audio)

    if (audio) {
      getAllChapters()
    }

  }, [audio])


  const getAllChapters = () =>
  {
    const id = audio.chapsId

    const res = audios.find(element => element.key === id)

    if (res) {
      setChaps(res.chaps)
    }
  }

  // console.log(audio)

  return audio ? (
    <div className="player-controler text-light">
      <div className="row">
        <div className="col">
          <Space>
            <Avatar src={audio.image} size={60} />
            <div>
              <TitleComponent text={audio.title} size={18} color={'#fff'} />
              <p>{audio.authorId}</p>
            </div>
          </Space>
        </div>
        <div className="col text-center">
          <div>
            <Space>
              <Button onClick={() => playerRef.current.play()}
                type="text"
                icon={
                  <PlayCircleFilled
                    style={{
                      fontSize: 32,
                      color: "white",
                    }}
                  />
                }
              />
            </Space>
          </div>

          <div>
            <Space>
              00:00
              <div className="col ">
                <Slider
                  style={{
                    width: "200px",
                  }}
                />
              </div>
              00:00
            </Space>
          </div>
        </div>
        <div className="col text-right">sound control</div>
      </div>
      <audio autoPlay ref={playerRef} src={chaps[index] ? chaps[index].audio : ''} />
    </div>
  ) : <></>
}

export default PlayerControllerComponent;
