import React, {Fragment, useEffect} from "react";
import "./Feed.css";


function Feed(props) {
    return (
        <Fragment>
            <div className={"stories-feed p-2 bg-white h-max grid items-center px-2"}>
                <div className={"people w-max"}>
                    <div className={"profile-container w-fit p-1"}>
                        <img src={props.image} alt=""/>
                    </div>
                    <p className={"text-center"}>{props.name}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Feed;