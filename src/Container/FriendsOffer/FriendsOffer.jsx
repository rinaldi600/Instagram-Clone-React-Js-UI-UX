import PeopleOne from "../../people/atikh-bana-2c0midsQKe0-unsplash.jpg";

function FriendOffer(props) {
    return (
        <div className={"h-[48px] flex"}>
            <div className={"w-[80%] h-full flex items-center gap-2"}>
                <div className={"w-[32px] h-[32px]"}>
                    <img className={"w-full h-full rounded-full"} src={props.image} alt=""/>
                </div>
                <div>
                    <p className={"text-sm font-semibold"}>{props.username}</p>
                    <p className={"text-xs font-normal"} style={{color: 'rgb(142,142,142)'}}>Baru Di Instagram</p>
                </div>
            </div>
            <div className={"w-[20%] text-center h-full grid items-center"}>
                <span className={"text-xs font-semibold cursor-pointer"} style={{color : 'rgb(0,149,246)'}}>Ikuti</span>
            </div>
        </div>
    )
}

export default FriendOffer;