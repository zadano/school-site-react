import X from "@/components/X";
import Search0 from "@/components/Search0";
import "@/styles/Search.css";
interface SearchProps {
    text_29_2?: string;
    State?: string;
    ValueType?: string;
    id?: string;
    className?: string;
    slot_2_56?: React.ReactNode;
    slot_2_57?: React.ReactNode;
    slot_2_59?: React.ReactNode;
    slot_2_60?: React.ReactNode;
    slot_2_62?: React.ReactNode;
    slot_2_63?: React.ReactNode;
    slot_2_65?: React.ReactNode;
    slot_2_66?: React.ReactNode;
}
const Search = (props: SearchProps) => {
    const {
        text_29_2 = "Value",
        State,
        ValueType,
        id,
        className = "",
        slot_2_56,
        slot_2_57,
        slot_2_59,
        slot_2_60,
        slot_2_62,
        slot_2_63,
        slot_2_65,
        slot_2_66
    } = props;

    return (
        <div
            className={["component-2_54", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div id="2_54" className="Pixso-symbol-2_54">
                {State === "Default" && ValueType === "Filled" && (
                    <div
                        id="2_55"
                        className="stroke-wrapper-2_55 pixso-relative-flex-auto-size"
                    >
                        <div className="Pixso-symbol-2_55 pixso-relative-flex">
                            {slot_2_56 ?? (
                                <p
                                    id="2_56"
                                    className="Pixso-paragraph-2_56 text-single-linebody-base-2_25 pixso-position-relative pixso-h-auto"
                                >
                                    {text_29_2 ?? "Value"}
                                </p>
                            )}
                            {slot_2_57 ?? (
                                <X
                                    id="2_57"
                                    className="Pixso-instance-2_57 pixso-relative-no-shrink"
                                ></X>
                            )}
                        </div>
                        <div className="stroke-2_55"></div>
                    </div>
                )}
                {State === "Disabled" && ValueType === "Filled" && (
                    <div
                        id="2_58"
                        className="stroke-wrapper-2_58 pixso-relative-flex-auto-size"
                    >
                        <div className="Pixso-symbol-2_58 pixso-relative-flex">
                            {slot_2_59 ?? (
                                <p
                                    id="2_59"
                                    className="Pixso-paragraph-2_59 text-single-linebody-base-2_25 pixso-position-relative pixso-h-auto"
                                >
                                    {text_29_2 ?? "Value"}
                                </p>
                            )}
                            {slot_2_60 ?? (
                                <X
                                    id="2_60"
                                    className="Pixso-instance-2_60 pixso-relative-no-shrink"
                                ></X>
                            )}
                        </div>
                        <div className="stroke-2_58"></div>
                    </div>
                )}
                {State === "Default" && ValueType === "Placeholder" && (
                    <div
                        id="2_61"
                        className="stroke-wrapper-2_61 pixso-relative-flex-auto-size"
                    >
                        <div className="Pixso-symbol-2_61 pixso-relative-flex">
                            {slot_2_62 ?? (
                                <p
                                    id="2_62"
                                    className="Pixso-paragraph-2_62 text-single-linebody-base-2_25 pixso-position-relative pixso-h-auto"
                                >
                                    {text_29_2 ?? "Value"}
                                </p>
                            )}
                            {slot_2_63 ?? (
                                <Search0
                                    id="2_63"
                                    className="Pixso-instance-2_63 pixso-relative-no-shrink"
                                ></Search0>
                            )}
                        </div>
                        <div className="stroke-2_61"></div>
                    </div>
                )}
                {State === "Disabled" && ValueType === "Placeholder" && (
                    <div
                        id="2_64"
                        className="stroke-wrapper-2_64 pixso-relative-flex-auto-size"
                    >
                        <div className="Pixso-symbol-2_64 pixso-relative-flex">
                            {slot_2_65 ?? (
                                <p
                                    id="2_65"
                                    className="Pixso-paragraph-2_65 text-single-linebody-base-2_25 pixso-position-relative pixso-h-auto"
                                >
                                    {text_29_2 ?? "Value"}
                                </p>
                            )}
                            {slot_2_66 ?? (
                                <Search0
                                    id="2_66"
                                    className="Pixso-instance-2_66 pixso-relative-no-shrink"
                                ></Search0>
                            )}
                        </div>
                        <div className="stroke-2_64"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Search;
