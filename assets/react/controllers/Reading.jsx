import React, { PureComponent } from "react";

export class RawHtml extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {children, className = ""} = this.props;
    return <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
  }
}

const Reading = ({ title, contenu }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBlock: 12 }}>{title}</h2>
      <RawHtml>{contenu}</RawHtml>
    </div>
  );
};

export default Reading;
