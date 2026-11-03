import "@/styles/X.css";
interface XProps {
    id?: string;
    className?: string;
    slot_2_28?: React.ReactNode;
}
const X = (props: XProps) => {
    const { id, className = "", slot_2_28 } = props;

    return (
        <div
            className={["component-2_27", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_27"
                className="Pixso-symbol-2_27 pixso-position-relative"
            >
                {slot_2_28 ?? (
                    <div id="2_28" className="Pixso-vector-2_28"></div>
                )}
            </div>
        </div>
    );
};
export default X;
