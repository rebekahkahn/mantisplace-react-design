import React, { useState } from "react";
import { Collapse, Card, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

function RenderNav({ header }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const toggleImage = () => setImage(!image);

  if (header.subtitles.length === 0) {
    return (
      <Card className="rounded-0">
        <NavLink className="nav-link p-0" to={header.name}>
          <Button className="navbar-buttons btn-light w-100 rounded-0 p-2">
            {header.name}
          </Button>
        </NavLink>
      </Card>
    );
  } else {
    return (
      <Card className="rounded-0">
        <Button
          onClick={() => {
            toggle();
            toggleImage();
          }}
          className="navbar-buttons btn-light rounded-0 p-2"
          aria-labelledby={header.name}
        >
          {header.name}
          {image ? (
            <i class="fa fa-angle-up float-right" />
          ) : (
            <i class="fa fa-angle-down float-right" />
          )}
        </Button>
        <Collapse isOpen={isOpen}>
          {header.subtitles.map((subtitle) => {
            return (
              <NavLink className="nav-link p-0" to="/home">
                <Button
                  block
                  key={subtitle.id}
                  aria-labelledby={subtitle.name}
                  className="navbar-buttons subtitle-buttons btn-light rounded-0 p-2 mt-0"
                >
                  {subtitle.name}
                </Button>
              </NavLink>
            );
          })}
        </Collapse>
      </Card>
    );
  }
}

function Sidebar(props) {
  const header = props.headers.map((header) => {
    return (
      <div key={header.id}>
        <RenderNav header={header} />
      </div>
    );
  });

  return <React.Fragment>{header}</React.Fragment>;
}

export default Sidebar;
