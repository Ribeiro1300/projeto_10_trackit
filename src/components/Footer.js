import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/today">
        <h3>Hábitos</h3>
      </Link>
      <Link to="/today">
        <h3>Hoje</h3>
      </Link>
      <Link to="/today">
        <h3>histórico</h3>
      </Link>
    </div>
  );
}
