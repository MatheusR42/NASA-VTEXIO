import React, { Component } from "react";
import { Dropdown, Button, Input, Spinner } from "vtex.styleguide";
import { withApollo } from "react-apollo";
import HeaderNasa from './components/HeaderNasa';
import queryMarsPhotos from "./queries/queryMarsPhotos.gql";

class Rovers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: {
        rover: "Opportunity",
        camera: "PANCAM",
        sol: '2000'
      },
      loading: false,
      photos: [],
      roverOptions: [
        {
          value: "Opportunity",
          label: "Opportunity"
        },
        {
          value: "Spirit",
          label: "Spirit"
        }
      ],
      cameraOptions: [
        {
          value: "FHAZ",
          label: "Front Hazard Avoidance Camera"
        },
        {
          value: "RHAZ",
          label: "Rear Hazard Avoidance Camera"
        },
        {
          value: "NAVCAM",
          label: "Navigation Camera"
        },
        {
          value: "PANCAM",
          label: "Panoramic Camera"
        },
        {
          value: "MINITES",
          label: "Miniature Thermal Emission Spectrometer (Mini-TES)"
        }
      ]
    };

    this.handleChangeRover = this.handleChangeRover.bind(this);
    this.handleChangeCamera = this.handleChangeCamera.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeCamera(e, value) {
    this.setState({
      selectedOptions: {
        ...this.state.selectedOptions,
        camera: value
      }
    });
  }

  handleChangeRover(e, value) {
    this.setState({
      selectedOptions: {
        ...this.state.selectedOptions,
        rover: value
      }
    });
  }

  submit() {
    this.setState({ loading: true });

    this.props.client
      .query({
        query: queryMarsPhotos,
        variables: {
          ...this.state.selectedOptions
        }
      })
      .then(response => {
        this.setState({ loading: false });

        try {
          const photos = response.data.marsPhotos.photos.map(photo => {
            return photo.img_src.replace('http:', 'https:');
          });

          this.setState({ photos });
        } catch (e) {
          alert("O foguete explodiu!");
        }
      });
  }

  render() {
    return (
      <div className="mw5 mw7-ns center pa3 ph5-ns">
        <HeaderNasa />

        <div className="mb5">
          <Dropdown
            label="Camera"
            options={this.state.roverOptions}
            onChange={this.handleChangeRover}
            value={this.state.selectedOptions.rover}
            placeholder="Select a Rover"
          />
        </div>

        <div className="mb5">
          <Dropdown
            label="Camera"
            options={this.state.cameraOptions}
            onChange={this.handleChangeCamera}
            value={this.state.selectedOptions.camera}
            placeholder="Select a Camera"
          />
        </div>

        <div className="mb5">
          <Input
            type="number"
            placeholder="Sol"
            label="Sol"
            value={this.state.selectedOptions.sol}
            onChange={e =>
              this.setState({
                selectedOptions: {
                  ...this.state.selectedOptions,
                  sol: e.target.value
                }
              })
            }
          />
        </div>

        <Button variation="primary" onClick={this.submit}>
          Search photos
        </Button>

        {this.state.loading && <Spinner />}

        <div>
          {this.state.photos.map(photo => {
            return <img src={photo} key={photo} style={{ margin: "10px" }} />;
          })}
        </div>
      </div>
    );
  }
}

export default withApollo(Rovers);

