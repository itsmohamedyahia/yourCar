export default function NavItem(props) {
  return (
    <>
      {props.btn ? (
        <button
          type="button"
          className={props.className}
          onClick={props.onClick}
        >
          {props.label}
        </button>
      ) : (
        <li>
          <a href={props.to} className={props.className}>
            {props.label}
          </a>
        </li>
      )}
    </>
  );
}
