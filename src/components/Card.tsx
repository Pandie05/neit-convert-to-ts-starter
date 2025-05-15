interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};
