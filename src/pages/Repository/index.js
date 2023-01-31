import React, { Component } from "react";
import { FaSpinner, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Container from "../../componentes/Container";
import { Loading, Owner } from "./styles";

export default class Repository extends Component {
  state = {
    repository: {},
    loading: true,
  };

  componentDidMount = async () => {
    const repoName = decodeURIComponent(this.props.match.params.repository);
    const repository = await api.get(`/repos/${repoName}`);

    this.setState({
      repository: repository.data,
      loading: false,
    });
  };

  render() {
    const { repository, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaSpinner size={75} />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">
            <div>
              <FaArrowLeft /> Back to previous page
            </div>
          </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>

          <br></br>

          <p>Language: {repository.language}</p>
          <p>License: {repository.license?.name}</p>
          <p>Forks: {repository.forks}</p>
          <p>Open Issues: {repository.open_issues}</p>
        </Owner>
      </Container>
    );
  }
}
