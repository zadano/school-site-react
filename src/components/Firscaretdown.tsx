import "@/styles/Firscaretdown.css";
interface FirscaretdownProps {
    id?: string;
    className?: string;
    slot_2_31?: React.ReactNode;
}
const Firscaretdown = (props: FirscaretdownProps) => {
    const { id, className = "", slot_2_31 } = props;

    return (
        <div
            className={["component-2_29", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_29"
                className="Pixso-symbol-2_29 pixso-position-relative"
            >
                <div id="2_30" className="Pixso-group-2_30">
                    {slot_2_31 ?? (
                        <div id="2_31" className="Pixso-vector-2_31"></div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Firscaretdown;
