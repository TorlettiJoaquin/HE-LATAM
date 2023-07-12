import News from "./News/News";
import { Screen1 } from "./Screen1/Screen1";
import { Screen2 } from "./Screen2/Screen2";
import { Screen3 } from "./Screen3/Screen3";

export const Content = () => {
    return (
        <section className="relative">
            <News />
            <Screen1 />
            <Screen2 />
            <Screen3 />
        </section>
    );
};
