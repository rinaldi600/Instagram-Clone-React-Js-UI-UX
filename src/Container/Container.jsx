import React, {useEffect, useState} from "react";
import "./Container.css";
import Feed from "./Feed/Feed";
import PeopleOne from "../people/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import News from './PostNews/PostNews';
import FriendOffer from "./FriendsOffer/FriendsOffer";
import {GetPeople, GetFullPeople} from "../ApiPeople/GetPeople";
import InstagramLogo from "../icons/580b57fcd9996e24bc43c521.png";
import MetaLogo from "../icons/Instagram-Meta-Logo-PNG-1.webp";

function Container(props) {

    const [showArrowLeft, setDisplayArrowLeft] = useState(false);
    const [showArrowRight, setDisplayArrowRight] = useState(true);
    let [people, setPeople] = useState([]);

    const scrollLeft = () => {
        const maxScroolLeft = document.getElementById("feed").scrollWidth - document.getElementById("feed").clientWidth;
        const valueScroll = Math.floor(document.getElementById("feed").scrollLeft);
        document.getElementById("feed").style.scrollBehavior = 'smooth';
        document.getElementById("feed").scrollLeft -= 500;
        if (valueScroll <= maxScroolLeft) {
            setDisplayArrowRight(true);
        }
        if (valueScroll <= 0) {
            setDisplayArrowLeft(false);
        }
        console.log(valueScroll);
    };

    const scrollRight = () => {
        const maxScroolLeft = document.getElementById("feed").scrollWidth - document.getElementById("feed").clientWidth;
        const valueScroll = Math.round(document.getElementById("feed").scrollLeft);
        document.getElementById("feed").style.scrollBehavior = 'smooth';
        document.getElementById("feed").scrollLeft += 500;
        if (valueScroll >= maxScroolLeft) {
            setDisplayArrowRight(false);
        }
        setDisplayArrowLeft(true);
        console.log(valueScroll);
        console.log("MAX : " + maxScroolLeft);
    };

    const imageProfile = {
        maxWidth : '60px',
        maxHeight : '60px',
        borderRadius : '50%'
    };

    const inlineDisplay = {
        display : 'inline-block',
        paddingRight : '1px',
        marginBottom : '2px'
    };

    useEffect(() => {
        if (people.length <= 0) {
            props.data(people.length);
        }
        try {
            const response = async () => {
                return await GetPeople();
            };
            response()
                .then((response) => {
                    setPeople(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (e) {
            console.log(e);
        }
    },[]);

    useEffect(() => {
        if (people.length > 0) {
            props.data(people.length);
        }
    });

    return people.length > 0 ? (
        <div className={"smMobile:w-11/12 w-7/12 mx-auto min-h-screen grid gap-5 grid-cols-3 overflow-hidden"}>
            <div className={"col-span-3 lg:col-span-2 mr-2"}>
                <div style={{border: '1px solid rgb(219,219,219)', borderRadius: '6px'}} className={"relative bg-white overflow-hidden"}>
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className={`${showArrowLeft ? '' : 'hidden'} absolute inset-y-1/3 left-0 bg-white grid items-center rounded-full ml-1`}>
                        <svg onClick={scrollLeft} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </div>
                    <div id={"feed"} className={"grid grid-flow-col overflow-hidden h-full"}>
                        {
                            people.map((p) => {
                                return (
                                    <Feed image={p.owner.picture} name={p.owner.firstName}/>
                                )
                            })
                        }
                    </div>
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className={`${showArrowRight ? '' : 'hidden'} absolute inset-y-1/3 right-0 bg-white grid items-center rounded-full mr-1`}>
                        <svg onClick={scrollRight} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>

                <div className="news-feed mb-3">
                    {
                        people.map((p) => {
                            return (
                                <News image={p.owner.picture} username={p.owner.firstName} postImage={p.image}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className={"hidden lg:col-span-1 lg:block"}>
                <div className="profile-instagram flex h-[66px]">
                    <div className="profile w-[80%] h-full flex items-center gap-4">
                        <div className={"w-[66px] h-[66px] rounded-full p-1"}>
                            <img className={"w-full h-full rounded-full"} src={PeopleOne} alt=""/>
                        </div>
                        <div className={"text-sm"}>
                            <p className={"font-semibold"}>rinaldi600</p>
                            <p style={{color : 'rgb(142,142,142)'}}>Rinaldi Hendrawan</p>
                        </div>
                    </div>
                    <div className="switch grid items-center w-[20%] h-full">
                        <p style={{color: 'rgb(0,149,246)'}} className={"cursor-pointer text-xs text-center align-middle font-semibold"}>Alihkan</p>
                    </div>
                </div>
                <div className={"bg-transparent flex justify-between items-center"}>
                    <p className={"text-sm font-semibold cursor-pointer"} style={{color : 'rgb(147,147,147)'}}>Saran Untuk Anda</p>
                    <p className={"text-xs font-semibold cursor-pointer"}>Lihat Semua</p>
                </div>
                <div className="offer-friends">
                    {
                        people.slice(0,5).map((p) => {
                            return (
                                <FriendOffer username={p.owner.firstName} image={p.owner.picture}/>
                            )
                        })
                    }
                </div>
                <div className={"credits h-[115px] mt-[16px]"}>
                    <ul style={{color :'rgb(199,199,199)'}} className={"text-xs"}>
                        <li style={inlineDisplay}>Tentang</li>
                        <li style={inlineDisplay}>&#x2022; Bantuan</li>
                        <li style={inlineDisplay}>&#x2022; Pers</li>
                        <li style={inlineDisplay}>&#x2022; API</li>
                        <li style={inlineDisplay}>&#x2022; Pekerjaan</li>
                        <li style={inlineDisplay}>&#x2022; Privasi</li>
                        <li style={inlineDisplay}>Ketentuan</li>
                        <li style={inlineDisplay}>&#x2022; Lokasi</li>
                        <li style={inlineDisplay}>&#x2022; Bahasa</li>
                    </ul>
                    <p style={{color :'rgb(199,199,199)',paddingRight : '1px'}} className={"text-xs mt-6"}>© 2022 INSTAGRAM CLONE BY REACT JS</p>
                </div>
            </div>
        </div>
    ) : (
        <div className={"min-h-screen w-screen absolute inset-0 grid items-end"}>
            <div className={"h-3/6 w-fit mx-auto relative p-1"}>
                <img className={"max-w-[40%] max-h-[40%] mx-auto"} src={InstagramLogo} alt=""/>
                <img className={"max-w-[70%] max-h-[70%] mx-auto absolute left-0 right-0 bottom-3"} src={MetaLogo} alt=""/>
            </div>
        </div>
    );
}

export default Container;
