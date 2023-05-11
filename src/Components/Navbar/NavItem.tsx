export default function NavItem(props) {
  return (
    <li>
      {props.btn ? (
        <button type="button">{props.label}</button>
      ) : (
        <a href={props.to} className="navbar__nav__link">
          {props.label}
        </a>
      )}
    </li>
  );
}
