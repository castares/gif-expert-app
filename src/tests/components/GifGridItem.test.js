import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test 1 GifGridItem", () => {
    let wrapper = shallow(<GifGridItem />);

    test("GifGridItem snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
