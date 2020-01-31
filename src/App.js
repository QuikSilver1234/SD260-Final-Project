import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Form from "./form";
import Posts from "./posts";
class App extends Component {
  state = {
    toggle: false,
    formValue: "",
    people: [
      "Bjergsen",
      "Thorin",
      "Dardoch",
      "Team Solo Mid Official",
      "SaltyTeemo",
      "PapaSmithy",
      "Kobbe"
    ],
    info: [
      {
        likes: 165,
        id: 1,
        user: "Riot Games",
        message:
          "10th Anniversary celebrations featured the announcement of many new games including Legends of Runeterra, League of Legends: Wild Rift, and a first-person shooter game currently known as 'Project A'!",
        comments: [
          {
            id: 13,
            user: "xXxYasuoMain420xXx",
            message:
              "OMG fix matchmaking bad players on my team keep me in iron when I deserve to be at least master tier thanx rito"
          },
          {
            id: 14,
            user: "ExoWraith",
            message:
              "Wild Rift is basically League of Legends on mobile, right?"
          },
          {
            id: 15,
            user: "DisguisedToastHS",
            message:
              "Really can't wait to try out the new card game, Legends of Runeterra"
          }
        ]
      },
      {
        likes: 826,
        id: 2,
        user: "Team Solo Mid Official",
        message:
          "Week one didn't go our way but we'll practice hard and come back stronger next week.",
        comments: [
          {
            id: 10,
            user: "TSMHater23546",
            message: "get rid of bjergsen ez fix"
          },
          {
            id: 11,
            user: "Anon1243487",
            message:
              "Why did you guys import Kobbe and let go of Johnsun when you could have played Johnsun in LCS and been just fine?"
          },
          {
            id: 12,
            user: "G2Minion",
            message:
              "Dardoch was playing like a man possessed in the early game. Just need to work on translating his leads into victories."
          }
        ]
      },
      {
        likes: 676,
        id: 3,
        user: "Dardoch",
        message:
          "The level of play I exhibited this week is not tolerated by myself, and should not be tolerated by my teammates, the organization staff, or the fanbase.",
        comments: [
          {
            id: 7,
            user: "ReasonableTSMfan",
            message:
              "You were the only one who was trying, man. Can't win every game."
          },
          {
            id: 8,
            user: "UntamedLazyEye",
            message: "Bjergsen had no impact this week. This isn't on you."
          },
          {
            id: 9,
            user: "TheLoneRook",
            message:
              "Stop being so hard on yourself, you did everything in your power."
          }
        ]
      },
      {
        likes: 534,
        id: 4,
        user: "Domasis",
        message:
          "VOD Review from TSM vs Team Liquid is up! You can find it on my youtube channel!",
        comments: [
          {
            id: 4,
            user: "MrTavit",
            message:
              "I agree with your points, TSM's draft really put them in a tough spot against what TL decided to run"
          },
          {
            id: 5,
            user: "Starace01",
            message:
              "If TSM was more proactive in the 15-25 minute range that was a free win. No need to let the comp from TL get to the late game."
          },
          {
            id: 6,
            user: "CzarTaylor",
            message:
              "Lee Sin is so difficult to execute against Ezreal and Zoe that TSM really had no options to make more aggressive plays. Unfortunate, really."
          }
        ]
      },
      {
        likes: 991,
        id: 5,
        user: "SaltyTeemo",
        message:
          "Which game should I host on my channel next week? TL vs IMT, GGS vs TSM, or EG vs C9?",
        comments: [
          {
            id: 1,
            user: "PapaSmithy",
            message: "Can we get a 100T game sometime?"
          },
          {
            id: 2,
            user: "Thorin",
            message:
              "This week is looking pretty bad in terms of matchups. Really one-sided for all of them. Probably not worth watching."
          },
          {
            id: 3,
            user: "SpiderAxe30",
            message:
              "I just don't wanna watch another 70 minute TSM game please..."
          }
        ]
      }
    ]
  };
  toggleLike = () => {
    console.log(this.state.toggle);
    let togglestate = !this.state.toggle;
    this.setState({ toggle: togglestate });
  };

  handleChange = data => {
    console.log(data);
    this.setState({ formValue: data });
  };
  passData = data => {
    this.state.info.map(elem => {
      if (elem.id === 16) {
        elem.message = data;
      }
    });
    let any = [...this.state.info];
    this.setState({
      info: any
    });
  };
  getUser = data => {
    console.log(data);
    let userName = {
      likes: 626,
      id: 16,
      user: data,
      message: "",
      comments: []
    };
    let newPost = [userName, ...this.state.info];
    this.setState({
      info: newPost
    });
  };
  sortLikes = () => {
    this.state.info.sort((a, b) => Number(b.likes) - Number(a.likes));
    let any = [...this.state.info];
    this.setState({
      info: any
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header
            people={this.state.people}
            getUser={this.getUser}
            sortLikes={this.sortLikes}
          />
        </div>
        <div>
          <Form
            passData={this.passData}
            value={this.state.formValue}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          {this.state.info.map(post => (
            <Posts
              key={post.id}
              info={post}
              toggleLike={this.toggleLike}
              toggle={this.state.toggle}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
