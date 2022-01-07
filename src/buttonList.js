import Button from './button';


const buttonList = (props) => {
    let rows = [];

    for (let i = 0; i < 10; i++) {
        rows.push(<Button text={props.text} key={i} />)

    }

    return <div>{rows}</div>;
};

export default buttonList;