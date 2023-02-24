import React, { PureComponent } from "react";

export class RawHtml extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {children, className = ""} = this.props;
    return <div className={className} dangerouslySetInnerHTML={{ __html: children}} />;
  }
}

const Reading = ({ title, contenu }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBlock: 12 }}>{title}</h2>
      <RawHtml>{contenu}</RawHtml>
    </>
  );
};

export default Reading;
