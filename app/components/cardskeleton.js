export default function CardSkeleton({display}, {id}) {
    return (
        <div style={{display: {display}}} id={id} className="centerxy sbpc h-[279px] w-[200px] rounded-[8px]">
            <div className="sipc h-[120px] w-[170px] rounded-[1px] mb-[110px]"></div>
        </div>
    );
}