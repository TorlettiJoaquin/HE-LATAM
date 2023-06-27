import { Screen1 } from "./Screen1/Screen1";
import { Screen2 } from "./Screen2/Screen2";
import { Screen3 } from "./Screen3/Screen3";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative overflow-hidden bg-content-bg bg-no-repeat bg-[center_top]">
            <Screen1 />
            <Screen2 />
            <Screen3 />
        </section>
    );
};
