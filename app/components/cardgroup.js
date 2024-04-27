export default function CardGroup({ children }, width, height) {
    return (
        <div className="centerxy flex-row flex-wrap rounded-sm p-5 gap-10 ">
            {children}
        </div>
    );
}