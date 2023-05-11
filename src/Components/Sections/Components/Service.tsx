export default function Service(props) {
  return (
    <div className={props.className}>
      {props.icon}
      <h3 className="section--services__services__service__title">
        {props.title}
      </h3>
      <p className="section--services__services__service__description">
        {props.description}
      </p>
    </div>
  );
}
