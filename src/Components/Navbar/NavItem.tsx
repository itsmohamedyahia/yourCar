export default function NavItem(props) {
  return (
    <>
      {props.btn ? (
        <button type="button" className={props.className}>
          {props.label}
        </button>
      ) : (
        <li>
          <a href={props.to} className="navbar__nav__link">
            {props.label}
          </a>
        </li>
      )}
    </>
  );
}
