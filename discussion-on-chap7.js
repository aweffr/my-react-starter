// MoCheng<深入浅出React和Redux>第七章,
// 关于使用原生fetch的例子:
const componentDidMount = () => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl).then((response) => {
        if (response.status !== 200) {
            throw new Error('Fail to get response with status ' + response.status);
        }

        response.json().then((responseJson) => {
            this.setState({weather: responseJson.weatherinfo});
        }).catch((error) => {
            this.setState({weather: null});
        });
    }).catch((error) => {
      this.setState({weather: null});
    });
}

// 我的想法:
const componentDidMount = () => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl).then((response) => {
        if (response.status !== 200) {
            throw new Error('Fail to get response with status ' + response.status);
        }
        return response.json()
    }).then((responseJson) => {
        this.setState({weather: responseJson.weatherinfo});
    }).catch((error) => {
        this.setState({weather: null});
    });
}

// 主要区别在于`response.json()`是否return上
