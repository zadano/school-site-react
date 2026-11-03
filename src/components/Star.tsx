import "@/styles/Star.css";
interface StarProps {
    id?: string;
    className?: string;
    slot_2_13?: React.ReactNode;
}
const Star = (props: StarProps) => {
    const { id, className = "", slot_2_13 } = props;

    return (
        <div
            className={["component-2_12", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_12"
                className="Pixso-symbol-2_12 pixso-position-relative"
            >
                {slot_2_13 ?? (
                    <div id="2_13" className="Pixso-vector-2_13"></div>
                )}
            </div>
        </div>
    );
};
export default Star;
