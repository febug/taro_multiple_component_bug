import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import "./index.scss";

interface AuthorityProps {
  renderNoMath: any;
}

interface AuthorityState {
  authority: boolean;
}

class Authority extends Component<AuthorityProps, AuthorityState> {
  state = {
    authority: true
  };

  componentDidMount() {
    console.log("authority did mount");
  }

  render() {
    return (
      <Block>
        {this.state.authority ? this.props.children : this.props.renderNoMath}
      </Block>
    );
  }
}


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
