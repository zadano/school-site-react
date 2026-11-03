import Relume from "@/components/Relume";
import "@/styles/Button.css";
interface ButtonProps {
    Alternate?: string;
    Iconposition?: string;
    Small?: string;
    Style?: string;
    id?: string;
    className?: string;
    slot_2_85?: React.ReactNode;
    slot_2_87?: React.ReactNode;
    slot_2_88?: React.ReactNode;
    slot_2_90?: React.ReactNode;
    slot_2_91?: React.ReactNode;
    slot_2_93?: React.ReactNode;
    slot_2_95?: React.ReactNode;
    slot_2_97?: React.ReactNode;
    slot_2_98?: React.ReactNode;
    slot_2_100?: React.ReactNode;
    slot_2_101?: React.ReactNode;
    slot_2_103?: React.ReactNode;
    slot_2_105?: React.ReactNode;
    slot_2_107?: React.ReactNode;
    slot_2_108?: React.ReactNode;
    slot_2_110?: React.ReactNode;
    slot_2_111?: React.ReactNode;
    slot_2_113?: React.ReactNode;
    slot_2_115?: React.ReactNode;
    slot_2_117?: React.ReactNode;
    slot_2_118?: React.ReactNode;
    slot_2_120?: React.ReactNode;
    slot_2_121?: React.ReactNode;
    slot_2_123?: React.ReactNode;
    slot_2_125?: React.ReactNode;
    slot_2_127?: React.ReactNode;
    slot_2_128?: React.ReactNode;
    slot_2_130?: React.ReactNode;
    slot_2_131?: React.ReactNode;
    slot_2_133?: React.ReactNode;
    slot_2_135?: React.ReactNode;
    slot_2_137?: React.ReactNode;
    slot_2_138?: React.ReactNode;
    slot_2_140?: React.ReactNode;
    slot_2_141?: React.ReactNode;
    slot_2_143?: React.ReactNode;
    slot_2_145?: React.ReactNode;
    slot_2_147?: React.ReactNode;
    slot_2_148?: React.ReactNode;
    slot_2_150?: React.ReactNode;
    slot_2_151?: React.ReactNode;
    slot_2_153?: React.ReactNode;
    slot_2_155?: React.ReactNode;
    slot_2_157?: React.ReactNode;
    slot_2_158?: React.ReactNode;
    slot_2_160?: React.ReactNode;
    slot_2_161?: React.ReactNode;
    slot_2_163?: React.ReactNode;
    slot_2_165?: React.ReactNode;
    slot_2_167?: React.ReactNode;
    slot_2_168?: React.ReactNode;
    slot_2_170?: React.ReactNode;
    slot_2_171?: React.ReactNode;
    slot_2_173?: React.ReactNode;
    slot_2_175?: React.ReactNode;
    slot_2_177?: React.ReactNode;
    slot_2_178?: React.ReactNode;
    slot_2_180?: React.ReactNode;
    slot_2_181?: React.ReactNode;
    slot_2_183?: React.ReactNode;
    slot_2_185?: React.ReactNode;
    slot_2_187?: React.ReactNode;
    slot_2_188?: React.ReactNode;
    slot_2_190?: React.ReactNode;
    slot_2_191?: React.ReactNode;
    slot_2_193?: React.ReactNode;
    slot_2_195?: React.ReactNode;
    slot_2_197?: React.ReactNode;
    slot_2_198?: React.ReactNode;
    slot_2_200?: React.ReactNode;
    slot_2_201?: React.ReactNode;
    slot_2_203?: React.ReactNode;
    slot_2_205?: React.ReactNode;
    slot_2_207?: React.ReactNode;
    slot_2_208?: React.ReactNode;
    slot_2_210?: React.ReactNode;
    slot_2_211?: React.ReactNode;
    slot_2_213?: React.ReactNode;
    slot_2_215?: React.ReactNode;
    slot_2_217?: React.ReactNode;
    slot_2_218?: React.ReactNode;
    slot_2_220?: React.ReactNode;
    slot_2_221?: React.ReactNode;
    slot_2_223?: React.ReactNode;
}
const Button = (props: ButtonProps) => {
    const {
        Alternate,
        Iconposition,
        Small,
        Style,
        id,
        className = "",
        slot_2_85,
        slot_2_87,
        slot_2_88,
        slot_2_90,
        slot_2_91,
        slot_2_93,
        slot_2_95,
        slot_2_97,
        slot_2_98,
        slot_2_100,
        slot_2_101,
        slot_2_103,
        slot_2_105,
        slot_2_107,
        slot_2_108,
        slot_2_110,
        slot_2_111,
        slot_2_113,
        slot_2_115,
        slot_2_117,
        slot_2_118,
        slot_2_120,
        slot_2_121,
        slot_2_123,
        slot_2_125,
        slot_2_127,
        slot_2_128,
        slot_2_130,
        slot_2_131,
        slot_2_133,
        slot_2_135,
        slot_2_137,
        slot_2_138,
        slot_2_140,
        slot_2_141,
        slot_2_143,
        slot_2_145,
        slot_2_147,
        slot_2_148,
        slot_2_150,
        slot_2_151,
        slot_2_153,
        slot_2_155,
        slot_2_157,
        slot_2_158,
        slot_2_160,
        slot_2_161,
        slot_2_163,
        slot_2_165,
        slot_2_167,
        slot_2_168,
        slot_2_170,
        slot_2_171,
        slot_2_173,
        slot_2_175,
        slot_2_177,
        slot_2_178,
        slot_2_180,
        slot_2_181,
        slot_2_183,
        slot_2_185,
        slot_2_187,
        slot_2_188,
        slot_2_190,
        slot_2_191,
        slot_2_193,
        slot_2_195,
        slot_2_197,
        slot_2_198,
        slot_2_200,
        slot_2_201,
        slot_2_203,
        slot_2_205,
        slot_2_207,
        slot_2_208,
        slot_2_210,
        slot_2_211,
        slot_2_213,
        slot_2_215,
        slot_2_217,
        slot_2_218,
        slot_2_220,
        slot_2_221,
        slot_2_223
    } = props;

    return (
        <div
            className={["component-2_83", className].filter(Boolean).join(" ")}
            id={id}
        >
            <div id="2_83" className="Pixso-symbol-2_83">
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_84"
                            className="stroke-wrapper-2_84 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_84 pixso-relative-flex">
                                {slot_2_85 ?? (
                                    <p
                                        id="2_85"
                                        className="Pixso-paragraph-2_85 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_84"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_86"
                            className="stroke-wrapper-2_86 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_86 pixso-relative-flex">
                                {slot_2_87 ?? (
                                    <Relume
                                        id="2_87"
                                        className="Pixso-instance-2_87 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_88 ?? (
                                    <p
                                        id="2_88"
                                        className="Pixso-paragraph-2_88 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_86"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_89"
                            className="stroke-wrapper-2_89 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_89 pixso-relative-flex">
                                {slot_2_90 ?? (
                                    <p
                                        id="2_90"
                                        className="Pixso-paragraph-2_90 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_91 ?? (
                                    <Relume
                                        id="2_91"
                                        className="Pixso-instance-2_91 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_89"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_92"
                            className="stroke-wrapper-2_92 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_92 pixso-relative-flex">
                                {slot_2_93 ?? (
                                    <Relume
                                        id="2_93"
                                        className="Pixso-instance-2_93 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_92"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_94"
                            className="stroke-wrapper-2_94 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_94 pixso-relative-flex">
                                {slot_2_95 ?? (
                                    <p
                                        id="2_95"
                                        className="Pixso-paragraph-2_95 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_94"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_96"
                            className="stroke-wrapper-2_96 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_96 pixso-relative-flex">
                                {slot_2_97 ?? (
                                    <Relume
                                        id="2_97"
                                        className="Pixso-instance-2_97 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_98 ?? (
                                    <p
                                        id="2_98"
                                        className="Pixso-paragraph-2_98 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_96"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_99"
                            className="stroke-wrapper-2_99 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_99 pixso-relative-flex">
                                {slot_2_100 ?? (
                                    <p
                                        id="2_100"
                                        className="Pixso-paragraph-2_100 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_101 ?? (
                                    <Relume
                                        id="2_101"
                                        className="Pixso-instance-2_101 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_99"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_102"
                            className="stroke-wrapper-2_102 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_102 pixso-relative-flex">
                                {slot_2_103 ?? (
                                    <Relume
                                        id="2_103"
                                        className="Pixso-instance-2_103 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_102"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_104"
                            className="stroke-wrapper-2_104 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_104 pixso-relative-flex">
                                {slot_2_105 ?? (
                                    <p
                                        id="2_105"
                                        className="Pixso-paragraph-2_105 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_104"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_106"
                            className="stroke-wrapper-2_106 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_106 pixso-relative-flex">
                                {slot_2_107 ?? (
                                    <Relume
                                        id="2_107"
                                        className="Pixso-instance-2_107 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_108 ?? (
                                    <p
                                        id="2_108"
                                        className="Pixso-paragraph-2_108 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_106"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_109"
                            className="stroke-wrapper-2_109 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_109 pixso-relative-flex">
                                {slot_2_110 ?? (
                                    <p
                                        id="2_110"
                                        className="Pixso-paragraph-2_110 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_111 ?? (
                                    <Relume
                                        id="2_111"
                                        className="Pixso-instance-2_111 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_109"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_112"
                            className="stroke-wrapper-2_112 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_112 pixso-relative-flex">
                                {slot_2_113 ?? (
                                    <Relume
                                        id="2_113"
                                        className="Pixso-instance-2_113 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_112"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_114"
                            className="stroke-wrapper-2_114 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_114 pixso-relative-flex">
                                {slot_2_115 ?? (
                                    <p
                                        id="2_115"
                                        className="Pixso-paragraph-2_115 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_114"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_116"
                            className="stroke-wrapper-2_116 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_116 pixso-relative-flex">
                                {slot_2_117 ?? (
                                    <Relume
                                        id="2_117"
                                        className="Pixso-instance-2_117 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_118 ?? (
                                    <p
                                        id="2_118"
                                        className="Pixso-paragraph-2_118 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_116"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_119"
                            className="stroke-wrapper-2_119 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_119 pixso-relative-flex">
                                {slot_2_120 ?? (
                                    <p
                                        id="2_120"
                                        className="Pixso-paragraph-2_120 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_121 ?? (
                                    <Relume
                                        id="2_121"
                                        className="Pixso-instance-2_121 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_119"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_122"
                            className="stroke-wrapper-2_122 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_122 pixso-relative-flex">
                                {slot_2_123 ?? (
                                    <Relume
                                        id="2_123"
                                        className="Pixso-instance-2_123 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_122"></div>
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_124"
                            className="Pixso-symbol-2_124 pixso-relative-flex-auto-size"
                        >
                            {slot_2_125 ?? (
                                <p
                                    id="2_125"
                                    className="Pixso-paragraph-2_125 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_126"
                            className="Pixso-symbol-2_126 pixso-relative-flex-auto-size"
                        >
                            {slot_2_127 ?? (
                                <Relume
                                    id="2_127"
                                    className="Pixso-instance-2_127 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_128 ?? (
                                <p
                                    id="2_128"
                                    className="Pixso-paragraph-2_128 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_129"
                            className="Pixso-symbol-2_129 pixso-relative-flex-auto-size"
                        >
                            {slot_2_130 ?? (
                                <p
                                    id="2_130"
                                    className="Pixso-paragraph-2_130 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_131 ?? (
                                <Relume
                                    id="2_131"
                                    className="Pixso-instance-2_131 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_132"
                            className="Pixso-symbol-2_132 pixso-relative-flex-auto-size"
                        >
                            {slot_2_133 ?? (
                                <Relume
                                    id="2_133"
                                    className="Pixso-instance-2_133 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_134"
                            className="Pixso-symbol-2_134 pixso-relative-flex-auto-size"
                        >
                            {slot_2_135 ?? (
                                <p
                                    id="2_135"
                                    className="Pixso-paragraph-2_135 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_136"
                            className="Pixso-symbol-2_136 pixso-relative-flex-auto-size"
                        >
                            {slot_2_137 ?? (
                                <Relume
                                    id="2_137"
                                    className="Pixso-instance-2_137 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_138 ?? (
                                <p
                                    id="2_138"
                                    className="Pixso-paragraph-2_138 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_139"
                            className="Pixso-symbol-2_139 pixso-relative-flex-auto-size"
                        >
                            {slot_2_140 ?? (
                                <p
                                    id="2_140"
                                    className="Pixso-paragraph-2_140 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_141 ?? (
                                <Relume
                                    id="2_141"
                                    className="Pixso-instance-2_141 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_142"
                            className="Pixso-symbol-2_142 pixso-relative-flex-auto-size"
                        >
                            {slot_2_143 ?? (
                                <Relume
                                    id="2_143"
                                    className="Pixso-instance-2_143 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_144"
                            className="Pixso-symbol-2_144 pixso-relative-flex-auto-size"
                        >
                            {slot_2_145 ?? (
                                <p
                                    id="2_145"
                                    className="Pixso-paragraph-2_145 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_146"
                            className="Pixso-symbol-2_146 pixso-relative-flex-auto-size"
                        >
                            {slot_2_147 ?? (
                                <Relume
                                    id="2_147"
                                    className="Pixso-instance-2_147 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_148 ?? (
                                <p
                                    id="2_148"
                                    className="Pixso-paragraph-2_148 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_149"
                            className="Pixso-symbol-2_149 pixso-relative-flex-auto-size"
                        >
                            {slot_2_150 ?? (
                                <p
                                    id="2_150"
                                    className="Pixso-paragraph-2_150 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_151 ?? (
                                <Relume
                                    id="2_151"
                                    className="Pixso-instance-2_151 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "False" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_152"
                            className="Pixso-symbol-2_152 pixso-relative-flex-auto-size"
                        >
                            {slot_2_153 ?? (
                                <Relume
                                    id="2_153"
                                    className="Pixso-instance-2_153 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_154"
                            className="stroke-wrapper-2_154 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_154 pixso-relative-flex">
                                {slot_2_155 ?? (
                                    <p
                                        id="2_155"
                                        className="Pixso-paragraph-2_155 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_154"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_156"
                            className="stroke-wrapper-2_156 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_156 pixso-relative-flex">
                                {slot_2_157 ?? (
                                    <Relume
                                        id="2_157"
                                        className="Pixso-instance-2_157 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_158 ?? (
                                    <p
                                        id="2_158"
                                        className="Pixso-paragraph-2_158 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_156"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_159"
                            className="stroke-wrapper-2_159 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_159 pixso-relative-flex">
                                {slot_2_160 ?? (
                                    <p
                                        id="2_160"
                                        className="Pixso-paragraph-2_160 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_161 ?? (
                                    <Relume
                                        id="2_161"
                                        className="Pixso-instance-2_161 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_159"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_162"
                            className="stroke-wrapper-2_162 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_162 pixso-relative-flex">
                                {slot_2_163 ?? (
                                    <Relume
                                        id="2_163"
                                        className="Pixso-instance-2_163 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_162"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_164"
                            className="stroke-wrapper-2_164 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_164 pixso-relative-flex">
                                {slot_2_165 ?? (
                                    <p
                                        id="2_165"
                                        className="Pixso-paragraph-2_165 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_164"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_166"
                            className="stroke-wrapper-2_166 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_166 pixso-relative-flex">
                                {slot_2_167 ?? (
                                    <Relume
                                        id="2_167"
                                        className="Pixso-instance-2_167 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_168 ?? (
                                    <p
                                        id="2_168"
                                        className="Pixso-paragraph-2_168 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_166"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_169"
                            className="stroke-wrapper-2_169 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_169 pixso-relative-flex">
                                {slot_2_170 ?? (
                                    <p
                                        id="2_170"
                                        className="Pixso-paragraph-2_170 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_171 ?? (
                                    <Relume
                                        id="2_171"
                                        className="Pixso-instance-2_171 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_169"></div>
                        </div>
                    )}
                {Style === "Primary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_172"
                            className="stroke-wrapper-2_172 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_172 pixso-relative-flex">
                                {slot_2_173 ?? (
                                    <Relume
                                        id="2_173"
                                        className="Pixso-instance-2_173 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_172"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_174"
                            className="stroke-wrapper-2_174 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_174 pixso-relative-flex">
                                {slot_2_175 ?? (
                                    <p
                                        id="2_175"
                                        className="Pixso-paragraph-2_175 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_174"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_176"
                            className="stroke-wrapper-2_176 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_176 pixso-relative-flex">
                                {slot_2_177 ?? (
                                    <Relume
                                        id="2_177"
                                        className="Pixso-instance-2_177 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_178 ?? (
                                    <p
                                        id="2_178"
                                        className="Pixso-paragraph-2_178 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_176"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_179"
                            className="stroke-wrapper-2_179 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_179 pixso-relative-flex">
                                {slot_2_180 ?? (
                                    <p
                                        id="2_180"
                                        className="Pixso-paragraph-2_180 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_181 ?? (
                                    <Relume
                                        id="2_181"
                                        className="Pixso-instance-2_181 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_179"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_182"
                            className="stroke-wrapper-2_182 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_182 pixso-relative-flex">
                                {slot_2_183 ?? (
                                    <Relume
                                        id="2_183"
                                        className="Pixso-instance-2_183 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_182"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_184"
                            className="stroke-wrapper-2_184 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_184 pixso-relative-flex">
                                {slot_2_185 ?? (
                                    <p
                                        id="2_185"
                                        className="Pixso-paragraph-2_185 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_184"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_186"
                            className="stroke-wrapper-2_186 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_186 pixso-relative-flex">
                                {slot_2_187 ?? (
                                    <Relume
                                        id="2_187"
                                        className="Pixso-instance-2_187 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                                {slot_2_188 ?? (
                                    <p
                                        id="2_188"
                                        className="Pixso-paragraph-2_188 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                            </div>
                            <div className="stroke-2_186"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_189"
                            className="stroke-wrapper-2_189 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_189 pixso-relative-flex">
                                {slot_2_190 ?? (
                                    <p
                                        id="2_190"
                                        className="Pixso-paragraph-2_190 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                    >
                                        {"Button"}
                                    </p>
                                )}
                                {slot_2_191 ?? (
                                    <Relume
                                        id="2_191"
                                        className="Pixso-instance-2_191 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_189"></div>
                        </div>
                    )}
                {Style === "Secondary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_192"
                            className="stroke-wrapper-2_192 pixso-relative-flex-auto-size"
                        >
                            <div className="Pixso-symbol-2_192 pixso-relative-flex">
                                {slot_2_193 ?? (
                                    <Relume
                                        id="2_193"
                                        className="Pixso-instance-2_193 pixso-relative-no-shrink"
                                    ></Relume>
                                )}
                            </div>
                            <div className="stroke-2_192"></div>
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_194"
                            className="Pixso-symbol-2_194 pixso-relative-flex-auto-size"
                        >
                            {slot_2_195 ?? (
                                <p
                                    id="2_195"
                                    className="Pixso-paragraph-2_195 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_196"
                            className="Pixso-symbol-2_196 pixso-relative-flex-auto-size"
                        >
                            {slot_2_197 ?? (
                                <Relume
                                    id="2_197"
                                    className="Pixso-instance-2_197 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_198 ?? (
                                <p
                                    id="2_198"
                                    className="Pixso-paragraph-2_198 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_199"
                            className="Pixso-symbol-2_199 pixso-relative-flex-auto-size"
                        >
                            {slot_2_200 ?? (
                                <p
                                    id="2_200"
                                    className="Pixso-paragraph-2_200 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_201 ?? (
                                <Relume
                                    id="2_201"
                                    className="Pixso-instance-2_201 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_202"
                            className="Pixso-symbol-2_202 pixso-relative-flex-auto-size"
                        >
                            {slot_2_203 ?? (
                                <Relume
                                    id="2_203"
                                    className="Pixso-instance-2_203 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_204"
                            className="Pixso-symbol-2_204 pixso-relative-flex-auto-size"
                        >
                            {slot_2_205 ?? (
                                <p
                                    id="2_205"
                                    className="Pixso-paragraph-2_205 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_206"
                            className="Pixso-symbol-2_206 pixso-relative-flex-auto-size"
                        >
                            {slot_2_207 ?? (
                                <Relume
                                    id="2_207"
                                    className="Pixso-instance-2_207 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_208 ?? (
                                <p
                                    id="2_208"
                                    className="Pixso-paragraph-2_208 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_209"
                            className="Pixso-symbol-2_209 pixso-relative-flex-auto-size"
                        >
                            {slot_2_210 ?? (
                                <p
                                    id="2_210"
                                    className="Pixso-paragraph-2_210 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_211 ?? (
                                <Relume
                                    id="2_211"
                                    className="Pixso-instance-2_211 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Tertiary" &&
                    Small === "True" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_212"
                            className="Pixso-symbol-2_212 pixso-relative-flex-auto-size"
                        >
                            {slot_2_213 ?? (
                                <Relume
                                    id="2_213"
                                    className="Pixso-instance-2_213 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "No icon" && (
                        <div
                            id="2_214"
                            className="Pixso-symbol-2_214 pixso-relative-flex-auto-size"
                        >
                            {slot_2_215 ?? (
                                <p
                                    id="2_215"
                                    className="Pixso-paragraph-2_215 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Leading" && (
                        <div
                            id="2_216"
                            className="Pixso-symbol-2_216 pixso-relative-flex-auto-size"
                        >
                            {slot_2_217 ?? (
                                <Relume
                                    id="2_217"
                                    className="Pixso-instance-2_217 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                            {slot_2_218 ?? (
                                <p
                                    id="2_218"
                                    className="Pixso-paragraph-2_218 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Trailing" && (
                        <div
                            id="2_219"
                            className="Pixso-symbol-2_219 pixso-relative-flex-auto-size"
                        >
                            {slot_2_220 ?? (
                                <p
                                    id="2_220"
                                    className="Pixso-paragraph-2_220 text-textregularnormal-2_81 pixso-relative-auto-size pixso-flex-shrink-0"
                                >
                                    {"Button"}
                                </p>
                            )}
                            {slot_2_221 ?? (
                                <Relume
                                    id="2_221"
                                    className="Pixso-instance-2_221 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
                {Style === "Link" &&
                    Small === "False" &&
                    Alternate === "True" &&
                    Iconposition === "Only" && (
                        <div
                            id="2_222"
                            className="Pixso-symbol-2_222 pixso-relative-flex-auto-size"
                        >
                            {slot_2_223 ?? (
                                <Relume
                                    id="2_223"
                                    className="Pixso-instance-2_223 pixso-relative-no-shrink"
                                ></Relume>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Button;
