import Taro, { Component } from "@tarojs/taro";
import { Block } from "@tarojs/components";

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

export default Authority;
