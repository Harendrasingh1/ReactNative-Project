
// Class bases Component
class Home extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("API Call");
  }

  render() {
    console.log("Render");
    return <Text>Hello</Text>;
  }
}

