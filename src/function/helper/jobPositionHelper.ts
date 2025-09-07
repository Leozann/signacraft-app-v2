import jobPositionStaticJSON from "@/assets/json/jobPositionStatic.json";

function HJobPosition() {
    return jobPositionStaticJSON.map(item => ({
    ...item,
    value: String(item.value),
}));
};

export { HJobPosition };
