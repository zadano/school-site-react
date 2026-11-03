import "@/styles/ChevronRight.css";
interface ChevronRightProps {
    id?: string;
    className?: string;
    slot_2_77?: React.ReactNode;
}
const ChevronRight = (props: ChevronRightProps) => {
    const { id, className = "", slot_2_77 } = props;

    return (
        <div
            className={["component-2_76", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_76"
                className="Pixso-symbol-2_76 pixso-position-relative"
            >
                {slot_2_77 ?? (
                    <div id="2_77" className="Pixso-vector-2_77"></div>
                )}
            </div>
        </div>
    );
};
export default ChevronRight;
