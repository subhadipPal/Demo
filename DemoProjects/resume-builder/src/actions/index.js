import { GITHUB_DATA_FETCH_SUCCESS, GITHUB_DATA_FETCH_FAILURE } from "./types";
import github from "../api/github";
import createBrowserHistory from "../history";

export const getGithubData = username => async dispatch => {
  var response = await github.get(`/users/${username}/starred?per_page=100&page=1`);
  if (response && response.data.length > 0) {
    createBrowserHistory.push(`/resume/${username}`);
    dispatch({
      type: GITHUB_DATA_FETCH_SUCCESS,
      payload: response.data
    });
  } else {
    createBrowserHistory.push(`/error/${username}`);
    dispatch({
      type: GITHUB_DATA_FETCH_FAILURE,
      payload: []
    });
  }
};
