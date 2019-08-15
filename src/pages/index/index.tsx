import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Authority from "../../components/Authority"
import "./index.scss";

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentDidMount() {
    console.log("index did mount");
  }

  render() {
    return (
      <View className="index">
        <Authority renderNoMath={<Text>no ...?</Text>}>
          ok
        </Authority>
      </View>
    );
  }
}
