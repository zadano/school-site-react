import "@/styles/Search0.css";
interface Search0Props {
    id?: string;
    className?: string;
    slot_2_53?: React.ReactNode;
}
const Search0 = (props: Search0Props) => {
    const { id, className = "", slot_2_53 } = props;

    return (
        <div
            className={["component-2_52", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div
                id="2_52"
                className="Pixso-symbol-2_52 pixso-position-relative"
            >
                {slot_2_53 ?? (
                    <div id="2_53" className="Pixso-vector-2_53"></div>
                )}
            </div>
        </div>
    );
};
export default Search0;
