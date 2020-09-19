import React from "react";
import { connect } from "react-redux";
const createMarkup = () => {
  return {
    __html: `<embed src="http://resume.github.io/views/resume.html"></embed>`
  };
};
const ResumeDisplay = props => {
  return (
    <div>
      <div>Resume Display</div>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

var mapStateToProps = state => {
  return {
    githubData: state.githubData
  };
};
export default connect(mapStateToProps)(ResumeDisplay);
