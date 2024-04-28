export default function TextSkeleton({style, id}, { children }) {
    return (
        <div style={{ display: style }} id={id} className="centerxy sbpc h-[100px] rounded-[8px] bg-blue-700">
            { children }
        </div>
    );
}