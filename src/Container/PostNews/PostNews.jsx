import React, {useState} from 'react';
import { LoremIpsum } from "lorem-ipsum";

export default function News(props) {

    const loremIpsum = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    const [generateParagraph, setNewParagraph] = useState(loremIpsum.generateParagraphs(1));
    const [likeButton, setLikeButton] = useState(0);
    const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 20000));
    const [showMore, setShowMore] = useState(false);
    const [buttonComment, setButtonComment] = useState(false);

    const likeButtonEvent = () => {
        setLikeButton(likeButton + 1);

        if (likeButton % 2 === 0) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }

        console.log(likeButton)
    };

    const colorButtonLike = {
      color : `${likeButton % 2 === 0 ? 'black' : 'rgb(237,73,86)'}`,
    };

    const colorButtonComment = {
      color : `${!buttonComment ? 'rgb(179,223,252)' : 'rgb(0,149,246)' }`
    };

    const buttonShowMore = () => {
      setShowMore(true);
    };

    const getComment = (event) => {
        let comment = event.target.value;
        if (comment === '') {
            setButtonComment(false)
        } else {
            setButtonComment(true);
        }
    };

    return (
        <div style={{border: '1px solid rgb(219,219,219)', borderRadius: '6px'}} className={"bg-white mt-3 min-h-[700px] overflow-hidden"}>
            <div className="profile h-11 bg-white flex items-center gap-2 p-2">
                <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                    <img className={"w-full h-full"} src={`${props.image}`} alt=""/>
                </div>
                <span className={`font-semibold cursor-pointer text-sm`}>{`${props.username}`}</span>
            </div>

            <div className="image h-[466px] bg-white">
                <img className={"w-full h-full"} src={`${props.postImage}`} alt=""/>
            </div>

            <div className="caption min-h-[190px]">
                <div className="action bg-white flex p-2 gap-3">

                    <svg style={colorButtonLike} onClick={likeButtonEvent} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 cursor-pointer hover:${likeButton % 2 === 0 ? '' :'!'}!text-slate-400`} fill={`${likeButton % 2 === 0 ? 'none' : 'rgb(237,73,86)' }`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </div>

                <div style={{borderBottom : '1px solid rgb(239,239,239)'}} className="caption-like min-h-max p-2 bg-white">
                    <p className={"text-sm font-semibold"}>{likeCount.toLocaleString()} suka</p>
                    <p className={"text-sm mt-1"}>
                        <span className={"font-semibold"}>{props.username}</span>
                        <span className={`${!showMore ? '' : 'hidden'}`}>{ " " + generateParagraph.substring(0,120) + "..." }</span>
                        <span onClick={buttonShowMore} style={{color: 'rgb(142,142,142)'}} className={`${!showMore ? '' : 'hidden'} cursor-pointer`}>Selengkapnya</span>
                        <span className={`${showMore ? '' : 'hidden'}`}>{" " + generateParagraph}</span>
                    </p>
                    <p className={"text-sm mt-1 cursor-pointer"} style={{color: 'rgb(142,142,142)'}}>
                        <span>Lihat semua {Math.round(Math.random() * 2000).toLocaleString()} komentar</span>
                    </p>
                    <p className={"text-sm mt-2 cursor-pointer"} style={{color: 'rgb(142,142,142)', fontSize:'0.7rem'}}>
                        <span>{Math.round(Math.random() * 10)} JAM YANG LALU</span>
                    </p>
                </div>

                <div className="comment h-10 flex items-center gap-2">
                    <div className="emoticons smMobile:w-[15%] w-[10%] h-full grid items-center justify-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div className="text-input-comment smMobile:w-[70%] w-[80%] h-full">
                        <input onChange={(e) => getComment(e)} className={"w-full h-full outline-none border-none text-sm"} type="text" placeholder={"Tambahkan Komentar"}/>
                    </div>
                    <div className="button smMobile:w-[15%] w-[10%] h-full grid items-center justify-items-center">
                        <span className={`text-sm ${!buttonComment ? 'cursor-default' : 'cursor-pointer'}`} style={colorButtonComment}>Kirim</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
