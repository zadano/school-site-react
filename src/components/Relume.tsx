import "@/styles/Relume.css";
interface RelumeProps {
    id?: string;
    className?: string;
    slot_2_79?: React.ReactNode;
}
const Relume = (props: RelumeProps) => {
    const { id, className = "", slot_2_79 } = props;

    return (
        <div
            className={["component-2_78", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_78"
                className="Pixso-symbol-2_78 pixso-position-relative"
            >
                {slot_2_79 ?? (
                    <div id="2_79" className="Pixso-vector-2_79"></div>
                )}
            </div>
        </div>
    );
};
export default Relume;
