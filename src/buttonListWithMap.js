import Button from './button'

const buttonListWithMap = () => {
    const buttonTexts = ["save", "click", "send", "delete", "cancel"];

    return <div>{buttonTexts.map((text, i) => <Button text={text} key={i} />)}</div>
}

export default buttonListWithMap;