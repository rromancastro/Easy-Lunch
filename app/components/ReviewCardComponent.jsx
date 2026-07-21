import { IoIosStar } from "react-icons/io"

export const ReviewCardComponent = ({opacity, onClick, opinion, reviewStatus, reviewTime, userDesc, name, imageletra}) => {
    return <article onClick={onClick} style={{ opacity: opacity }} className="sixthSectionCard">
        <div style={{ opacity: opacity}} className="sixthSectionCardImage">
            <p>{imageletra}</p>
        </div>
        <div style={{ opacity: opacity }} className="sixthSectionCardContent">
            <p className="sixthSectionCardName">{name}</p>
            <p className="sixthSectionCardDesc">{userDesc}</p>
            <div className="sixthSectionCardInfo">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p>
                    {reviewTime}
                </p>
                <p>{reviewStatus}</p>
            </div>
            <p className="sixthSectionCardOpinion">{opinion}</p>
        </div>
    </article>
}
