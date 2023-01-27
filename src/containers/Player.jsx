import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import NotFound from "../containers/NotFound";
import "../assets/styles/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const { playing = [] } = props;

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <>
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="Player-back" onClick={() => props.history.goBack()}>
          <button type="button">Regresar</button>
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispacthToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispacthToProps)(Player);
